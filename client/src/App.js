import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewWeddingForm from "./components/NewWeddingForm";
import ProfileForm from "./components/ProfileForm";
import WeddingList from "./components/WeddingList";
import Header from "./components/Header";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { isAuthenticated } from "./utils/auth";
import "./styles/App.css";
import axiosInstance from './utils/axiosInstance';

const App = () => {
  const [weddings, setWeddings] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  useEffect(() => {
    const fetchWeddings = async () => {
      try {
        const response = await axiosInstance.get("/weddings");
        setWeddings(response.data);
      } catch (error) {
        console.error("Ошибка при получении списка свадеб:", error);
      }
    };

    fetchWeddings();
  }, []);

  const addWedding = async (newWedding) => {
    try {
      const response = await axiosInstance.post("/weddings", newWedding);
    setWeddings([...weddings, response.data]);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  function handleLogin() {
    setShowLoginModal(true);
  }

  function handleRegister() {
    setShowRegisterModal(true);
  }

  function handleCloseLoginModal() {
    setShowLoginModal(false);
  }

  function handleCloseRegisterModal() {
    setShowRegisterModal(false);
  }

  function handleSwitchToLogin() {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  }

  function handleSwitchToRegister() {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }

  const handleLogout = () => {
    console.log('Logout clicked');
    localStorage.removeItem("token");
    window.location.reload(); // перезагружает страницу для обновления состояния аутентификации
  };

  return (
    <Router>
      <div className="app-container">
        <Header
          isAuthenticated={isAuthenticated()}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onCreate={toggleFormVisibility}
          onProfile={toggleProfileVisibility}
          onLogout={handleLogout}
        />
        {showLoginModal && (
          <LoginForm onClose={handleCloseLoginModal} onSwitch={handleSwitchToRegister} />
        )}
        {showRegisterModal && (
          <RegisterForm onClose={handleCloseRegisterModal} onSwitch={handleSwitchToLogin} />
        )}
        <main>
          {isAuthenticated() && isFormVisible && (
            <NewWeddingForm addWedding={addWedding} onClose={toggleFormVisibility} />
          )}
          {isAuthenticated() && isProfileVisible && (
            <ProfileForm onClose={toggleProfileVisibility} /> // Добавлено отображение ProfileForm
          )}
          <Routes>
            <Route path="/" element={<WeddingList weddings={weddings} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;