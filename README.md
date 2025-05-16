
# 🎬 Movie App

A responsive movie browser built with React, Redux, and TypeScript. Users can browse movies, view details, and manage their list of favorite movies with persistence using local storage.

---

## 🚀 Features

- 🔍 Browse movies and view detailed info
- ❤️ Add/remove movies to your favorites
- 💾 Favorites persist using localStorage
- 🔄 React Router for navigation
- 📦 State management with Redux Toolkit
- 💅 Styled with Ant Design and custom CSS
- 🔐 User login simulation (via Redux state)

---

## 🛠️ Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Router DOM
- Ant Design (UI components)
- TMDB API (for movie data)
- LocalStorage (for persisting favorites)

---

## 📂 Project Structure

```
src/
├── components/         # Reusable components like MovieCard
├── features/
│   ├── movies/         # Movie-related Redux slice and types
│   └── login/          # Login and favorites logic (Redux slice)
├── hooks/              # Custom React hooks
├── services/           # Storage and API utilities
├── App.tsx             # Main app routing
└── main.tsx            # App bootstrap
```

---

## 📦 Installation

```bash
git clone https://github.com/susannasardaryan/movie-app.git
cd movie-app
npm install
```

---

## ▶️ Running the App

```bash
npm run dev
```


---

## 🧪 Development Notes

- `useIsFavorite(id)` is a custom hook that checks if a movie is in the user's favorites.
- Favorite movies are saved in `localStorage` via a `StorageService`.
- Redux slice for user info and favorites is in `features/login/loginSlice.ts`.
- The app assumes a single user without backend authentication for simplicity.

---

## 📌 To-Do / Future Features

- 🔐 Add real authentication with backend
- 🌍 Pagination and infinite scroll
- 🎞️ Movie categories & filters
- 📱 Mobile UI improvements
- 💬 User reviews & ratings

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

Developed by [susannasardaryan](https://github.com/susannasardaryan)
