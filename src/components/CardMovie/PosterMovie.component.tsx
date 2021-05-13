import React from 'react';
import {View, Image} from 'react-native';
import {Movie} from '../../types/mobiDB.interface';
import styles from './PosterMovie.styles';

type PosterMovieProps = {
  movie: Movie;
};

export default function PosterMovie({movie}: PosterMovieProps) {
  const posterMovie = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{width: 300, height: 400}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: posterMovie}} />
      </View>
    </View>
  );
}
