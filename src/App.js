import React, { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  const games = [
    {
      id: 1,
      title: "Super Mario Bros",
      image: process.env.PUBLIC_URL + "/img/mario.jpg",
      description: "El clásico de Nintendo que marcó una generación.",
    },
    {
      id: 2,
      title: "The Legend of Zelda",
      image: process.env.PUBLIC_URL + "/img/zelda.jpg",
      description: "Una aventura épica con Link y la Trifuerza.",
    },
    {
      id: 3,
      title: "Pac-Man",
      image: process.env.PUBLIC_URL + "/img/pacman.jpg",
      description: "El arcade más icónico de los años 80.",
    },
    {
      id: 4,
      title: "Minecraft",
      image: process.env.PUBLIC_URL + "/img/minecraft.jpg",
      description: "Crea, explora y sobrevive en mundos infinitos.",
    },
    {
      id: 5,
      title: "Among Us",
      image: process.env.PUBLIC_URL + "/img/amongus.jpg",
      description: "Descubre al impostor en esta divertida aventura espacial.",
    },
    {
      id: 6,
      title: "Five Nights at Freddy’s",
      image: process.env.PUBLIC_URL + "/img/fnaf.jpg",
      description: "Sobrevive a la noche entre animatrónicos terroríficos.",
    },
    {
      id: 7,
      title: "Roblox",
      image: process.env.PUBLIC_URL + "/img/roblox.jpg",
      description: "Crea tus propios mundos y juega con amigos.",
    },
    {
      id: 8,
      title: "Fortnite",
      image: process.env.PUBLIC_URL + "/img/fortnite.jpg",
      description: "El battle royale más popular del planeta.",
    },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="app-title">🎮 GameTracker Retro</h1>
        <p className="app-subtitle">
          Explora, reseña y revive los mejores clásicos de todos los tiempos.
        </p>
      </header>

      <section className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      <section className="form-container">
        <h2>🕹️ Agregar Nuevo Juego</h2>
        <ReviewForm onAddReview={handleAddReview} />
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