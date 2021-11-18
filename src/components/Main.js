import {api} from '../utils/api'
import Header from './Header';
import Card from './Card';
import cousteau from '../images/cousteau.jpg';
import { useEffect, useState } from 'react';

export default function Main(props) {

    const [userName, setuserName] = useState("Jacques Cousteau");
    const [userDescription, setuserDescription] = useState("Explorer");
    const [userAvatar, setuserAvatar ] = useState(cousteau);
    const [cards, setCards] = useState([]);
   
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
          console.log(cardData);
        setuserName(userData.name);
        setuserDescription(userData.about);
        setuserAvatar(userData.avatar);
        setCards([...cardData]);
      })
      .catch(console.error);
  }, []);

    return(
        <main className="content">
        <Header/>
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-container">
              <button 
              className="profile__btn-avatar-edit" 
              type="button" 
              aria-label="" 
              onClick={props.onEditAvatarClick}>
              </button>
                <img className="profile__image" src={userAvatar} alt={userName}/>
            </div>
            <div className="profile__info">
              <div className="profile__text">
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__subtitle">{userDescription}</p>
              </div>
              <button 
              className="profile__btn-edit" 
              type="button" 
              aria-label="" 
              onClick={props.onEditProfileClick}>
              </button>
            </div>
          </div>
          <button 
          className="profile__btn-add" 
          type="button" 
          aria-label="" 
          onClick={props.onEditAddPlaceClick}>
          </button>
        </section>
          
          <section className="elements">
            <ul className="elements__list">
            {cards.map((card) => (
            <Card
              key={card["_id"]}
              card={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
          </section>

    <template id="element-template">
      <li className="element">
        <button className="element__btn-del" type="button" aria-label="Delete">
        </button>
        <img className="element__image" src="https://code.s3.yandex.net/web-code/yosemite.jpg" alt="Yosemite Valley"/>
        <div className="element__container">
          <h2 className="element__title">
          </h2>
          <div className="element__likes-container">
             <button className="element__btn-like" type="button" aria-label="Like">
             </button>
             <p className="element__num-of-likes"></p>
          </div>
        </div>
      </li>
    </template>
</main>
);}