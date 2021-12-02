import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import PopupWithForm from './PopupWithForm';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup ';
import EditProfilePopup from './EditProfilePopup';
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
const handleCardDelete = (card) => {
  api
    .deleteCard(card._id)
    .then((res) => {
      setCards(
        (state) => state.filter((c) => c._id !== card._id)
      );
      
    })
    .catch(console.error);
};
/** */
const handleCardLike = (card) => {
  const isLiked = card.likes.some((i) => i._id === currentUser._id); //Check one more time if this card was already liked
  api //Send a request to the API and getting the updated card data
    .changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      );
    })
    .catch(console.error);
};
/**/
const handleUpdateUser = (user) => {
  console.log(user);

  api
    .updateUserInfo(user)
    .then((res) => {
      setCurrentUser({
        ...res,
      });
      setIsEditProfilePopupOpen(false);
    })
    .catch(console.error)
    .finally(
      () => console.log("in finally...")
    );
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
      <PopupWithForm
        name="add"
        title="New Place"
        formName="add_form"
        buttonSubmitTitle="Create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input"
          id="title"
          type="text"
          defaultValue=""
          placeholder="Title"
          name="name"
          minLength="1"
          maxLength="30"
          required
        />
        <span className="form__input-error" id="title-error">This field is required.</span>
        <input
          className="form__input"
          id="image-link"
          type="url"
          defaultValue=""
          placeholder="Image Link"
          name="link"
          required
        />
        <span className="form__input-error" id="image-link-error">This field is required.
        </span>
      </PopupWithForm>
      <PopupWithForm
        name="change-profile-img"
        title="Change Profile Picture"
        formName="edit_form"
        buttonSubmitTitle="Create"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input"
          type="url"
          name="avatar"
          id="avatar"
          defaultValue=""
          placeholder="Avatar url"
          required
        />
        <span className="form__input-error" id="avatar-error">This field is required.</span>
      </PopupWithForm>

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
