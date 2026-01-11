import React from 'react'
import MovieCard from './MovieCard';
const MoviesList = ({ title, movies }) => {
    // Need to understand****
    if (!movies || movies.length === 0) return null;
    //*** */
    return (
       <div className="px-6 bg-black relative">
    {/* Section title */}
    <h1 className="text-2xl md:text-3xl py-4 text-white font-bold">
        {title}
    </h1>

    {/* Horizontal scroll container */}
    <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4">

            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="
                        min-w-45
                        md:min-w-50
                        hover:scale-110
                        transition-transform
                        duration-300
                        ease-out
                        cursor-pointer
                        
                    "
                >
                    <MovieCard posterPath={movie.poster_path} Movie={movie} />
                </div>
            ))}

        </div>
    </div>
</div>
    )
}
export default MoviesList;