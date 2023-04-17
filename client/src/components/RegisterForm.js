import React from 'react';
import Modal from './Modal';
import '../styles/modal.css';

const RegisterForm = ({ onClose, onSwitch }) => {
  return (
    <Modal onClose={onClose}>
      <div className="modal-container">
        <h2 className="modal__title">Зарегистрироваться</h2>
        <form className="modal__form">
          <input className="modal__input" type="text" placeholder="Имя" required />
          <input className="modal__input" type="text" placeholder="Номер телефона" required />
          <input className="modal__input" type="password" placeholder="Пароль" required />
          <button className="modal__button modal__button--submit" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="modal__text">
          Уже зарегистрированы?{' '}
          <button className="modal__button modal__button--switch" onClick={onSwitch} type="button">
            Войти
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default RegisterForm;
