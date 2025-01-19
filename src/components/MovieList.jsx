import MovieCard from "./MovieCard";


const MovieList = ({ title, Movies }) => {
    console.log(Movies)
    if (!Movies) return;
    return (
        <div className="bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold font-serif p-2 mx-1 text-white">{title}</h1>
                <div className="flex overflow-x-scroll">
                    {
                        Movies.map(movie => <MovieCard key={movie.id} PosterUrl={movie.poster_path} />)
                    }

                </div>

            </div>


        </div>

    )
}

export default MovieList