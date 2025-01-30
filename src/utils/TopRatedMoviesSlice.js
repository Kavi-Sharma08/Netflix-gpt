import { createSlice } from "@reduxjs/toolkit";
const TopRatedMoviesSlice = createSlice({
    name : "TopRatedMovies",
    initialState : {
        TopMovie : null,
        MovieTrailer : null,
        MoreInfo : null
    },
    reducers : {
        mainMovie : (state , action) =>{
            state.TopMovie = action.payload
        },
        addMovieTrailer : (state ,action) => {
            state.MovieTrailer = action.payload
            

        },
        addMoreInfo : (state , action)=>{
            state.MoreInfo = action.payload
        }
    }
})

export const {mainMovie , addMovieTrailer , addMoreInfo} = TopRatedMoviesSlice.actions
export default TopRatedMoviesSlice.reducer; 