import React, { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);
  const [games, setGames] = useState([
    {
      id: 1,
      title: "Super Mario Bros",
      image: "/img/mario.jpg",
      description: "El clásico de Nintendo que marcó una generación.",
    },
    {
      id: 2,
      title: "The Legend of Zelda",
      image: "/img/zelda.jpg",
      description: "Una aventura épica con Link y la Trifuerza.",
    },
    {
      id: 3,
      title: "Sonic the Hedgehog",
      image: "/img/pacman.jpg",
      description: "Corre a toda velocidad en esta joya de SEGA.",
    },
  ]);

  const handleAddGame = (newGame) => {
    setGames([newGame, ...games]);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="app-title">
          🎮 GameTracker Retro 🎮
        </h1>
        <p className="app-subtitle">
          Explora, reseña y revive los mejores clásicos de todos los tiempos.
        </p>
      </header>

      <section className="form-container">
        <h2>➕ Agregar Nuevo Juego</h2>
        <ReviewForm onAddReview={handleAddGame} />
      </section>

      <section className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      <section className="reviews-section">
        <h2>💬 Reseñas de jugadores</h2>
        <ReviewList reviews={reviews} />
      </section>

      <footer className="footer">
        © 2025 GameTracker Retro — hecho con 💜 por Julieta
      </footer>
    </div>
  );
}

export default App;