
export default function Card({ card, onCardClick}) {
  
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
        ></button>
        <div className="element__container">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__likes-container">
            <button
              type="button"
              aria-label="Like"
             className="element__btn-like"
            ></button>
            <span className="element__num-of-likes">{card["likes"].length}</span>
          </div>
        </div>
      </li>
    );
  }
  
 