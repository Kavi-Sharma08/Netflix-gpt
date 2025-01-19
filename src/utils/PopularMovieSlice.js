import { createSlice } from "@reduxjs/toolkit";
const PopularMovieSlice = createSlice({
    name : "PopularMovie",
    initialState : {
        PopularMovies:null

    },
    reducers : {
        addPopularMovie : (state , action) =>{
            state.PopularMovies = action.payload
        }
    }
})
export const {addPopularMovie} = PopularMovieSlice.actions;
export default PopularMovieSlice.reducer; 