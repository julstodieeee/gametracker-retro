import React, { useState, useEffect } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import GameForm from "./components/GameForm";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);

  // 🔹 Cargar desde localStorage
  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem("games")) || [];
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setGames(savedGames);
    setReviews(savedReviews);
  }, []);

  // 🔹 Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [games, reviews]);

  const handleAddGame = (newGame) => {
    setGames([newGame, ...games]);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  const defaultGames = [
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
  ];

  const allGames = [...defaultGames, ...games];

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="app-title">🎮 GameTracker Retro 🎮</h1>
        <p className="app-subtitle">
          Explora, reseña y revive los mejores clásicos de todos los tiempos.
        </p>
      </header>

      <section className="games-grid">
        {allGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </section>

      <section className="form-container">
        <h2>➕ Agrega un nuevo juego</h2>
        <GameForm onAddGame={handleAddGame} />
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
        © 2025 🎮 GameTracker Retro — hecho con 💙 por Julieta
      </footer>
    </div>
  );
}

export default App;