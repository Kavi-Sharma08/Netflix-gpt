import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import usePopularMovies from "../customHooks/usePopularMovies"
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import useTVShows from "../customHooks/useTVShows"
const SecondaryContainer = () => {
  usePopularMovies();
  useUpcomingMovies();
  useTVShows();
  const movies = useSelector((store)=>store.movie?.nowPlayingMovies)
  const TopMovies = useSelector((store)=>store.TopRatedMovie?.TopMovie)
  const PopularMovies = useSelector((store)=>store.PopularMovie?.PopularMovies)
  const UpcomingMovies = useSelector ((store)=>store.UpcomingMovie?.UpcomingMovies)
  const TVShow = useSelector ((store)=>store.TVShow?.TVShows)
  
  
  return (
    <div>
      <MovieList title = "Now Playing Movies" Movies = {movies}/>
      <MovieList title = "Top Rated Movies" Movies = {TopMovies}/>
      <MovieList title= "Popular Movies" Movies={PopularMovies}/>
      <MovieList title = "Upcoming Movies" Movies={UpcomingMovies}/>
      <MovieList title = "Popular TV Shows" Movies = {TVShow}/>
    </div>
  )
}

export default SecondaryContainer