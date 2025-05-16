import {useSelector} from "react-redux";
import type {Movie} from "../features/movies/moviesSlice.ts";
import type {RootState} from "../app/store.ts";

export const useIsFavorite = (id: number): boolean => {
    const favoriteMovies: Movie[] = useSelector((state: RootState) => state.login.favoriteMoviesList);
    return favoriteMovies?.some((movie: Movie) => movie.id === id);
};
