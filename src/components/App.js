import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import PopupWithForm from './PopupWithForm';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDelPopupOpen, setIsConfirmDelPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

    useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setCurrentUser({ ...userData });
        setCards([...cardData]);
      })
      .catch(console.error);
  }, []);
/** */
  const handleCardClick = (card) => {
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
    setIsImagePopupOpen(true);
  };
/**/
const handleUpdateAvatar = ({ avatar }) => {
  api.updateUserImage(avatar)
    .then((updateUserImage) => {
      setCurrentUser(updateUserImage);
    })
    .then(() => {
      closeAllPopups();
    })
    .catch((err) => console.log(err));
};
/***/
const handleAddPlaceSubmit = (data) => {
  api.addNewCard(data)
    .then((res) => {
      setCards([res, ...cards]);
      setIsAddPlacePopupOpen(false);
    })
    .catch((err) => console.log(err));
};
/***/
const handleCardDelete = (card) => {
  api
    .deleteCard(card._id)
    .then(() => {
      setCards(
        (state) => state.filter((c) => c._id !== card._id)
      );
      
    })
    .catch((err) => console.log(err));
};
/** */
const handleCardLike = (card) => {
  const isLiked = card.likes.some((i) => i._id === currentUser._id); 
  api 
    .changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      );
    })
    .catch((err) => console.log(err));
};
/**/
const handleUpdateUser = (user) => {
  api.updateUserInfo(user)
    .then((res) => {
    setCurrentUser({
        ...res,
      });
      closeAllPopups();
    })
    .catch((err) => console.log(err));
};

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDelPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
   
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Main
        cards={cards}
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onEditAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardDelete={handleCardDelete}
        onCardLike={handleCardLike}
      />
      <Footer />
      <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
         <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
     

      <PopupWithForm
        name="del-card"
        title="Are you shure?"
        formName="del-confirm_form"
        buttonSubmitTitle="Yes"
        isOpen={isConfirmDelPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        isOpen={isImagePopupOpen}
        name="image"
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
      </CurrentUserContext.Provider>
    </div>
  );
}