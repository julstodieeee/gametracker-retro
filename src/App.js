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
    {
      id: 4,
      title: "Pac-Man",
      image: "https://i.imgur.com/3tuF7Jj.png",
      description: "Come puntos y evita fantasmas en este arcade legendario.",
    },
    {
      id: 5,
      title: "Donkey Kong",
      image: "https://i.imgur.com/rp1f3iv.png",
      description: "Salva a la princesa del poderoso gorila Donkey Kong.",
    },
  ]);

  const [reviews, setReviews] = useState([]);

  const handleAddGame = (newGame) => {
    setGames([{ ...newGame, id: Date.now() }, ...games]);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="app-title">🎮 GameTracker Retro 🎮</h1>
        <p className="app-subtitle">
          Explora, añade juegos, reseña y revive los mejores clásicos.
        </p>
      </header>

      <section className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      <section className="form-container">
        <h2>➕ Añadir nuevo juego</h2>
        <GameForm onAddGame={handleAddGame} />
      </section>

      <section className="form-container">
        <h2>💬 Deja tu reseña</h2>
        <ReviewForm onAddReview={handleAddReview} />
      </section>

      <section className="reviews-section">
        <h2>🕹️ Reseñas de jugadores</h2>
        <ReviewList reviews={reviews} />
      </section>

      <footer className="footer">
        © 2025 GameTracker Retro — hecho con 💙 por Julieta
      </footer>
    </div>
  );
}

export default App;