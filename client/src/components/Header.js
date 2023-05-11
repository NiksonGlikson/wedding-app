import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import DropdownMenu from "./DropdownMenu";

const Header = ({
  isAuthenticated,
  onLogin,
  onRegister,
  onCreate,
  onLogout,
  onProfile
}) => {
  const [search, setSearch] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);

  // Добавил этот useEffect, чтобы включить обработчик событий клика мыши
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    setDropdownVisible(false); // закрываю выпадающее меню
    onLogout(); // вызываю функцию выхода из системы
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      {isAuthenticated ? (
        <>
          <nav className="nav-links">
            <button className="nav-link">Свадьбы</button>
            <button className="nav-link">Задачи</button>
            <button className="nav-link create-btn" onClick={onCreate}>
              Создать
            </button>
          </nav>
          <div className="header__right">
            <div className="search-container">
              <input
                type="text"
                placeholder="Поиск..."
                value={search}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            <div className="avatar" onClick={toggleDropdown} ref={dropdownRef}>
              Аватар
            </div>
            <DropdownMenu
              visible={dropdownVisible}
              onLogout={handleLogout}
              onProfile={onProfile}
            />
          </div>
        </>
      ) : (
        <>
          <div className="header__auth">
            <button onClick={onLogin}>Войти</button>
            <button onClick={onRegister}>Зарегистрироваться</button>
            </div>
        </>
      )}
    </header>
  );
};

export default Header;

         
