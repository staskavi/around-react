import Card from './Card';
import { useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({ cards, onEditAvatarClick, onEditProfileClick, onEditAddPlaceClick, onCardClick, onCardDelete, onCardLike, onCardDelConfirm }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
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
              onCardLike={onCardLike}
              onCardDelConfirm={onCardDelConfirm}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}