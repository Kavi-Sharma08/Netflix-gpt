import { createSlice } from "@reduxjs/toolkit";
const TopRatedMoviesSlice = createSlice({
    name : "TopRatedMovies",
    initialState : {
        TopMovie : null,
        MovieTrailer : null
    },
    reducers : {
        mainMovie : (state , action) =>{
            state.TopMovie = action.payload
        },
        addMovieTrailer : (state ,action) => {
            state.MovieTrailer = action.payload
            

        }
    }
})

export const {mainMovie , addMovieTrailer} = TopRatedMoviesSlice.actions
export default TopRatedMoviesSlice.reducer; 