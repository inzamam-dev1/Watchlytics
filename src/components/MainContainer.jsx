import { useSelector } from "react-redux"
import { VideoBackground } from "./VideoBackground"
import { VideoTital } from "./VideoTital"
export const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) {
        return;
    }
    const mainMovie = movies[0];
  
    const { original_title, overview, id } = mainMovie;
    
    return (
        <>
            <VideoTital original_title={original_title} overview={overview} />
            <VideoBackground movie_Id={id} />

        </>

    )
}
