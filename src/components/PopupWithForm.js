import React from "react";
export default function PopupWithForm({ name, isOpen, onClose, formName, title, children, buttonSubmitTitle, onSubmit }) {

    return (
        <>
            <div className={`popup popup-${name} ${isOpen && 'popup_opened'}`}>
                <div className="popup__container">
                    <button
                        className="popup__btn-close"
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                    />
                    <form
                        className="form"
                        name={formName}
                        action="#"
                        noValidate
                        onSubmit={onSubmit}
                    >
                        <h2
                            className="form__edit-title">{title}
                        </h2>
                        {children}
                        <button
                            className="form__btn-save"
                            type="submit"
                            aria-label="Save">{buttonSubmitTitle}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}