import { addUpcomingMovies } from "../utils/UpcomingMovieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    useEffect(() => {
        MovieApi();


    }, [])
    const MovieApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
       

    }




}
export default useUpcomingMovies;