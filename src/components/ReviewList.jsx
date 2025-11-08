import React from "react";
import "./ReviewList.css";

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h2>📝 Reseñas</h2>
      {reviews.length === 0 ? (
        <p>No hay reseñas todavía.</p>
      ) : (
        reviews.map((r, i) => (
          <div key={i} className="review-item">
            <h4>{r.name}</h4>
            <p>{r.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewList;