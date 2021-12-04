import {useEffect, useState, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
 
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
    name="edit"
    title="Edit Profile"
    formName="edit_form"
    buttonSubmitTitle="Save"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  >
    <input
      className="form__input profile-name"
      id="profile-name"
      type="text"
      placeholder="Name"
      name="editName"
      minLength="2"
      maxLength="40"
      required
      onChange={handleChangeName}
      value={name}
    />
    <span className="form__input-error" id="profile-name-error">This field is required.</span>
    <input
      className="form__input profile-about"
      id="profile-about"
      type="text"
      placeholder="About Me"
      name="editAbout"
      minLength="2"
      maxLength="200"
      required
      onChange={handleChangeDescription}
      value={description}
    />
    <span className="form__input-error" id="profile-about-error">This field is required.</span>
  </PopupWithForm>
  );
}
