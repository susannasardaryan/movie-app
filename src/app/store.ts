import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice.ts";
import moviesReducer from "../features/movies/moviesSlice.ts";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        movies: moviesReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]