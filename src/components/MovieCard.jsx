import React from 'react'
import { CDN_IMG_URL } from '../utils/Constant'

const MovieCard = ({ posterPath, Movie }) => {

  const handleMovieClike = () => {

    const query = Movie.title;

    const movieSlug = query
      .toLowerCase()
      .replace(/[:]/g, "")      // remove colon
      .replace(/[^a-z0-9\s-]/g, "") // remove other special chars
      .trim()
      .replace(/\s+/g, "-");    // spaces → hyphens

    const movieUrl = `https://multimovies.golf/movies/${movieSlug}/`;

    window.open(movieUrl, "_blank");

  }

  return (
    <div onClick={handleMovieClike}>
      <img className='rounded-lg' src={CDN_IMG_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;