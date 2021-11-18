import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup ';

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDelPopupOpen, setIsConfirmDelPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

  const handleCardClick = (card) => {
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
    setIsImagePopupOpen(true);
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
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onEditAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Edit Profile"
        formName="edit_form"
        buttonSubmitTitle="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input profile-name"
          id="profile-name"
          type="text"
          defaultValue=""
          placeholder="Name"
          name="editName"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error" id="profile-name-error">This field is required.</span>
        <input
          className="form__input profile-about"
          id="profile-about"
          type="text"
          defaultValue=""
          placeholder="About Me"
          name="editAbout"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error" id="profile-about-error">This field is required.</span>
      </PopupWithForm>
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
    </div>
  );
}
