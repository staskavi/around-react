//import { api } from '../utils/api'
import Header from './Header';
import Card from './Card';
//import cousteauImage from '../images/cousteau.jpg';
import { useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({ cards, onEditAvatarClick, onEditProfileClick, onEditAddPlaceClick, onCardClick, onCardDelete, onCardLike }) {

  //const [userName, setUserName] = useState("");
  //const [userDescription, setUserDescription] = useState("");
  //const [userAvatar, setUserAvatar] = useState(cousteauImage);
  //const [cards, setCards] = useState([]);

 /* useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards([...cardsData]);
      })
      .catch(console.error);
  }, []);*/
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <Header />
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <button
              className="profile__btn-avatar-edit"
              type="button"
              aria-label=""
              onClick={onEditAvatarClick}>
            </button>
            <img className="profile__image" src={currentUser["avatar"]} alt={currentUser["name"]} />
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__title">{currentUser["name"]}</h1>
              <p className="profile__subtitle">{currentUser["about"]}</p>
            </div>
            <button
              className="profile__btn-edit"
              type="button"
              aria-label=""
              onClick={onEditProfileClick}>
            </button>
          </div>
        </div>
        <button
          className="profile__btn-add"
          type="button"
          aria-label=""
          onClick={onEditAddPlaceClick}>
        </button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </section>

      <template id="element-template">
        <li className="element">
          <button className="element__btn-del" type="button" aria-label="Delete">
          </button>
          <img className="element__image" src="https://code.s3.yandex.net/web-code/yosemite.jpg" alt="Yosemite Valley" />
          <div className="element__container">
            <h2 className="element__title">
            </h2>
            <div className="element__likes-container">
              <button className="element__btn-like" type="button" aria-label="Like">
              </button>
              <p className="element__num-of-likes" />
            </div>
          </div>
        </li>
      </template>
    </main>
  );
}