import React from 'react';
import Modal from './Modal';
import authFormStyles from '../styles/authForm.module.css';

const RegisterForm = ({ onClose, onSwitch }) => {
  return (
    <Modal onClose={onClose}>
      <div className={authFormStyles.modalContainer}>
        <h2 className={authFormStyles.modalTitle}>Зарегистрироваться</h2>
        <form className={authFormStyles.modalForm}>
          <input className={authFormStyles.modalInput} type="text" placeholder="Имя" required />
          <input className={authFormStyles.modalInput} type="text" placeholder="Номер телефона" required />
          <input className={authFormStyles.modalInput} type="password" placeholder="Пароль" required />
          <button className={`${authFormStyles.modalButton} ${authFormStyles.modalButtonSubmit}`} type="submit">
            Зарегистрироваться
          </button>
        </form>
        <p className={authFormStyles.modalText}>
          Уже зарегистрированы?{' '}
          <button className={`${authFormStyles.modalButton} ${authFormStyles.modalButtonSwitch}`} onClick={onSwitch} type="button">
            Войти
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default RegisterForm;



