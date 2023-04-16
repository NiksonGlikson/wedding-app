import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav-links">
        <button className="nav-link">Свадьбы</button>
        <button className="nav-link">Задачи</button>
        <button className="nav-link create-btn">Создать</button>
      </nav>
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="avatar" onClick={toggleDropdown}>
        Аватар
        {dropdownVisible && (
          <div className="dropdown">
            <button className="dropdown-item">Профиль</button>
            <button className="dropdown-item">Выйти</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
