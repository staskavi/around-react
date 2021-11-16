import logo from './images/Around.svg';
import cousteau from './images/cousteau.jpg';
//import './App.css';

function App() {
  return ( 
    <body className="page">
  
    <header className="header">
       <img className="header__logo" src={logo} alt="Around the U.S. logo"/>
    </header>
   
    <main className="content">
     
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <button className="profile__btn-avatar-edit" type="button" aria-label=""> </button>
              <img className="profile__image" src={cousteau} alt="Jacques Cousteau"/>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__title">Jacques Cousteau</h1>
              <p className="profile__subtitle">Explorer</p>
            </div>
            <button className="profile__btn-edit" type="button" aria-label="">
            </button>
          </div>
        </div>
        <button className="profile__btn-add" type="button" aria-label="">
        </button>
      </section>
        
        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
    </main>
   
    <footer className="footer">
      <p className="footer__copyright">&copy; 2021 Around The U.S. StasK.
      </p>
    </footer>
    
    <div className="popup popup-edit">
      <div className="popup__container">
        <button className="popup__btn-close" type="button" aria-label="">
        </button>
        <form className="form" name="edit_form" action="#" novalidate>
          <h2 className="form__edit-title">Edit Profile</h2>
          <input className="form__input profile-name" id="profile-name" type="text" value="" placeholder="Name" name="editName" minlength="2" maxlength="40" required/>
          <span className="form__input-error" id="profile-name-error">This field is required.
          </span>
          <input className="form__input profile-about" id="profile-about" type="text" value="" placeholder="About Me" name="editAbout" minlength="2" maxlength="200" required/>
            <span className="form__input-error" id="profile-about-error">This field is required.
            </span>
          <button className="form__btn-save" type="submit" aria-label="Save">Save
          </button>
        </form>
      </div>
    </div>
   
    <div className="popup popup-add">
      <div className="popup__container">
        <button className="popup__btn-close" type="button" aria-label="Close">
        </button>
        <form className="form form-add" name="add_form"  action="#" novalidate>
          <h2 className="form__edit-title">New Place</h2>
          <input className="form__input" id="title" type="text" value="" placeholder="Title" name="name" minlength="1" maxlength="30" required/>
          <span className="form__input-error" id="title-error">This field is required.
          </span>
          <input className="form__input" id="image-link" type="url" value="" placeholder="Image Link" name="link"  required/>
          <span className="form__input-error" id="image-link-error">This field is required.
          </span>
          <button className="form__btn-save" type="submit" aria-label="Create">Create</button>
        </form>
      </div>
    </div>
   
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
    
     <div className="popup popup-del-card">
      <div className="popup__container">
        <form  className="form" name="del-confirm_form" action="#" novalidate>
        <button className="popup__btn-close" type="button" aria-label=""></button>
          <h2 className="form__edit-title">Are you shure?</h2>
          <button className="form__btn-save" type="submit" aria-label="">Yes</button>
      </form>
      </div>
    </div>
    
     <div className="popup popup-change-profile-img">
      <div className="popup__container">
        <button className="popup__btn-close" type="button" aria-label="">
        </button>
        <form className="form form-add" name="edit_form" action="#" novalidate>
          <h2 className="form__edit-title">Change Profile Picture</h2>
          <input className="form__input" type="url" name="avatar" id="avatar" value="" placeholder="Avatar url" required/>
          <span className="form__input-error" id="avatar-error">This field is required.
          </span>
          <button className="form__btn-save" type="submit" aria-label="Save">Save</button>
        </form>
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
