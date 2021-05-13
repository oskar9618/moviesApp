import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastCard} from '..';
import styles from './MovieDetails.style';

type MovieDetailProps = {
  movieDetail: any;
  cast: any[];
};

export default function MovieDetails({movieDetail, cast}: MovieDetailProps) {
  return (
    <View>
      <View style={styles.rating}>
        <Icon name="star-outline" size={16} color="gold" />
        <Text style={styles.marginLeft}>{movieDetail.vote_average}</Text>
        <Text style={styles.marginLeft}>
          - {movieDetail.genres.map((item: any) => item.name).join(', ')}
        </Text>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Synopsis</Text>
        <Text style={styles.overview}>{movieDetail.overview}</Text>
      </View>
      <View style={styles.castContainer}>
        <Text style={styles.title}>Actors</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastCard actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cast}
        />
      </View>
    </View>
  );
}
