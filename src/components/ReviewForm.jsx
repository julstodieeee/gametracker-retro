import React, { useState } from "react";
import "./ReviewForm.css";

function ReviewForm({ onAddReview }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onAddReview({ name, text });
    setName("");
    setText("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Escribe tu reseña..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">Enviar reseña 💬</button>
    </form>
  );
}

export default ReviewForm;