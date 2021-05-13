import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CastCard.styles';

type CastProps = {
  actor: any;
};

export default function CastCard({actor}: CastProps) {
  const actorPoster = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri: actorPoster}} style={styles.image} />
      )}
      <View>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
}
