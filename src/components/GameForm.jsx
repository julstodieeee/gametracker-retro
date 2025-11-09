import React, { useState } from "react";
import "./GameForm.css";

function GameForm({ onAddGame }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !url || !image) return;

    onAddGame({ name, description, url, image });
    setName("");
    setDescription("");
    setUrl("");
    setImage("");
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del juego"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL del juego"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre de la imagen (ej: mario.jpg)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit" className="neon-button">Agregar 🎮</button>
    </form>
  );
}

export default GameForm;