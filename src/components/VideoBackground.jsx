import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

export const VideoBackground = ({ movie_Id }) => {
    const trailer_Video = useSelector(
        (store) => store.movies?.trailerVideo
    );

    useMovieTrailer(movie_Id);

    return (
        <div className="relative top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
            <iframe
                className="
                    w-screen
                    h-screen
                    scale-125
                "
                src={
                    "https://www.youtube.com/embed/" +
                    trailer_Video?.key +
                    "?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=" +
                    trailer_Video?.key
                }
                title="YouTube video player"
                allow="autoplay; fullscreen"
            />
        </div>
    );
};
