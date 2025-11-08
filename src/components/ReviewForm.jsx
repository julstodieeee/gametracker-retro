import React, { useState } from "react";
import "./ReviewForm.css";

function ReviewForm({ onAddReview }) {
  const [review, setReview] = useState({ name: "", comment: "" });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(review);
    setReview({ name: "", comment: "" });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>💬 Agregar Reseña</h2>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={review.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="comment"
        placeholder="Escribe tu reseña..."
        value={review.comment}
        onChange={handleChange}
        required
      />
      <button type="submit">Publicar</button>
    </form>
  );
}

export default ReviewForm;