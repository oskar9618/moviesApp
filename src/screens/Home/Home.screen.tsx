import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import useMovies from '../../hooks/useMovies';
import {PosterMovie, HorizontalSlider} from '../../components';
import styles from './Home.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

export default function HomeScreen() {
  const {
    nowPlayingMovies,
    popularMovies,
    topRateMovies,
    upcomingMovies,
    isLoading,
  } = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" />
      </View>
    );
  }

  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={{marginTop: top + 20}}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={nowPlayingMovies!}
            renderItem={({item}: any) => <PosterMovie movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider movies={popularMovies!} title="Most Popular" />
        <HorizontalSlider movies={topRateMovies!} title="Top Rate" />
        <HorizontalSlider movies={upcomingMovies!} title="Upcoming" />
      </View>
    </ScrollView>
  );
}
