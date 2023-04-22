import React from 'react';
import axios from "axios";
import Modal from './Modal';
import authFormStyles from '../styles/authForm.module.css';

const RegisterForm = ({ onClose, onSwitch }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post("/api/users/register", {
      name: e.target.name.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
    });
    localStorage.setItem("token", response.data.token);
    window.location.replace("/");
  } catch (error) {
    console.error("Ошибка регистрации:", error);
  }
  };

  return (
    <Modal onClose={onClose}>
      <div className={authFormStyles.modalContainer}>
        <h2 className={authFormStyles.modalTitle}>Зарегистрироваться</h2>
        <form className={authFormStyles.modalForm} onSubmit={handleSubmit}>
        <input
            name="name"
            className={authFormStyles.modalInput}
            type="text"
            placeholder="Имя"
            required
          />
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



