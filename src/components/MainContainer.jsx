import { useSelector } from "react-redux"
import VideoBackGround from "./VideoBackGround"
import VideoTitle from "./VideoTitle"
import useTopRatedMovies from "../customHooks/useTopRatedMovies"

const MainContainer = () => {
  useTopRatedMovies();
  const movies = useSelector((state) => state?.TopRatedMovie?.TopMovie)
  if (movies === null) return
  
  const mainMovie = movies[6];
  const {original_title , overview , id} = mainMovie
  

  return (
    <div >
      {/* <VideoBackGround /> */}
      <VideoTitle title={original_title} overview={overview} movieId = {id}  />
      <VideoBackGround movieId = {id}/>
      
    </div>
  )
}

export default MainContainer