import React from 'react';
import '../styles/modal.css';

const Modal = ({ children, onClose }) => {
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleWrapperClick}>
      {children}
    </div>
  );
};

export default Modal;





