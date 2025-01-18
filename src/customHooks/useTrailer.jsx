import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';

import { addMovieTrailer } from '../utils/TopRatedMoviesSlice';
const useTrailer = (movieId) => {
    
    useEffect(() => {

        fetchApi();
    }, [])
    
    const dispatch = useDispatch();

    const fetchApi = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
            const json = await response.json();
            const movieTrailer = json.results.filter(video => video.type === "Trailer");
            const trailer = movieTrailer.length > 0 ? movieTrailer[0] : json.results[0];
            dispatch(addMovieTrailer(trailer))


        }
        catch (error) {
            console.error('Failed to fetch videos:', error.message);
        }

    }
    


}
export default useTrailer;

