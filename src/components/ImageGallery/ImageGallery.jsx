import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.module.css";

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGallery;
