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

  // ✅ Usamos las imágenes locales desde /public/img
  const games = [
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
      title: "Minecraft",
      image: "/img/minecraft.jpg",
      description: "Construye, explora y sobrevive en un mundo de bloques.",
    },
    {
      id: 4,
      title: "Fortnite",
      image: "/img/fortnite.jpg",
      description: "El battle royale más popular con acción sin fin.",
    },
    {
      id: 5,
      title: "Pac-Man",
      image: "/img/pacman.jpg",
      description: "Come puntos y escapa de los fantasmas.",
    },
    {
      id: 6,
      title: "Among Us",
      image: "/img/amongus.jpg",
      description: "Descubre al impostor en esta aventura espacial.",
    },
    {
      id: 7,
      title: "Five Nights at Freddy's",
      image: "/img/fnaf.jpg",
      description: "Sobrevive la noche en la pizzería más aterradora.",
    },
    {
      id: 8,
      title: "Roblox",
      image: "/img/roblox.jpg",
      description: "Crea tus propios mundos y juega con amigos.",
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
        <h2>📝 Deja tu reseña</h2>
        <ReviewForm onAddReview={handleAddReview} />
      </section>

      <section className="reviews-section">
        <h2>💬 Reseñas de jugadores</h2>
        <ReviewList reviews={reviews} />
      </section>

      <footer className="footer">
        © 2025 GameTracker Retro — hecho con 💙 por Julieta
      </footer>
    </div>
  );
}

export default App;