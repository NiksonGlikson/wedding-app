import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewWeddingForm from "./components/NewWeddingForm";
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

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
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

  return (
    <Router>
      <div className="app-container">
        <Header
          isAuthenticated={isAuthenticated()}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onCreate={toggleFormVisibility}
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
          <Routes>
            <Route path="/" element={<WeddingList weddings={weddings} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;