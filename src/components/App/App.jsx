import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";

const API_KEY = "q7chwZViv-iX0gILUGv_6X6QID72zQvFLQPXxNeMTZA";
const API_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: { query, page, per_page: 12 },
          headers: { Authorization: `Client-ID ${API_KEY}` },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery
        images={images}
        onImageClick={(image) => setSelectedImage(image)}
      />
      {isLoading && <Loader />}
      {images.length > 0 && <button onClick={loadMore}>Load More</button>}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default App;
