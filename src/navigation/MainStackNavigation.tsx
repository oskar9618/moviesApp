import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MovieDetailScreen} from '../screens';
import {Movie} from '../types/mobiDB.interface';

export type NavigationParams = {
  Home: undefined;
  MovieDetail: Movie;
};
const Stack = createStackNavigator<NavigationParams>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
