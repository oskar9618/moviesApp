import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
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
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{...styles.container, width, height}}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('MovieDetail', movie)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: posterMovie}} />
      </View>
    </TouchableOpacity>
  );
}
