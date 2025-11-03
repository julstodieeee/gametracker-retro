import React from "react";

const GameCard = ({ title, image, rating }) => {
  return (
    <div className="relative bg-gradient-to-b from-purple-900/70 to-black/70 border border-pink-500 rounded-2xl overflow-hidden shadow-[0_0_15px_#ff00ff] hover:shadow-[0_0_25px_#00ffff] transition-all duration-500 transform hover:-translate-y-1">
      <div className="w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/000000/ff00ff?text=Sin+Imagen";
          }}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
        <h3 className="text-pink-300 text-xs font-['Press_Start_2P'] mb-2">
          {title}
        </h3>
        <p className="text-yellow-400 text-[10px]">⭐ {rating || "N/A"}</p>
      </div>
    </div>
  );
};

export default GameCard;