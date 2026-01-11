import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";

 const useMovieTrailer = (movie_Id) => {

    const dispatch = useDispatch();
    // this is extracting the video data and updating the store with trailer data
    const getMovieVideos = async () => {

        const res = await fetch("https://api.themoviedb.org/3/movie/"+movie_Id+"/videos?language=en-US", API_OPTIONS)
        const data = await res.json();
        const filterdata = data.results.filter((video) => video.type === "Trailer");

        const trailer = filterdata.length ? filterdata[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    }, [])


}
export default useMovieTrailer;




