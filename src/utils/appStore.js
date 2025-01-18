import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice" 
import movieReducer from "./MovieSlice"
import TopMovieReducer from "./TopRatedMoviesSlice"

const appstore = configureStore(
    {
        reducer: {
            user : userReducer,
            movie : movieReducer,
            TopRatedMovie : TopMovieReducer
        }
    }
)

export default appstore