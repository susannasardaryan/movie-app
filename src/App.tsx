import './App.css'
import {router} from "./routes/router.tsx";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './app/store.ts'

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}>
            </RouterProvider>
        </Provider>

    )
}

export default App
