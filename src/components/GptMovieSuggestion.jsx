import React from "react";

export const GptMovieSuggestion = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="w-full mt-10 px-6 self-start">
      <h2 className="text-xl text-white font-bold mb-4 text-center">
        Movie Suggestions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-3 hover:scale-105 transition-transform"
          >
            <div className="h-40 bg-zinc-800 rounded flex items-center justify-center text-gray-400">
              Poster
            </div>

            <p className="text-white mt-2 font-semibold">
              {movie.title}
            </p>

            <p className="text-sm text-gray-400">
              Score: {movie.score.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
