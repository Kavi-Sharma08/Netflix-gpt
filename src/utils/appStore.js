import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice" 
import movieReducer from "./MovieSlice"
import TopMovieReducer from "./TopRatedMoviesSlice"
import PopularMovieReducer from "./PopularMovieSlice"
import UpcomingMovieReducer from "./UpcomingMovieSlice"
import TVShowsReducer from "./TvShowsSlice"

const appstore = configureStore(
    {
        reducer: {
            user : userReducer,
            movie : movieReducer,
            TopRatedMovie : TopMovieReducer,
            PopularMovie : PopularMovieReducer,
            UpcomingMovie : UpcomingMovieReducer,
            TVShow : TVShowsReducer

        }
    }
)

export default appstore