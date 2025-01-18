import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    useEffect(() => {
        MovieApi();


    }, [])
    const MovieApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
       

    }




}
export default useNowPlayingMovies;
