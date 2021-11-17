
import { useState } from 'react';
import cousteau from '../images/cousteau.jpg';
//import './App.css';
import PopupWithForm from './PopupWithForm'; 
import Header from './Header';
import Footer from './Footer';
import ImagePopup from './ImagePopup ';

function App() {

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false); 
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isConfirmDelPopupOpen, setisConfirmDelPopupOpen] = useState(false);
  
  const closeAllPopups = () => {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisConfirmDelPopupOpen(false);
  };

  const handleEditAvatarClick = () => setisEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setisEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setisAddPlacePopupOpen(true);
  const handleConfirmDelCardClick = () => setisConfirmDelPopupOpen(true);
  

  return ( 
    <body className="page">
      <main className="content">
      <Header/>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <button className="profile__btn-avatar-edit" type="button" aria-label="" onClick={handleEditAvatarClick}>
            </button>
              <img className="profile__image" src={cousteau} alt="Jacques Cousteau"/>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__title">Jacques Cousteau</h1>
              <p className="profile__subtitle">Explorer</p>
            </div>
            <button className="profile__btn-edit" type="button" aria-label="" onClick={handleEditProfileClick}>
            </button>
          </div>
        </div>
        <button className="profile__btn-add" type="button" aria-label="" onClick={handleAddPlaceClick}>
        </button>
      </section>
        
        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
    </main>
    <Footer/>
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
          value="" 
          placeholder="Name" 
          name="editName" 
          minlength="2" 
          maxlength="40" 
          required
          />
           <span className="form__input-error" id="profile-name-error">This field is required.</span>
        <input 
          className="form__input profile-about" 
          id="profile-about" 
          type="text" 
          value="" 
          placeholder="About Me" 
          name="editAbout" 
          minlength="2" 
          maxlength="200" 
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
          value="" 
          placeholder="Title" 
          name="name" 
          minlength="1" 
          maxlength="30" 
          required
          />
          <span className="form__input-error" id="title-error">This field is required.</span>
          <input 
          className="form__input" 
          id="image-link" 
          type="url" 
          value="" 
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
            value="" 
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
          >
          </PopupWithForm>
          <div className="popup popup-image">
      <div className="popup__container popup__image-container">
        <button className="popup__btn-close" type="button" aria-label="Close">
        </button>
        <div className="popup__fullsize-image">
          <img className="popup__image-photo" src="https://code.s3.yandex.net/web-code/yosemite.jpg" alt="Yosemite Valley"/>
          <h2 className="popup__image-title">
          </h2>
        </div>
      </div>
    </div>
     
     

    <template id="element-template">
      <li className="element">
        <button className="element__btn-del" type="button" aria-label="Delete">
        </button>
        <img className="element__image" src="https://code.s3.yandex.net/web-code/yosemite.jpg" alt="Yosemite Valley"/>
        <div className="element__container">
          <h2 className="element__title">
          </h2>
          <container className="element__likes-container">
             <button className="element__btn-like" type="button" aria-label="Like">
             </button>
             <p className="element__num-of-likes"></p>
          </container>
        </div>
      </li>
    </template>
 </body>
 );
}
export default App;
