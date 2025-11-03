import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Star, MessageSquare } from "lucide-react";

const StatsDashboard = ({ gamesCount, avgRating, reviewsCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="stats-dashboard grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-purple-900 via-fuchsia-900 to-black border-2 border-pink-500 rounded-2xl shadow-[0_0_25px_#ff00ff] max-w-3xl w-full text-center"
    >
      {/* 🎮 Juegos totales */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-4 rounded-xl bg-black/40 border border-pink-400 shadow-[0_0_15px_#ff00ff] transition-all"
      >
        <Gamepad2 className="mx-auto text-pink-400 mb-2" size={30} />
        <h3 className="text-pink-300 text-sm tracking-widest">JUEGOS</h3>
        <p className="text-3xl mt-1 text-white">{gamesCount}</p>
      </motion.div>

      {/* ⭐ Promedio de puntuación */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-4 rounded-xl bg-black/40 border border-yellow-400 shadow-[0_0_15px_#ffff00] transition-all"
      >
        <Star className="mx-auto text-yellow-400 mb-2" size={30} />
        <h3 className="text-yellow-300 text-sm tracking-widest">PROMEDIO</h3>
        <p className="text-3xl mt-1 text-white">{avgRating}</p>
      </motion.div>

      {/* 💬 Total de reseñas */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-4 rounded-xl bg-black/40 border border-cyan-400 shadow-[0_0_15px_#00ffff] transition-all"
      >
        <MessageSquare className="mx-auto text-cyan-400 mb-2" size={30} />
        <h3 className="text-cyan-300 text-sm tracking-widest">RESEÑAS</h3>
        <p className="text-3xl mt-1 text-white">{reviewsCount}</p>
      </motion.div>
    </motion.div>
  );
};
export default StatsDashboard;