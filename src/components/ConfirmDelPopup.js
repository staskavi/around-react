import PopupWithForm from "./PopupWithForm";
import {useContext} from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ConfirmDelPopup({ selectedCard, isOpen, onClose, onConfirmDelPopupClick}) {

    const currentUser = useContext(CurrentUserContext);

    const handleConfirmDelPopupClick = () => onConfirmDelPopupClick(selectedCard);
    console.log(selectedCard);
    return (
      <div>
        <PopupWithForm
        name="del-card"
        title="Are you shure?"
        formName="del-confirm_form"
        buttonSubmitTitle="Yes"
        isOpen={isOpen}/*!*/
        onClose={onClose}
        onSubmit={handleConfirmDelPopupClick}
      />
      </div>
    );
  }