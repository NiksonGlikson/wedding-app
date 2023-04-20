import React from 'react';
import styles from '../styles/modal.module.css';

const Modal = ({ children, onClose }) => {
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleWrapperClick}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
