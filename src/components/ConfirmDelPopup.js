import PopupWithForm from "./PopupWithForm";

export default function ConfirmDelPopup({ selectedCard, isOpen, onClose, onCardDelete }) {

    const handleCardDelete = (e) => {
      e.preventDefault();
      onCardDelete(selectedCard);
    }

    return (
      <div>
        <PopupWithForm
        name="del-card"
        title="Are you shure?"
        formName="del-confirm_form"
        buttonSubmitTitle="Yes"
        isOpen={isOpen}/*!*/
        onClose={onClose}
        onSubmit={handleCardDelete}
      />
      </div>
    );
  }