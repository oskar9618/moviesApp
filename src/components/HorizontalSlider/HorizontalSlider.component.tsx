import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {PosterMovie} from '..';
import {Movie} from '../../types/mobiDB.interface';
import styles from './HorizontalSlider.styles';

type HorizontalSliderProps = {
  movies: Movie[];
  title: string;
};

export default function HorizontalSlider({
  movies,
  title,
}: HorizontalSliderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}: any) => (
          <PosterMovie movie={item} height={200} width={140} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
