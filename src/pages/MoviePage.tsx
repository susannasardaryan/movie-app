import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../app/store.ts";
import type {Movie} from "../features/movies/moviesSlice.ts";

const MoviePage = () => {
    const location = useLocation();
    const movieId = location.pathname.split("/")[2];
    const movies = useSelector((state:RootState) => state.movies);

    const movie:Movie = movies.find((movie:Movie) => movie.id === +movieId);

    return (
        <div  style={{ width: "50%" }}>
            Movie Page
            <h2>{movie?.title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                alt={movie?.title}
                style={{width: "100%", borderRadius: "8px"}}
            />
            <p><strong>Release Date:</strong> {movie?.release_date}</p>
            <p><strong>Language:</strong> {movie?.original_language}</p>
            <p><strong>Popularity:</strong> {movie?.popularity}</p>
            <p><strong>Adult:</strong> {movie?.adult ? "Yes" : "No"}</p>
            <p><strong>Overview:</strong> {movie?.overview}</p>
        </div>
    )
}

export default MoviePage