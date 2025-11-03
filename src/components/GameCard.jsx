import React from "react";
import { motion } from "framer-motion";

function GameCard({ game }) {
  return (
    <motion.div
      className="game-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={game.image} alt={game.title} />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
    </motion.div>
  );
}

export default GameCard;