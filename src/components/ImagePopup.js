import React from "react";
export default function ImagePopup({ name, isOpen, onClose, selectedCard }) {

  return (
    <div className={`popup popup-${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__image-container">
        <button className="popup__btn-close" type="button" aria-label="Close" onClick={onClose} />
        <div className="popup__fullsize-image">
          <img className="popup__image-photo"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
          <h2 className="popup__image-title">{selectedCard.name}
          </h2>
        </div>
      </div>
    </div>
  );
}