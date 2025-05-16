import {MOVIES_URL, SEARCH_MOVIES_URL} from "./constants.ts";

const auth = import.meta.env.VITE_REACTAPPAPIKEY;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${auth}`
    }
};

export const fetchMovies = async (page: number = 1) => {
    return fetch(`${MOVIES_URL}&page=${page}`, options)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}

export const searchMovies = async (searchTerm: string) => {
    return fetch(`${SEARCH_MOVIES_URL}&query=${searchTerm}&page=1`, options)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}



