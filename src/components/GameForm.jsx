import React, { useState } from "react";
import "./GameForm.css";

function GameForm({ onAddGame }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    url: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGame(form);
    setForm({ name: "", description: "", image: "", url: "" });
  };

  return (
    <div className="game-form">
      <h2>➕ Añadir Juego</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del juego"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen (ej: /img/nuevo.jpg)"
          value={form.image}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="url"
          placeholder="Link para jugar"
          value={form.url}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default GameForm;