import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationParams} from '../../navigation/MainStackNavigation';
import styles from './MovieDetail.styles';
import useMovieDetails from '../../hooks/useMovieDetails';
import {MovieDetails} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

type DeatilScreenProps = {} & StackScreenProps<NavigationParams, 'MovieDetail'>;

export default function MovieDetailScreen({
  navigation,
  route,
}: DeatilScreenProps) {
  const movie = route.params;
  const posterMovie = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, movieDetail, cast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Image source={{uri: posterMovie}} style={styles.imageContainer} />
      </View>
      <View style={styles.details}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.details}>
        {isLoading ? (
          <ActivityIndicator size={30} color="grey" />
        ) : (
          <MovieDetails movieDetail={movieDetail!} cast={cast} />
        )}
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={30} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
}
