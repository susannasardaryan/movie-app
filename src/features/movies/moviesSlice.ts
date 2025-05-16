import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

export type MoviesState = Movie[];

export type Movie = {
    id: number;
    adult: boolean;
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    popularity: number;
    vote_average: number;
    overview: string;
    original_language: string;
}

const moviesSlice = createSlice({
    name: "movies",
    initialState: [] as MoviesState,
    reducers: {
        setMovies: (_state, action: PayloadAction<Movie[]>) => action.payload,
    },
    selectors: {
        selectMovies: (state: MoviesState) => state,
    }
});

export const {setMovies} = moviesSlice.actions;
export const {selectMovies} = moviesSlice.selectors;
export default moviesSlice;