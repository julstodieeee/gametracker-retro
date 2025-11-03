import React from "react";
import { motion } from "framer-motion";

function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p style={{ textAlign: "center", color: "#94a3b8" }}>Aún no hay reseñas.</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          className="review-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h4>{review.name} — {review.game}</h4>
          <p>{review.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default ReviewList;