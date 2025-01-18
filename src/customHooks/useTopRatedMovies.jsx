import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { mainMovie } from "../utils/TopRatedMoviesSlice";
const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    useEffect(() => {
        MovieApi();


    }, [])
    const MovieApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(mainMovie(json.results))
        
    }
}
export default useTopRatedMovies;