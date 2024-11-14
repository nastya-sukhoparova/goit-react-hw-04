import React from "react";
import "./ImageCard.module.css";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;
