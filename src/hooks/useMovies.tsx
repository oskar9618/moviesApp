import {useEffect, useState} from 'react';
import movieDBApi from '../api/movieDB';
import {Movie, MovieResponse} from '../types/mobiDB.interface';

type MovieState = {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRateMovies: Movie[];
  upcomingMovies: Movie[];
};

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieState>();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const nowPlayingMovies = await movieDBApi.get<MovieResponse>(
      '/now_playing',
    );
    const popularMovies = await movieDBApi.get<MovieResponse>('/popular');
    const topRateMovies = await movieDBApi.get<MovieResponse>('/top_rated');
    const upcomingMovies = await movieDBApi.get<MovieResponse>('/upcoming');

    const movieResponse = await Promise.all([
      nowPlayingMovies,
      popularMovies,
      topRateMovies,
      upcomingMovies,
    ]);

    setMovies({
      nowPlayingMovies: movieResponse[0].data.results,
      popularMovies: movieResponse[1].data.results,
      topRateMovies: movieResponse[2].data.results,
      upcomingMovies: movieResponse[3].data.results,
    });

    setIsLoading(false);
  };

  return {
    ...movies,
    isLoading,
  };
}
