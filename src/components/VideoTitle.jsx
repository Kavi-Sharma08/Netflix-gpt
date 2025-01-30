import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useMovieInformation from "@/customHooks/useMovieInformation";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview, movieId }) => {
  useMovieInformation(movieId); // Fetch movie info when component mounts

  const info = useSelector((store) => store?.TopRatedMovie?.MoreInfo);

  // Ensure info exists before accessing properties
  if (!info) {
    return <p className="text-white px-20 py-60">Loading movie info...</p>;
  }

  return (
    <div className="absolute w-screen aspect-video px-20 py-60 bg-gradient-to-tr from-black">
      <h2 className="font-sans font-bold text-3xl mx-2 my-3 text-white uppercase">
        {title}
      </h2>
      <p className="font-medium max-w-prose mx-2 my-3 text-white">{overview}</p>
      <div className="my-6">
        <HoverCard>
          <HoverCardTrigger className="font-medium p-4 m-2 rounded-md min-w-32 hover:bg-gray-200 transition-all duration-300 bg-slate-100">
            ▶️Play
          </HoverCardTrigger>
          
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="font-medium p-4 m-2 rounded-md min-w-32 hover:bg-gray-200 transition-all duration-300 bg-slate-100">
          ℹ️ More Info
          </HoverCardTrigger>
          <HoverCardContent>
            
            {info.genres && info.genres.length > 0
              ? info.genres.map((g) => g.name).join(", ")
              : "No genres available"
            }
            <p className="my-3 font-serif font-semibold">{info.overview}</p>
            <p className="my-3 font-semibold">Rating : {info.vote_average}</p>
            <p className="my-3 font-semibold">Realeased on : {info.release_date}</p>

          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default VideoTitle;
