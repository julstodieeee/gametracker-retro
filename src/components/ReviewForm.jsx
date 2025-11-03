import React, { useState } from "react";

function ReviewForm({ onAddReview }) {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !game || !text) return;

    const newReview = {
      id: Date.now(),
      name,
      game,
      text,
    };

    onAddReview(newReview);
    setName("");
    setGame("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tu nombre</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ej: Alex"
      />

      <label>Juego</label>
      <input
        type="text"
        value={game}
        onChange={(e) => setGame(e.target.value)}
        placeholder="Ej: Super Mario Bros"
      />

      <label>Tu reseña</label>
      <textarea
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu opinión..."
      ></textarea>

      <button type="submit">Enviar reseña</button>
    </form>
  );
}

export default ReviewForm;