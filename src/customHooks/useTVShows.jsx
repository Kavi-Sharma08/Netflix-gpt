import { addTVShows } from "../utils/TvShowsSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
const useTVShows = async () => {
    const dispatch = useDispatch();
    useEffect(() => {
        MovieApi();


    }, [])
    const MovieApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
        const json = await data.json();
        dispatch(addTVShows(json.results))
       

    }
}
export default useTVShows;