import {useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]); 

  
  const handleAddName = (e) => setName(e.target.value);
  const handleAddLink = (e) => setLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({
      name,
      link,
    });
  };

  return (
    <PopupWithForm
    name="add"
    title="New Place"
    formName="add_form"
    buttonSubmitTitle="Create"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    >
    <input
      className="form__input"
      id="title"
      type="text"
      placeholder="Title"
      name="name"
      minLength="1"
      maxLength="30"
      required
      value={name || ""}
      onChange={handleAddName}
    />
    <span className="form__input-error" id="title-error">This field is required.</span>
    <input
      className="form__input"
      id="image-link"
      type="url"
      placeholder="Image Link"
      name="link"
      required
      value={link || ""}
      onChange={handleAddLink}
    />
    <span className="form__input-error" id="image-link-error">This field is required.
    </span>
  </PopupWithForm>
  );
}
