import { POSTER_PATH } from "../utils/Constants"


const MovieCard = ({ PosterUrl }) => {

  return (

    <div className="hover:scale-110 transition-all ease-in overflow-hidden">
      <img
        className="w-52 h-52"
        src={POSTER_PATH + PosterUrl}
        alt="Movie Poster"
      />
    </div>
  );
};
export default MovieCard