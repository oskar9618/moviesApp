import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigation';
import {GradientProvider} from './src/context/GradientContext';

export default function App() {
  return (
    <NavigationContainer>
      <GradientProvider>
        <MainStackNavigator />
      </GradientProvider>
    </NavigationContainer>
  );
}
