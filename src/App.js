import React, { useState } from "react";
import GameCard from "./components/GameCard";
import GameForm from "./components/GameForm";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import "./App.css";

function App() {
  // 🎮 Lista inicial de juegos (orden correcto)
  const [games, setGames] = useState([
    {
      name: "Minecraft",
      description: "Explora, construye y sobrevive en un mundo infinito de bloques.",
      image: "minecraft.jpg",
      url: "https://www.minecraft.net",
    },
    {
      name: "Fortnite",
      description: "Battle Royale con construcción y acción frenética.",
      image: "fortnite.jpg",
      url: "https://www.epicgames.com/fortnite",
    },
    {
      name: "Among Us",
      description: "Descubre al impostor en esta aventura multijugador.",
      image: "amongus.jpg",
      url: "https://innersloth.com/gameAmongUs.php",
    },
    {
      name: "Pac-Man",
      description: "Clásico arcade de laberintos y fantasmas retro.",
      image: "pacman.jpg",
      url: "https://pacman.com",
    },
    {
      name: "Roblox",
      description: "Crea tus propios mundos y juega con amigos.",
      image: "roblox.jpg",
      url: "https://www.roblox.com",
    },
    {
      name: "Zelda",
      description: "Embárcate en aventuras épicas para salvar Hyrule.",
      image: "zelda.jpg",
      url: "https://zelda.nintendo.com",
    },
    {
      name: "FNAF",
      description: "Sobrevive a la noche en la pizzería más aterradora.",
      image: "fnaf.jpg",
      url: "https://www.scottgames.com",
    },
    {
      name: "Mario Bros",
      description: "Clásico de plataformas con el fontanero más famoso.",
      image: "mario.jpg",
      url: "https://mario.nintendo.com",
    },
  ]);

  // 💬 Reseñas
  const [reviews, setReviews] = useState([]);

  // ➕ Añadir nuevo juego
  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
  };

  // ✍️ Añadir nueva reseña
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="App">
      {/* Título principal */}
      <h1 className="neon-title">
        🎮 GameTracker Retro Neon 🎮
      </h1>
      <p className="neon-subtitle">Explora, agrega y reseña tus juegos favoritos</p>

      {/* 📦 Lista de juegos */}
      <div className="game-list">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>

      {/* 🕹️ Formulario para añadir nuevos juegos */}
      <div className="section-container">
        <h2 className="neon-section-title">Añadir Nuevo Juego</h2>
        <GameForm onAddGame={handleAddGame} />
      </div>

      {/* 💬 Sección de reseñas */}
      <div className="section-container">
        <h2 className="neon-section-title">Reseñas de Usuarios</h2>
        <ReviewForm onAddReview={handleAddReview} />
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}

export default App;