import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            {/* Push lists upward to overlap trailer */}
            <div className="pl-10 relative z-20 space-y-10">

                <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
                <MoviesList title="Top Rated" movies={movies.TopRatedMovies} />
                <MoviesList title="Popular" movies={movies.PopularMovies} />

            </div>
        </div>
    )
}
export default SecondaryContainer;
