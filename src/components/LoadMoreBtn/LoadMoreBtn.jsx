import React from "react";
import "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <button className="load-more-btn" onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
