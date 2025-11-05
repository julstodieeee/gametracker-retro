import React, { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import GameForm from "./components/GameForm";

function App() {
  const [reviews, setReviews] = useState([]);
  const [games, setGames] = useState([
    {
      id: 1,
      title: "Super Mario Bros",
      image: "https://i.imgur.com/fXui4u8.png",
      description: "El clásico de Nintendo que marcó una generación.",
    },
    {
      id: 2,
      title: "The Legend of Zelda",
      image: "https://i.imgur.com/3BzUZJP.png",
      description: "Una aventura épica con Link y la Trifuerza.",
    },
    {
      id: 3,
      title: "Sonic the Hedgehog",
      image: "https://i.imgur.com/Z6jJZ5g.png",
      description: "Corre a toda velocidad en esta joya de SEGA.",
    },
  ]);

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  const handleAddGame = (newGame) => {
    setGames([newGame, ...games]);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="app-title">🎮 GameTracker Retro 🎮</h1>
        <p className="app-subtitle">
          Explora, reseña y revive los mejores clásicos de todos los tiempos.
        </p>
      </header>

      {/* 🔹 Formulario para añadir nuevo juego */}
      <section className="form-container">
        <h2>🎮 Añadir un nuevo juego</h2>
        <GameForm onAddGame={handleAddGame} />
      </section>

      {/* 🔹 Lista de juegos */}
      <section className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      {/* 🔹 Formulario de reseñas */}
      <section className="form-container">
        <h2>📝 Deja tu reseña</h2>
        <ReviewForm onAddReview={handleAddReview} />
      </section>

      {/* 🔹 Lista de reseñas */}
      <section className="reviews-section">
        <h2>💬 Reseñas de jugadores</h2>
        <ReviewList reviews={reviews} />
      </section>

      <footer className="footer">
        © 2025 <strong>GameTracker Retro</strong> — hecho con 💙 por Julieta
      </footer>
    </div>
  );
}

export default App;