import React, { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.module.css";

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=ScM033pCkgdwz-G7adw5ruAAR3qQkEE2lAhV32MiUso`
        );
        const data = await response.json();
        console.log("Fetched data:", data);

        if (data.results.length === 0) {
          console.log("No images found for query:", query);
        }

        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(Math.ceil(data.total / 12));
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>

      {isLoading && <p>Loading...</p>}
      {page < totalPages && !isLoading && (
        <button onClick={handleLoadMore}>Load more...</button>
      )}
    </div>
  );
};

export default ImageGallery;
