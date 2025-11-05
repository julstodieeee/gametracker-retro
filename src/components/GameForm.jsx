import React, { useState } from "react";
import "./GameForm.css";

function GameForm({ onAddGame }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !image.trim() || !description.trim()) return;
    onAddGame({ title, image, description });
    setTitle("");
    setImage("");
    setDescription("");
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del juego"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        placeholder="Descripción del juego"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Añadir juego 🎮</button>
    </form>
  );
}

export default GameForm;