import React from "react";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <img className={styles.image} src={image.url} alt={image.title} />
      </div>
    </div>
  );
};

export default ImageModal;
