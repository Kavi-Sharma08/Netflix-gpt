import { createSlice } from "@reduxjs/toolkit";
const UpcomingMovieSlice = createSlice({
    name : "UpcomingMovie",
    initialState : {
        UpcomingMovies : null,
    },
    reducers : {
        addUpcomingMovies : (state ,action) => {
            state.UpcomingMovies = action.payload
        }
    }
})
export const {addUpcomingMovies} = UpcomingMovieSlice.actions;
export default UpcomingMovieSlice.reducer; 