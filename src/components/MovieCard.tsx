import type {Movie} from "../features/movies/moviesSlice.ts";
import {useNavigate} from "react-router-dom";
import {StorageService} from "../services/apiService.ts";
import {Button, message} from "antd";
import {useIsFavorite} from "../hooks/useIsFavorite.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {addFavoriteMovie, getUsername, removeFavoriteMovie,} from "../features/login/loginSlice.ts";
import {useEffect} from "react";
import type {RootState} from "../app/store.ts";

const MovieCard = ({movie}: { movie: Movie }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const favorites = useAppSelector((state: RootState) => state.login.favoriteMoviesList);
    const username = useAppSelector(getUsername);
    const isFavorite = useIsFavorite(movie.id);

    useEffect(() => {
        StorageService.setItem("favorites", favorites);
    }, [favorites]);

    const handleMovieCardClick = () => {
        navigate('/movies/' + movie.id);
    }

    const setToFavorites = () => {
        if (!isFavorite) {
            dispatch(addFavoriteMovie(movie));
            messageApi.open({
                type: 'info',
                content: 'Movie Added to Favorites',
            });
        }
    }

    const deleteFromFavorites = () => {
        dispatch(removeFavoriteMovie(movie.id));
        messageApi.open({
            type: 'info',
            content: 'Movie Deleted from Favorites',
        });
    }

    return (
        <>
            {contextHolder}
            <div className="movie-card" onClick={handleMovieCardClick}>
                {!!movie.poster_path && <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                />}
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-details">
                    <span>{movie.release_date.slice(0, 4)}</span>
                    <span className="dot">•</span>
                    <span>{Math.round(movie.vote_average * 10)}%</span>
                </div>
                {(!isFavorite && username) && <Button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setToFavorites();
                }}>Favorite</Button>}
                {(isFavorite && username) && <Button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteFromFavorites();
                }} color="danger" variant="outlined">Delete From Favorites</Button>}
            </div>
        </>

    )
}

export default MovieCard;