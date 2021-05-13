import React from 'react';
import {View, Image} from 'react-native';
import {Movie} from '../../types/mobiDB.interface';
import styles from './PosterMovie.styles';

type PosterMovieProps = {
  movie: Movie;
  height?: number;
  width?: number;
};

export default function PosterMovie({
  movie,
  height = 420,
  width = 300,
}: PosterMovieProps) {
  const posterMovie = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{...styles.container, width, height}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: posterMovie}} />
      </View>
    </View>
  );
}
