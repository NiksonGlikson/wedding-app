import React from 'react';
import '../styles/modal.css';

const RegisterForm = ({ onClose, onSwitch }) => {

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-wrapper">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal">
        <h2>Зарегистрироваться</h2>
        <form>
        <input type="text" placeholder="Номер телефона" required />
        <input type="password" placeholder="Пароль" required />
        <button className="modal__button" type="submit">Зарегистрироваться</button>
        </form>
        <p className='modal__text'>
        Забыли пароль?{' '}
        <button onClick={onSwitch} type="button">
            Войти
        </button>
        </p>
        </div>
      </div>
    </div>
    </div>
);
}

export default RegisterForm;