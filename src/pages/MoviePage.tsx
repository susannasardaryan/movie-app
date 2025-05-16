import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../app/store.ts";
import type {Movie} from "../features/movies/moviesSlice.ts";
import {RollbackOutlined} from "@ant-design/icons";

const MoviePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const movieId = location.pathname.split("/")[2];
    const movies = useSelector((state: RootState) => state.movies);

    const movie: Movie | undefined = movies.find((movie: Movie) => movie.id === +movieId);
    if (!movie) {
        return <Navigate to={`/movies`}></Navigate>
    }
    return (
        <div className={'movie-page-container'}>

            <RollbackOutlined onClick={() => navigate('/movies')}/>
            &nbsp; Movie Page
            <h2>{movie?.title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
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