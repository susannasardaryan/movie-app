import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import type {Movie} from "../movies/moviesSlice.ts";
import {StorageService} from "../../services/apiService.ts";

export type UserInfo = {
    username: string;
    password: string;
};

export interface LoginState {
    userInfo: UserInfo;
    favoriteMoviesList: Movie[];
}

const initialFavorites: Movie[] = StorageService.getItem("favorites") ?? [];
const initialUserInfo: UserInfo = StorageService.getItem("userInfo") ?? {
    username: "",
    password: "",
};

console.log(initialUserInfo, initialFavorites);

const initialState: LoginState = {
    userInfo: initialUserInfo,
    favoriteMoviesList: initialFavorites,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<UserInfo>) => {
            state.userInfo = action.payload;
        },
        setFavoriteMovies: (state, action: PayloadAction<Movie[]>) => {
            state.favoriteMoviesList = action.payload;
        },
        addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
            state.favoriteMoviesList.push(action.payload);
        },
        removeFavoriteMovie: (state, action: PayloadAction<number>) => {
            state.favoriteMoviesList = state.favoriteMoviesList.filter(
                (el) => el.id !== action.payload
            );
        },
    },
    selectors: {
        getUsername: state => state.userInfo.username,
    }
});

export const { setInfo, setFavoriteMovies, addFavoriteMovie, removeFavoriteMovie } = loginSlice.actions;
export const {getUsername} = loginSlice.selectors;
export default loginSlice.reducer;
