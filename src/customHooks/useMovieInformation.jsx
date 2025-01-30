import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { addMoreInfo } from "@/utils/TopRatedMoviesSlice";
const useMovieInformation = (movieId)=>{
    
    if(!movieId) return;
    console.log(movieId)
    const dispatch = useDispatch();
    useEffect(()=>{
        MovieApi()
    },[])
    const MovieApi = async ()=>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`,API_OPTIONS)
            const json = await data.json() ;
            dispatch(addMoreInfo(json))

        }
        catch(error){
            console.log(error)
        }
        
    }


}
export default useMovieInformation