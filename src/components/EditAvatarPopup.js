import PopupWithForm from './PopupWithForm';
import { useState, useContext, useEffect, useRef } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: ref.current.value,
    });
    onClose();
    ref.current.value = ''
  } 

  return (
    <PopupWithForm 
          title='Обновить аватар'
          name='edit_avatar'
          buttonText='Сохранить'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          >
          <input 
            id="avatar" 
            name="avatar" 
            className="popup__input popup__input_edit_avatar" 
            type="url"
            placeholder="Ссылка на изображение" 
            required 
            ref={ref}
          />
          <span 
            className="avatar-error popup__text-error">
              Введите ссылку на изображение.
          </span>
        </PopupWithForm>
  )
}

export default EditAvatarPopup;