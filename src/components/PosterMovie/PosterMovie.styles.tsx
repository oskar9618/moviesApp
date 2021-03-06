import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 8,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.84,
    elevation: 5,
  },
  image: {
    flex: 1,
    borderRadius: 30,
  },
});

export default styles;
