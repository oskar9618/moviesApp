import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {PosterMovie} from '..';
import {Movie} from '../../types/mobiDB.interface';
import styles from './HorizontalSlider.styles';

type HorizontalSliderProps = {
  movies: Movie[];
  title?: string;
};

export default function HorizontalSlider({
  movies,
  title,
}: HorizontalSliderProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{...styles.container, height: title ? 260 : 240}}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}: any) => (
          <PosterMovie movie={item} height={200} width={140} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          padding: 10,
        }}
      />
    </View>
  );
}
