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
      image: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Legend_of_Zelda_Boxart.png",
      description: "Una aventura épica con Link y la Trifuerza.",
    },
    {
      id: 3,
      title: "Sonic the Hedgehog",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
      description: "Corre a toda velocidad en esta joya de SEGA.",
    },
    {
      id: 4,
      title: "Pac-Man",
      image: "https://upload.wikimedia.org/wikipedia/en/5/59/Pac-man.png",
      description: "Come puntos y evita fantasmas en este arcade legendario.",
    },
    {
      id: 5,
      title: "Donkey Kong",
      image: "https://upload.wikimedia.org/wikipedia/en/3/36/Donkey_Kong.png",
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