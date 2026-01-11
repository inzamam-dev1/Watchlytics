
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from '../utils/movieSlice'
import { useSelector } from "react-redux";

export const usePapularMovies = () => {

  const popularMovies = useSelector((store) => store.movies.PopularMovies)
    const dispatch = useDispatch();
    const getPapularmovies = async () => {

        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);

        const data = await res.json();

        dispatch(addPopularMovies(data.results));
    }

    useEffect(() => {
       !popularMovies&& getPapularmovies();
    }, [])



}

