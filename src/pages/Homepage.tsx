import homepage1 from '../assets/homepage1.jpg'
import homepage2 from '../assets/homepage2.jpg'

import type {Movie} from "../features/movies/moviesSlice.ts";
import {StorageService} from "../services/apiService.ts";
import MovieCard from "../components/MovieCard.tsx";
import {PlayCircleFilled} from "@ant-design/icons";
import {Flex} from "antd";

const Homepage = () => {
    const initialFavorites:Movie[] = StorageService.getItem('favorites') ?? [];

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
                        <img src={homepage1} alt="Spiderverse" className="main-img"/>
                        <PlayCircleFilled className="center-play-icon"/>
                    </div>
                    <img src={homepage2} alt="Guardians" className="side-img"/>
                </div>
            </div>

            <h3>My favorites</h3>
            <Flex gap={'small'}>
                {initialFavorites?.map((favorite: Movie) => (
                    <MovieCard movie={favorite}/>
                ))}
            </Flex>

        </>
    )
}

export default Homepage;