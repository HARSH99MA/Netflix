import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { FeaturedMovie } from '@/components/movies/featured-movie';
import { MovieRow } from '@/components/movies/movie-row';
import useMovies from '@/hooks/use-movies';
import { supabase } from '@/lib/supabase';
import { Movie } from '@/lib/types';

export default function BrowsePage() {
  const { movies, categories, loading, error, getMoviesByCategory } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-black">
      <div className="text-2xl text-white">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="flex h-screen items-center justify-center bg-black">
      <div className="text-2xl text-red-500">{error}</div>
    </div>;
  }

  const featuredMovie = selectedMovie || movies[0];

  const handlePlay = (movie: Movie) => {
    // Implement play functionality
    console.log('Playing:', movie.title);
  };

  const handleAddToList = async (movie: Movie) => {
    try {
      const { error } = await supabase
        .from('watchlist')
        .insert([{ movie_id: movie.id }]);
      
      if (error) throw error;
    } catch (err) {
      console.error('Error adding to watchlist:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {featuredMovie && <FeaturedMovie movie={featuredMovie} />}
      <div className="space-y-8 pb-12 -mt-32 relative z-10">
        {categories.map((category) => (
          <MovieRow
            key={category.id}
            title={category.name}
            movies={getMoviesByCategory(category.id)}
            onPlay={handlePlay}
            onAddToList={handleAddToList}
          />
        ))}
      </div>
    </div>
  );
}