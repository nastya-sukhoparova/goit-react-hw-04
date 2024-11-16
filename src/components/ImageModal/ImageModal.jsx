import React from "react";
import styles from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  const { urls, alt_description, user } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: { padding: 0, maxWidth: "800px", margin: "auto" },
      }}
    >
      <div>
        <img src={urls.regular} alt={alt_description} />
        <p>By: {user.name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
