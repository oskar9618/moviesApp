/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactNode, useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../../context/GradientContext';
import useFade from '../../hooks/useFade';
import styles from './GradientBackground.styles';

type GradientBackgroundProps = {
  children: ReactNode;
};
export default function GradientBackground({
  children,
}: GradientBackgroundProps) {
  const {colors, prevColors, setPrevColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevColors.primaryColor, prevColors.secondaryColor, '#fff']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.7, y: 0.7}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primaryColor, colors.secondaryColor, '#fff']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.7, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
}
