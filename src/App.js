import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import GameForm from "./components/GameForm";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import StatsDashboard from "./components/StatsDashboard.jsx";

import mario from "./assets/mario.jpg";
import roblox from "./assets/roblox.jpg";
import fortnite from "./assets/fortnite.jpg";
import pacman from "./assets/pacman.jpg";
import minecraft from "./assets/minecraft.jpg";
import amongus from "./assets/amongus.jpg";
import fnaf from "./assets/fnaf.jpg";
import zelda from "./assets/zelda.jpg";

function App() {
  // ✅ Estado con datos guardados en localStorage
  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem("games");
    return saved
      ? JSON.parse(saved)
      : [
          { title: "Mario Kart", genre: "Carreras", description: "Compite en emocionantes pistas.", image: mario },
          { title: "Roblox", genre: "Sandbox", description: "Crea mundos y juega con amigos.", image: roblox },
          { title: "Fortnite", genre: "Battle Royale", description: "Construye y sobrevive.", image: fortnite },
          { title: "Pac-Man", genre: "Arcade", description: "Come puntos y esquiva fantasmas.", image: pacman },
          { title: "Minecraft", genre: "Sandbox", description: "Construye y explora mundos infinitos.", image: minecraft },
          { title: "Among Us", genre: "Multijugador", description: "Descubre al impostor en la nave.", image: amongus },
          { title: "Five Nights at Freddy’s", genre: "Terror", description: "Sobrevive a los animatrónicos.", image: fnaf },
          { title: "Zelda", genre: "Aventura", description: "Explora Hyrule y vive la leyenda.", image: zelda },
        ];
  });

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Cada vez que cambian, los guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // 🚀 Funciones para añadir datos
  const handleAddGame = (game) => setGames([...games, game]);
  const handleAddReview = (review) => setReviews([...reviews, review]);

  // ⭐ Cálculo del promedio de reseñas
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + (r.rating || 0), 0) / reviews.length).toFixed(1)
      : "0.0";

  return (
    <div className="min-h-screen bg-black text-white font-['Press_Start_2P'] p-6 relative overflow-hidden">
      
      {/* 🌈 Fondo glitch retro */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay bg-[url('https://i.ibb.co/1bYVg3b/glitch-bg.gif')] bg-cover animate-pulse"></div>

      {/* 🎮 Título principal */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl text-center mb-12 neon-glow"
      >
        🎮 GameTracker Retro 🎮
      </motion.h1>

      {/* 📋 Formulario de agregar juegos */}
      <div className="flex justify-center mb-16">
        <div className="w-full max-w-lg bg-gradient-to-b from-purple-950 via-fuchsia-900 to-purple-950 border-2 border-pink-500 rounded-2xl p-6 shadow-[0_0_20px_#ff00ff] hover:shadow-[0_0_35px_#00ffff] transition-all duration-500">
          <h2 className="text-center text-pink-300 text-lg mb-6">➕ Agregar Nuevo Juego</h2>
          <GameForm onAddGame={handleAddGame} />
        </div>
      </div>

      {/* 🕹️ Biblioteca de juegos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {games.map((game, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="w-72 bg-gradient-to-b from-purple-900 via-fuchsia-800 to-purple-950 border-2 border-pink-500 p-5 rounded-2xl shadow-[0_0_25px_#ff00ff] hover:shadow-[0_0_40px_#00ffff] transition-all duration-300 relative"
          >
            <img
              src={game.image}
              alt={game.title}
              onError={(e) => (e.target.style.display = "none")}
              className="w-full h-44 object-cover rounded-lg mb-3 border border-pink-500 shadow-[0_0_15px_#ff00ff] bg-black"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-0 transition-all duration-300"></div>
            <h2 className="text-md text-pink-300 mb-2 text-center tracking-widest">{game.title}</h2>
            <p className="text-blue-300 text-xs mb-1 text-center">🎮 {game.genre}</p>
            <p className="text-purple-100 text-[10px] text-center">{game.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 💬 Sección de reseñas */}
      <div className="mt-20 flex flex-col items-center relative z-10">
        <div className="w-full max-w-2xl bg-gradient-to-b from-purple-950 via-fuchsia-900 to-purple-950 border-2 border-pink-500 rounded-2xl p-8 shadow-[0_0_25px_#ff00ff]">
          <h2 className="text-center text-pink-300 text-lg mb-6">💬 Deja tu Reseña</h2>
          <div className="flex flex-col items-center gap-6">
            <ReviewForm onAddReview={handleAddReview} />
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>

      {/* 📊 Estadísticas */}
      <div className="mt-16 flex justify-center">
        <StatsDashboard
          gamesCount={games.length}
          avgRating={parseFloat(avgRating)}
          reviewsCount={reviews.length}
        />
      </div>

      {/* 💜 Footer */}
      <footer className="text-center text-pink-400 text-xs mt-16 glitch-text">
        © 2025 GameTracker Retro — by Julieta 💜
      </footer>
    </div>
  );
}

export default App;