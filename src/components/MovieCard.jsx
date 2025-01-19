import { POSTER_PATH } from "../utils/Constants"
const MovieCard = ({ PosterUrl }) => {
  return (
    <div className="min-w-[200px] m-3 hover:border-2 border-white group hover:max-w-[100px]">
      <img
        className="transition-transform duration-1000 hover:ease-in-out group-hover:scale-105 hover:absolute ease-out hover:z-20 hover:duration-300"
        src={POSTER_PATH + PosterUrl}
        alt="Movie Poster"
      />
    </div>
  );
};
export default MovieCard