import {createBrowserRouter} from "react-router";
import {LOGIN_PATH, MOVIE_PATH, MOVIES_HOME_PATH} from "./paths.ts";
import Layout from "../components/Layout.tsx";
import Login from '../pages/Login.tsx';
import ProtectedRoute from "./ProtectedRouter.tsx";
import Homepage from "../pages/Homepage.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import MoviePage from "../pages/MoviePage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <Layout>
                <Homepage/>
            </Layout>

    },
    {
        path: MOVIES_HOME_PATH,
        element: <ProtectedRoute>
            <Layout>
                <MoviesPage/>
            </Layout>
        </ProtectedRoute>,
    },
    {
        path: MOVIE_PATH,
        element: <ProtectedRoute>
            <Layout>
                <MoviePage/>
            </Layout>
        </ProtectedRoute>,
    },
    {
        path: LOGIN_PATH,
        element: <Layout>
            <Login/>
        </Layout>,
    },
    {
        path: '*',
        element: <Layout>
            <Homepage/>
        </Layout>
    },

]);