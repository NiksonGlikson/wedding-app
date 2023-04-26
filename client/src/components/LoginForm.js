import React from 'react';
import Modal from './Modal';
import authFormStyles from '../styles/authForm.module.css';
import axiosInstance from '../utils/axiosInstance';


const LoginForm = ({ onClose, onSwitch }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axiosInstance.post("/users/login", {
      phone: e.target.phone.value,
      password: e.target.password.value,
    });
    localStorage.setItem("token", response.data.token);
    window.location.replace("/");
  } catch (error) {
    console.error("Ошибка входа:", error);
  }
  };

  return (
    <Modal onClose={onClose}>
      <div className={authFormStyles.modalContainer}>
        <h2 className={authFormStyles.modalTitle}>Войти</h2>
        <form className={authFormStyles.modalForm} onSubmit={handleSubmit}>
        <input
            name="phone"
            className={authFormStyles.modalInput}
            type="text"
            placeholder="Номер телефона"
            required
          />
          <input
            name="password"
            className={authFormStyles.modalInput}
            type="password"
            placeholder="Пароль"
            required
          />
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




