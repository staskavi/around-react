import React from 'react';

export default function Card({ card, onCardClick }) {

  const handleClick = () => onCardClick(card);

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
        className="element__btn-del"
      />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes-container">
          <button
            type="button"
            aria-label="Like"
            className="element__btn-like"
          />
          <span className="element__num-of-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

