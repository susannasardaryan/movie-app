import type {Movie} from "../features/movies/moviesSlice.ts";
import MovieCard from "../components/MovieCard.tsx";
import {PlayCircleFilled} from "@ant-design/icons";
import {Flex} from "antd";
import {useSelector} from "react-redux";
import type {RootState} from "../app/store.ts";
import {type UserInfo} from "../features/login/loginSlice.ts";
import {fetchPopularMovies} from "../api/fetchData.ts";
import {useEffect, useState} from "react";

const Homepage = () => {
    const favoriteMovies:Movie[] = useSelector((state:RootState) => state.login.favoriteMoviesList);
    const user: UserInfo = useSelector((state: RootState) => state.login.userInfo);
    let [trendingMovies, setRendingMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetchPopularMovies().then((movies) => {
            setRendingMovies(movies);
        })
    }, []);

    return (
        <>
            <div className="hero-container">
                <div className="hero-left">
                    <h3>FIND MOVIES</h3>
                    <h1>
                        <span className="gradient-text">TV SHOWS AND MORE</span>
                    </h1>
                </div>

                <div className="hero-right">
                    <div className="main-image-container">
                        <img src={'./homepage1.png'} alt="Spiderverse" className="main-img"/>
                        <PlayCircleFilled className="center-play-icon"/>
                    </div>
                    <img src={'./homepage2.png'} alt="Guardians" className="side-img"/>
                </div>
            </div>
            {
                (favoriteMovies?.length > 0 && !!user.username) && (
                    <>
                        <h1>My favorites</h1>
                        <Flex gap={'small'} className={'favorites'}>
                            {favoriteMovies?.map((favorite: Movie) => (
                                <MovieCard movie={favorite} key={favorite.id}/>
                            ))}
                        </Flex>
                    </>)
            }
            <h1>Trending Now</h1>
            <Flex gap="small" wrap="wrap">
                {trendingMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </Flex>

        </>
    )
}

export default Homepage;