import React from "react";
import "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(image);
    }
  };

  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
        className="image"
      />
      <p>{image.alt_description}</p>
    </div>
  );
};

export default ImageCard;
