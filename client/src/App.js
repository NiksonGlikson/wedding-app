import React, { useState, useEffect } from "react";
import NewWeddingForm from "./components/NewWeddingForm";
import WeddingList from "./components/WeddingList";
import Header from "./components/Header";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import "./styles/App.css";
import axios from "axios";

const App = () => {
  const [weddings, setWeddings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const fetchWeddings = async () => {
      const response = await axios.get("/api/weddings");
      setWeddings(response.data);
    };

    fetchWeddings();
  }, []);

  const addWedding = async (newWedding) => {
    const response = await axios.post("/api/weddings", newWedding);
    setWeddings([...weddings, response.data]);
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
    <div className="app-container">
        <Header
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
      {showLoginModal && (
        <LoginForm onClose={handleCloseLoginModal} onSwitch={handleSwitchToRegister} />
      )}
      {showRegisterModal && (
        <RegisterForm onClose={handleCloseRegisterModal} onSwitch={handleSwitchToLogin} />
      )}
        <main>
          <NewWeddingForm addWedding={addWedding} />
          <WeddingList weddings={weddings} />
      </main>
    </div>
  );
};


export default App;


