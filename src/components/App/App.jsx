import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchImages } from "../services/unsplashApi";
import "./App.module.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchImages(newQuery, 1);
      setImages(data);
    } catch (err) {
      setError("Failed to fetch images");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    try {
      const data = await fetchImages(query, page + 1);
      setImages((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (err) {
      setError("Failed to load more images");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} />
      {isLoading ? (
        <Loader />
      ) : (
        images.length > 0 && <LoadMoreBtn onClick={loadMore} />
      )}
    </div>
  );
}

export default App;
