
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from '../utils/movieSlice'

export const useTopRatedMovies = () => {

    
    const dispatch = useDispatch();
    const getTopRatedmovies = async () => {

        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);

        const data = await res.json();

        dispatch(addTopRatedMovies(data.results));
    }

    useEffect(() => {
        getTopRatedmovies();
    }, [])



}

