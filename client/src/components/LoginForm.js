import React from 'react';
import Modal from './Modal';
import authFormStyles from '../styles/authForm.module.css';

const LoginForm = ({ onClose, onSwitch }) => {
  return (
    <Modal onClose={onClose}>
      <div className={authFormStyles.modalContainer}>
        <h2 className={authFormStyles.modalTitle}>Войти</h2>
        <form className={authFormStyles.modalForm}>
          <input className={authFormStyles.modalInput} type="text" placeholder="Номер телефона" required />
          <input className={authFormStyles.modalInput} type="password" placeholder="Пароль" required />
          <button className={`${authFormStyles.modalButton} ${authFormStyles.modalButtonSubmit}`} type="submit">
            Войти
          </button>
        </form>
        <p className={authFormStyles.modalText}>
          Забыли пароль?{' '}
          <button className={`${authFormStyles.modalButton} ${authFormStyles.modalButtonSwitch}`} onClick={onSwitch} type="button">
            Зарегистрироваться
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default LoginForm;




