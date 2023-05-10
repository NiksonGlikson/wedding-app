import React from 'react';
import '../styles/DropdownMenu.css';

const DropdownMenu = ({ visible, onProfile, onLogout }) => {
  return (
    <div className={`dropdown-menu ${visible ? 'visible' : ''}`}>
      <button className="dropdown-menu"></button>
      <button className="dropdown-menu-item" onClick={onProfile}>
            Профиль
          </button>
          <button className="dropdown-menu-item" onClick={onLogout}>
            Выйти
          </button>
        </div>
      );
    };
    
    export default DropdownMenu;