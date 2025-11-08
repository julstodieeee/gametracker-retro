import React, { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import GameForm from "./components/GameForm";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [games, setGames] = useState([
    {
      name: "Minecraft",
      description: "Explora, construye y sobrevive en un mundo infinito de bloques.",
      image: "/img/minecraft.jpg",
      url: "https://www.minecraft.net/",
    },
    {
      name: "Fortnite",
      description: "Battle Royale con construcción y acción frenética.",
      image: "/img/fortnite.jpg",
      url: "https://www.epicgames.com/fortnite/",
    },
    {
      name: "Among Us",
      description: "Descubre al impostor en esta aventura multijugador.",
      image: "/img/amongus.jpg",
      url: "https://innersloth.com/games/among-us/",
    },
    {
      name: "Pac-Man",
      description: "Clásico arcade de laberintos y fantasmas retro.",
      image: "/img/pacman.jpg",
      url: "https://www.bandainamcoent.com/games/pac-man",
    },
    {
      name: "Roblox",
      description: "Crea, juega y comparte tus mundos virtuales.",
      image: "/img/roblox.jpg",
      url: "https://www.roblox.com/",
    },
    {
      name: "Zelda",
      description: "Aventura épica en un mundo mágico lleno de misterios.",
      image: "/img/zelda.jpg",
      url: "https://www.zelda.com/",
    },
    {
      name: "FNAF",
      description: "Sobrevive a la noche en la pizzería más aterradora.",
      image: "/img/fnaf.jpg",
      url: "https://www.scottgames.com/",
    },
    {
      name: "Mario Bros",
      description: "Corre, salta y rescata a la princesa en este clásico de Nintendo.",
      image: "/img/mario.jpg",
      url: "https://mario.nintendo.com/",
    },
  ]);

  const [reviews, setReviews] = useState([]);

  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
  };

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="app-container">
      <h1 className="title">🎮 GameTracker Retro Neon 🎮</h1>
      <p className="subtitle">Explora, agrega y reseña tus juegos favoritos</p>

      <div className="game-grid">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>

      <div className="forms-section">
        <GameForm onAddGame={handleAddGame} />
        <div className="reviews-section">
          <ReviewForm onAddReview={handleAddReview} />
          <ReviewList reviews={reviews} />
        </div>
      </div>

      <footer className="footer">🕹️ Proyecto GameTracker Retro Neon · 2025 🕹️</footer>
    </div>
  );
}

export default App;