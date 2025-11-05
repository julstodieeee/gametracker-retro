import React from "react";
import "./GameCard.css";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
    </div>
  );
}

export default GameCard;