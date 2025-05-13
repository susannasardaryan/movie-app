import type {Movie} from "../features/movies/moviesSlice.ts";

type LocalStorageValue = string | null;

export const StorageService = {
    getItem(storageKey: string) {
        const localStorageValue: LocalStorageValue = localStorage.getItem(storageKey);
        if (localStorageValue === null) return null;

        try {
            return JSON.parse(localStorageValue);
        } catch {
            return localStorageValue;
        }
    },

    setItem(storageKey: string, value: string | Movie[]) {
        value = typeof value === 'string' ? value : JSON.stringify(value);
        return localStorage.setItem(storageKey, value);
    },

    removeItem(storageKey: string) {
        return localStorage.removeItem(storageKey);
    }
};