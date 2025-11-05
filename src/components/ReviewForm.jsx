import React, { useState } from "react";
import "./ReviewForm.css";

function ReviewForm({ onAddReview }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newGame = {
      id: Date.now(),
      title,
      image: image || "/img/pacman.jpg",
      description,
    };
    onAddReview(newGame);
    setTitle("");
    setImage("");
    setDescription("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del juego"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la imagen (opcional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        placeholder="Descripción del juego"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Agregar Juego</button>
    </form>
  );
}

export default ReviewForm;