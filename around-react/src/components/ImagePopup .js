
export default function ImagePopup() {

    return(
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
    );
}