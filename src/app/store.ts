import {combineSlices, configureStore} from "@reduxjs/toolkit";
import loginSlice from "../features/login/loginSlice.ts";
import moviesSlice from "../features/movies/moviesSlice.ts";

const rootReducer = combineSlices(loginSlice, moviesSlice);
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]