import ImageColors from 'react-native-image-colors';

export const getImageColors = async (image: string) => {
  const imageColors = await ImageColors.getColors(image, {});
  let primaryColor;
  let secondayColor;

  if (imageColors.platform === 'android') {
    primaryColor = imageColors.dominant;
    secondayColor = imageColors.average;
  } else {
    primaryColor = imageColors.primary;
    secondayColor = imageColors.secondary;
  }

  return [primaryColor, secondayColor];
};
