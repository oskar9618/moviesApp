import {useEffect, useState} from 'react';
import movieDBApi from '../api/movieDB';

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await movieDBApi.get('/now_playing');
    setNowPlayingMovies(response.data.results);
    setIsLoading(false);
  };

  return {
    nowPlayingMovies,
    isLoading,
  };
}
