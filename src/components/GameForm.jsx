import React, { useState } from "react";

const GameForm = ({ onAddGame }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      setImageUrl(previewURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return alert("Por favor, ingresa un título para el juego.");

    const newGame = {
      title: title.trim(),
      genre: genre.trim(),
      description: description.trim(),
      image: imageUrl.trim() || process.env.PUBLIC_URL + "/img/default.jpg",
    };

    onAddGame(newGame);

    // Reiniciar formulario
    setTitle("");
    setGenre("");
    setDescription("");
    setImageUrl("");
    setPreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="game-form">
      <label className="label">🎮 Título del juego</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ej: Mario Kart"
      />

      <label className="label">🏷️ Género</label>
      <input
        className="input"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Ej: Carreras, Aventura..."
      />

      <label className="label">📝 Descripción</label>
      <textarea
        className="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe una breve descripción del juego"
      />

      <label className="label">🖼️ Imagen del juego</label>
      <input type="file" accept="image/*" onChange={handleImageChange} className="input" />

      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Vista previa" />
        </div>
      )}

      <button type="submit" className="btn">
        💾 Guardar Juego
      </button>
    </form>
  );
};

export default GameForm;