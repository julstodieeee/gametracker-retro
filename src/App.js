import React, { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import GameForm from "./components/GameForm";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      title: "Super Mario Bros",
      image: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
      description: "El clásico de Nintendo que marcó una generación.",
    },
    {
      id: 2,
      title: "The Legend of Zelda",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Legend_of_Zelda_Box_Art.jpg",
      description: "Una aventura épica con Link y la Trifuerza.",
    },
    {
      id: 3,
      title: "Sonic the Hedgehog",
      image: "https://upload.wikimedia.org/wikipedia/en/8/82/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
      description: "Corre a toda velocidad en esta joya de SEGA.",
    },
  ]);

  const [reviews, setReviews] = useState([]);

  const handleAddGame = (newGame) => {
    setGames([newGame, ...games]);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="app-title">🎮 GameTracker Retro 🎮</h1>
        <p className="app-subtitle">
          Explora, reseña y revive los mejores clásicos de todos los tiempos.
        </p>
      </header>

      <section className="form-container">
        <h2>🎮 Añadir un nuevo juego</h2>
        <GameForm onAddGame={handleAddGame} />
      </section>

      <section className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      <section className="form-container">
        <h2>📝 Deja tu reseña</h2>
        <ReviewForm onAddReview={handleAddReview} />
      </section>

      <section className="reviews-section">
        <h2>💬 Reseñas de jugadores</h2>
        <ReviewList reviews={reviews} />
      </section>

      <footer className="footer">
        © 2025 GameTracker Retro — Hecho con 💙 por Julieta
      </footer>
    </div>
  );
}

export default App;