import React from "react";
import "./GameCard.css";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img
        src={`${process.env.PUBLIC_URL}/img/${game.image}`}
        alt={game.name}
      />
      <h3>{game.name}</h3>
      <p>{game.description}</p>
      <a href={game.url} target="_blank" rel="noopener noreferrer">
        <button>🎮 Jugar</button>
      </a>
    </div>
  );
}

export default GameCard;