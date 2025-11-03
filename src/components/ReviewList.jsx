import React from "react";

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-center text-pink-300 text-xs font-['Press_Start_2P']">
        💬 No hay reseñas todavía. ¡Sé el primero en opinar!
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-purple-950 border-2 border-purple-500 rounded-2xl p-4 shadow-md hover:shadow-pink-400/30 transition-all text-pink-300 font-['Press_Start_2P'] text-[10px]"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-200">{review.name}</span>
            <span className="text-yellow-300">{review.rating} ⭐</span>
          </div>
          <p className="text-[9px] text-pink-200">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;