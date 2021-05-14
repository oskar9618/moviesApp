import React, {useContext, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import useMovies from '../../hooks/useMovies';
import {
  PosterMovie,
  HorizontalSlider,
  GradientBackground,
} from '../../components';
import styles from './Home.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {getImageColors} from '../../utils/getImageColors';
import {GradientContext} from '../../context/GradientContext';

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
  const {setColors} = useContext(GradientContext);

  const getSnapColors = async (index: number) => {
    const movie = nowPlayingMovies![index];
    const posterMovie = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primaryColor, secondaryColor] = await getImageColors(posterMovie);
    setColors({primaryColor, secondaryColor});
  };

  useEffect(() => {
    if (nowPlayingMovies?.length) {
      getSnapColors(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlayingMovies]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={35} />
      </View>
    );
  }

  return (
    <GradientBackground>
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
              onSnapToItem={index => getSnapColors(index)}
            />
          </View>
          <HorizontalSlider movies={popularMovies!} title="Most Popular" />
          <HorizontalSlider movies={topRateMovies!} title="Top Rate" />
          <HorizontalSlider movies={upcomingMovies!} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
