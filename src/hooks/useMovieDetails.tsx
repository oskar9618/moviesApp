import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState({
    isLoading: true,
    movieDetail: undefined,
    cast: [],
  });

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovieDetails = async () => {
    const movieDetail = await movieDB.get(`/${movieId}`);
    const creditsMovie = await movieDB.get(`/${movieId}/credits`);

    const [details, credits] = await Promise.all([movieDetail, creditsMovie]);

    setState({
      isLoading: false,
      movieDetail: details.data,
      cast: credits.data.cast,
    });
  };

  return {
    ...state,
  };
};

export default useMovieDetails;
