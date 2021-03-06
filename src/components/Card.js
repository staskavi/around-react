import {useContext} from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete, onCardDelConfirm }) {

  const currentUser = useContext(CurrentUserContext);
  
  // Checking if the current user is the owner of the current card
  const isOwn = card.owner._id === currentUser._id;
  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = (
  `element__btn-del ${isOwn ? 'enable' : 'disable'}`
  );
  // Check if the card was liked by the current user
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `element__btn-like ${ isLiked ? "element__btn-like_active" : "" }`;

  const handleClick = () => onCardClick(card);
  const handleCardLike = () => onCardLike(card);
  const handleCardDelConfirm = () => onCardDelConfirm(card);

  return (
    <li className="element">
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="Delete"
        className={cardDeleteButtonClassName}
        onClick={handleCardDelConfirm}
      />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes-container">
          <button
            type="button"
            aria-label="Like"
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
          />
          <span className="element__num-of-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}