import MovieCard from "./MovieCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const MovieList = ({ title, Movies }) => {

    if (!Movies) return;
    return (
        <div className="bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold font-serif p-2 mx-1 text-white">{title}</h1>
                <Carousel opts={{
                    align: "start",
                }}
                    className="w-full max-w-full">

                    <CarouselContent className="">
                        
                        {Movies && Movies.length > 0 ? (
                            Movies.map(({ id, poster_path }) => (
                                <CarouselItem  key={id} className="md:basis-1/2 lg:basis-1/6">
                                    <MovieCard PosterUrl={poster_path} />
                                </CarouselItem>
                            ))
                        ) : (
                            <p className="text-white p-4">No movies available</p>
                        )}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" />
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" />
                </Carousel>

            </div>


        </div>

    )
}

export default MovieList