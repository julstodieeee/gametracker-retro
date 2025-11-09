import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="neon-text">🕹️ Reseñas de jugadores</h2>
      <div className="review">
        <p>“Increíble colección de juegos retro, me encanta la nostalgia 🎮✨”</p>
        <span>- Alex</span>
      </div>
      <div className="review">
        <p>“La interfaz con efecto neón está brutal 🔥”</p>
        <span>- Sam</span>
      </div>
    </section>
  );
};

export default Reviews;