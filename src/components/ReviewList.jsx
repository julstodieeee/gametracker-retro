import React from "react";
import "./ReviewList.css";

function ReviewList({ reviews }) {
  if (reviews.length === 0)
    return <p className="no-reviews">No hay reseñas todavía. ¡Sé el primero! 🎮</p>;

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <h4>{review.name}</h4>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;