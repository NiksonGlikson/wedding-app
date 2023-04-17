import React from 'react';
import '../styles/modal.css';

const Modal = ({ onClose, children }) => {
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal">
          <button className="modal__close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
