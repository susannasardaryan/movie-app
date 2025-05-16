import {useEffect} from "react";
import {fetchMovies, searchMovies} from "../api/fetchData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {Movie} from "../features/movies/moviesSlice.ts";
import {setMovies} from '../features/movies/moviesSlice.ts';
import type {RootState} from "../app/store.ts";
import {Flex} from "antd";
import MovieCard from '../components/MovieCard.tsx';
import Search from "antd/es/input/Search";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        fetchMovies().then((movies: Movie[]) => {
            dispatch(setMovies(movies));
        })
    }, []);

    const handleSearch = (searchTerm:string) => {
        searchMovies(searchTerm).then((movies: Movie[]) => {
            dispatch(setMovies(movies));
        })
    }

    return (
        <div className="movies">
            <Search placeholder="input search text" allowClear onSearch={handleSearch} style={{ width:'50%', margin: '1rem 0' }} />
            {movies.length === 0 ? (
                <p>No movies found.</p>
            ) : (
                <Flex wrap={true} gap={"small"} justify={"space-between"}>
                    {movies.map((movie: Movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </Flex>
            )}
        </div>
    )
}

export default MoviesPage;