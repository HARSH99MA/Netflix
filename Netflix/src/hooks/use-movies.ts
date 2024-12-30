import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Movie, Category } from '@/lib/types';

export default function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [moviesResponse, categoriesResponse] = await Promise.all([
          supabase.from('movies').select('*'),
          supabase.from('categories').select('*'),
        ]);

        if (moviesResponse.error) throw moviesResponse.error;
        if (categoriesResponse.error) throw categoriesResponse.error;

        setMovies(moviesResponse.data);
        setCategories(categoriesResponse.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getMoviesByCategory = (categoryId: string) => {
    return movies.filter((movie) => movie.category_id === categoryId);
  };

  return {
    movies,
    categories,
    loading,
    error,
    getMoviesByCategory,
  };
}