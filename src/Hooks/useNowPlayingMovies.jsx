
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from '../utils/movieSlice'

export const useNowPlayingMovies = () => {

    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies)

    const dispatch = useDispatch();
    const getmovies = async () => {

        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);

        const data = await res.json();

        console.log(data);
        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(() => {
        if (!nowPlaying) { getmovies(); }

    }, [])



}

