import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Gallery from 'react-native-image-gallery';
import {useSelector} from 'react-redux';
import {getPhotos} from '../selectors/Photos';

const GalleryScreen = () => {
  const photos = useSelector(getPhotos);
  return (
    <SafeAreaView style={styles.container}>
      <Gallery
        style={{flex: 1, backgroundColor: 'white'}}
        images={photos.map(photo => ({
          source: {
            uri: photo.urls.full,
          },
        }))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default GalleryScreen;
