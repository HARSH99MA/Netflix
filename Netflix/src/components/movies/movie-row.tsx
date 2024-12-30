import { Movie } from '@/lib/types';
import { MovieCard } from './movie-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
}

export function MovieRow({ title, movies, onPlay, onAddToList }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 px-4 md:px-8 lg:px-12">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="group relative">
        <ChevronLeft
          className={`absolute left-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-2 text-white opacity-0 transition hover:bg-black/80 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleScroll('left')}
        />
        <div
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-[200px] md:min-w-[260px]">
              <MovieCard
                movie={movie}
                onPlay={onPlay}
                onAddToList={onAddToList}
              />
            </div>
          ))}
        </div>
        <ChevronRight
          className="absolute right-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-2 text-white opacity-0 transition hover:bg-black/80 group-hover:opacity-100"
          onClick={() => handleScroll('right')}
        />
      </div>
    </div>
  );
}