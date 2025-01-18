import { createSlice } from "@reduxjs/toolkit";
const MovieSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload;
        }


    }
})

export const {addNowPlayingMovies} = MovieSlice.actions;
export default MovieSlice.reducer