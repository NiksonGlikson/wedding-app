import React from 'react';
import '../styles/modal.css';

const LoginForm = ({ onClose, onSwitch }) => {

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          </div>
          <h2>Войти</h2>
          <form>
            <input type="text" placeholder="Номер телефона" required />
            <input type="password" placeholder="Пароль" required />
            <button type="submit">Войти</button>
          </form>
          <p className="modal__text">
            Забыли пароль?{' '}
            <button onClick={onSwitch} type="button">
              Зарегистрироваться
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;