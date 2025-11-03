import React, { useState } from "react";

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review || !rating) return;
    onAddReview({ name, review, rating: parseFloat(rating) });
    setName("");
    setReview("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="review-form text-center text-white"
    >
      <h2 className="text-lg mb-6 text-pink-400 neon-glow">
        ✨ Escribe tu reseña ✨
      </h2>

      <div className="mb-4">
        <label className="block mb-2 text-xs text-purple-300">
          Tu nombre:
        </label>
        <input
          type="text"
          placeholder="Ej: Julieta"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-xs text-purple-300">
          Tu reseña:
        </label>
        <textarea
          placeholder="Escribe aquí tu opinión..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="3"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-xs text-purple-300">
          Puntuación:
        </label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Selecciona ⭐</option>
          <option value="5">⭐ 5 - Excelente</option>
          <option value="4">⭐ 4 - Muy bueno</option>
          <option value="3">⭐ 3 - Bueno</option>
          <option value="2">⭐ 2 - Regular</option>
          <option value="1">⭐ 1 - Malo</option>
        </select>
      </div>

      <button type="submit" className="mt-4">
        Enviar reseña 🚀
      </button>
    </form>
  );
};

export default ReviewForm;