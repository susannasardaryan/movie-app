import type {Movie} from "../features/movies/moviesSlice.ts";
import {useNavigate} from "react-router-dom";
import {StorageService} from "../services/apiService.ts";
import {Button} from "antd";
import {useState} from "react";
import {message} from "antd";

export const isAvailable = (id: number) => {
    const isAvailableValue = StorageService.getItem('favorites')?.find((el: Movie) => el.id === id);
    console.log(!!isAvailableValue);
    return !!isAvailableValue;
}

const MovieCard = ({movie}: { movie: Movie }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const initialFavoriteValue = isAvailable(movie.id);
    const [isFavorite, setFavorite] = useState(initialFavoriteValue);

    const handleClick = () => {
        navigate('/movies/' + movie.id);
    }

    const setToFavorites = () => {
        if (!isAvailable(movie.id)) {
            let favorites: Movie[] = StorageService.getItem('favorites') ?? [];
            favorites = [...favorites, movie];
            StorageService.setItem("favorites", favorites);
            setFavorite(true);
            messageApi.open({
                type: 'info',
                content: 'Movie Added to Favorites',
            });
        }
    }

    const deleteFromFavorites = () => {
        let favorites: Movie[] = StorageService.getItem('favorites') ?? [];
        favorites = favorites?.filter((el: Movie) => el.id !== movie.id);
        StorageService.setItem("favorites", favorites);
        setFavorite(false);
    }

    return (
        <>
            {contextHolder}
            <div key={movie.id} className="movie-card" onClick={handleClick}>
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
                {!isFavorite && <Button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // 🔒 Prevent navigating
                    setToFavorites(); // Your logic
                }}>Favorite</Button>}
                {isFavorite && <Button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // 🔒 Prevent navigating
                    deleteFromFavorites(); // Your logic
                }} color="danger" variant="outlined">Delete</Button>}
            </div>
        </>

    )
}

export default MovieCard;