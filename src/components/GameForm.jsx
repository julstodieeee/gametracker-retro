import React, { useState } from "react";

function GameForm({ onAddGame }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre || !description) {
      alert("Completa todos los campos");
      return;
    }

    onAddGame({ title, genre, description, image });
    setTitle("");
    setGenre("");
    setDescription("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-gradient-to-b from-purple-950 via-purple-800 to-black border-2 border-pink-400 rounded-2xl p-6 mb-8 shadow-[0_0_25px_#ff00ff]"
    >
      <h2 className="text-center text-pink-400 mb-4">🎮 Agregar Nuevo Juego</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 text-xs rounded bg-black border border-pink-500 text-pink-200"
      />
      <input
        type="text"
        placeholder="Género"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="w-full mb-2 p-2 text-xs rounded bg-black border border-pink-500 text-pink-200"
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-2 p-2 text-xs rounded bg-black border border-pink-500 text-pink-200"
      ></textarea>
      <input
        type="text"
        placeholder="URL de imagen (opcional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full mb-3 p-2 text-xs rounded bg-black border border-pink-500 text-pink-200"
      />

      <button
        type="submit"
        className="w-full py-2 text-xs bg-pink-600 hover:bg-pink-700 text-white rounded-md shadow-[0_0_15px_#ff00ff] transition-all"
      >
        Agregar Juego
      </button>
    </form>
  );
}

export default GameForm;