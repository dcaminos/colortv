import React from 'react';
import {StyleSheet} from 'react-native';
import Gallery from 'react-native-image-gallery';

const GalleryC = ({images}) => {
  const getImageURL = image => {
    return image.url;
  };
  return (
    <Gallery
      style={{flex: 1, backgroundColor: 'black'}}
      images={images.map(getImageURL)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: '50%',
    height: 200,
  },
});

export default GalleryC;
