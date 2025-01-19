import { createSlice } from "@reduxjs/toolkit";
const TvShowsSlice = createSlice({
    name : "TvShows",
    initialState : {
        TVShows : null,
    },
    reducers : {
        addTVShows : (state , action)=>{
            state.TVShows = action.payload
        }
    }
})
export const {addTVShows} = TvShowsSlice.actions;
export default TvShowsSlice.reducer