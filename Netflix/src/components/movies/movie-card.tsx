import { Movie } from '@/lib/types';
import { Play, Plus } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
}

export function MovieCard({ movie, onPlay, onAddToList }: MovieCardProps) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-md">
      <img
        src={movie.thumbnail_url}
        alt={movie.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 hidden bg-black/60 group-hover:block">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="mb-2 text-lg font-semibold text-white">{movie.title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => onPlay(movie)}
              className="rounded-full bg-white p-2 text-black hover:bg-white/90"
            >
              <Play className="h-4 w-4" />
            </button>
            <button
              onClick={() => onAddToList(movie)}
              className="rounded-full bg-gray-800/60 p-2 text-white hover:bg-gray-800"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}