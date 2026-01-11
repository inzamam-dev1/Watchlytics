import React from 'react'
import { CDN_IMG_URL } from '../utils/Constant'

const MovieCard = ({ posterPath ,Movie}) => {

  const handleMovieClike = () => {

    const query = encodeURIComponent(Movie.title || Movie.name);

    const netflixUrl = `https://www.netflix.com/search?q=${query}`;

    window.open(netflixUrl,"_blank");

  }

  return (
    <div onClick={handleMovieClike}>
      <img className='rounded-lg' src={CDN_IMG_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;