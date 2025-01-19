import { addPopularMovie } from "../utils/PopularMovieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
const usePopularMovies = async () => {
    const dispatch = useDispatch();
    useEffect(() => {
        MovieApi();


    }, [])
    const MovieApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovie(json.results))
       

    }




}
export default usePopularMovies;