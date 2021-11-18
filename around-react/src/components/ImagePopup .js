
export default function ImagePopup(props) {
    
    return(
        <div className=
            {
        props.isOpen
          ? `popup popup-${props.name} popup_opened`
          : `popup popup-${props.name}`
      }
      >
      <div className="popup__container popup__image-container">
        <button className="popup__btn-close" type="button" aria-label="Close" onClick={props.onClose}>
        </button>
        <div className="popup__fullsize-image">
          <img className="popup__image-photo" 
          src={props.selectedCard["link"]} 
          alt={props.selectedCard["name"]}
          />
          <h2 className="popup__image-title">{props.selectedCard["name"]}
          </h2>
        </div>
      </div>
    </div>
    );
}