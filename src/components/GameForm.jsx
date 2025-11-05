import React, { useState } from "react";

function GameForm({ onAddGame }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !image || !description) {
      alert("Por favor completa todos los campos 😅");
      return;
    }

    const newGame = {
      id: Date.now(),
      title,
      image,
      description,
    };

    onAddGame(newGame);
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
        placeholder="URL de la imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        placeholder="Descripción del juego"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Agregar juego</button>
    </form>
  );
}

export default GameForm;