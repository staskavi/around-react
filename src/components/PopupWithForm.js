
export default function PopupWithForm(props) {

    return(
        <>
        <div className={
            props.isOpen
            ? `popup popup-${props.name} popup_opened`
            :`popup popup-${props.name}`
            }
        >
            <div 
                className="popup__container"
            >
            <button 
                className="popup__btn-close" 
                type="button" 
                aria-label="Close"
                onClick={props.onClose}
            />
            <form 
                className="form" 
                name={props.formName} 
                action="#"
                noValidate
            >
            <h2
                className="form__edit-title">{props.title}
            </h2>
            {props.children}
            <button 
                className="form__btn-save" 
                type="submit" 
                aria-label="Save">{props.buttonSubmitTitle}
            </button>
        </form>
      </div>
    </div>
</>
    );
}