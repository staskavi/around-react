import {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <div>
      <PopupWithForm
        name="change-profile-img"
        title="Change Profile Picture"
        formName="edit_form"
        buttonSubmitTitle="Create"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <input
          className="form__input"
          type="url"
          name="avatar"
          id="avatar"
          defaultValue=""
          placeholder="Avatar url"
          required
          ref={avatarRef}
        />
        <span className="form__input-error" id="avatar-error">This field is required.</span>
      </PopupWithForm>
    </div>
  );
}
