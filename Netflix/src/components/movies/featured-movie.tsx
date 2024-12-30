import { Movie } from '@/lib/types';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedMovieProps {
  movie: Movie;
}

export function FeaturedMovie({ movie }: FeaturedMovieProps) {
  return (
    <div className="relative h-[56.25vw] max-h-[80vh]">
      <img
        src={movie.thumbnail_url}
        alt={movie.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-16 md:px-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {movie.title}
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-gray-200">
          {movie.description}
        </p>
        <div className="flex space-x-4">
          <Button size="lg" className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Play</span>
          </Button>
          <Button size="lg" variant="secondary" className="flex items-center space-x-2">
            <Info className="h-5 w-5" />
            <span>More Info</span>
          </Button>
        </div>
      </div>
    </div>
  );
}