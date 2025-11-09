import React, { useState } from "react";
import GameCard from "./components/GameCard";
import "./App.css";
import "./components/GameCard.css";

function App() {
  const [games, setGames] = useState([
    {
      name: "Super Mario Bros",
      description: "Salva el Reino Champiñón en esta aventura clásica.",
      image: "mario.jpg",
      url: "https://supermarioplay.com/",
    },
    {
      name: "The Legend of Zelda",
      description: "Explora mazmorras y derrota a Ganon para salvar a Zelda.",
      image: "zelda.jpg",
      url: "https://zelda.fan/",
    },
    {
      name: "Minecraft",
      description: "Crea, explora y sobrevive en un mundo de bloques.",
      image: "minecraft.jpg",
      url: "https://classic.minecraft.net/",
    },
    {
      name: "Pac-Man",
      description: "Come puntos, evita fantasmas y gana vidas extra.",
      image: "pacman.jpg",
      url: "https://pacman.cc/",
    },
    {
      name: "Sonic the Hedgehog",
      description: "Corre a toda velocidad y derrota al Dr. Eggman.",
      image: "sonic.jpg",
      url: "https://sonicfangameshq.com/",
    },
    {
      name: "Tetris",
      description: "Acomoda las piezas para limpiar líneas y ganar puntos.",
      image: "tetris.jpg",
      url: "https://tetris.com/play-tetris",
    },
    {
      name: "Street Fighter II",
      description: "Lucha con tus personajes favoritos en combates épicos.",
      image: "streetfighter.jpg",
      url: "https://streetfighter.com/",
    },
    {
      name: "Donkey Kong",
      description: "Salta y esquiva barriles para rescatar a Pauline.",
      image: "donkeykong.jpg",
      url: "https://donkeykong.io/",
    },
  ]);

  const [newGame, setNewGame] = useState({
    name: "",
    description: "",
    image: "",
    url: "",
  });

  const handleChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const handleAddGame = (e) => {
    e.preventDefault();
    if (newGame.name && newGame.description && newGame.image && newGame.url) {
      setGames([...games, newGame]);
      setNewGame({ name: "", description: "", image: "", url: "" });
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="neon-title">🎮 GameTracker Retro 🎮</h1>
      </header>

      {/* Sección de juegos */}
      <section className="game-section">
        <h2 className="neon-subtitle">Mis Juegos</h2>
        <div className="game-grid">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </section>

      {/* Sección para añadir nuevos juegos */}
      <section className="add-game-section">
        <h2 className="neon-subtitle">➕ Añadir Nuevo Juego</h2>
        <form className="game-form" onSubmit={handleAddGame}>
          <input
            type="text"
            name="name"
            placeholder="Nombre del juego"
            value={newGame.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Descripción"
            value={newGame.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Nombre de imagen (ej: mario.jpg)"
            value={newGame.image}
            onChange={handleChange}
          />
          <input
            type="url"
            name="url"
            placeholder="URL del juego"
            value={newGame.url}
            onChange={handleChange}
          />
          <button type="submit">Agregar Juego</button>
        </form>
      </section>

      {/* Sección de reseñas */}
      <section className="reviews-section">
        <h2 className="neon-subtitle">⭐ Reseñas de Jugadores ⭐</h2>
        <div className="review">
          <p>"Increíble selección de juegos retro, pura nostalgia!"</p>
          <span>- GamerLover</span>
        </div>
        <div className="review">
          <p>"El diseño neón y los clásicos me encantaron 💙"</p>
          <span>- RetroQueen</span>
        </div>
      </section>

      <footer>
        <p>© 2025 GameTracker Retro | Diseñado con 💾 por Juls</p>
      </footer>
    </div>
  );
}

export default App;