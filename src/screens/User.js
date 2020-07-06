import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {getPhotos} from '../selectors/Photos';
import {getCurrentUser} from '../selectors/Users';

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(getCurrentUser);
  const photos = useSelector(getPhotos);

  const goToGallery = () => {
    navigation.navigate('Gallery');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{user.name}</Text>
      <TouchableOpacity onPress={goToGallery}>
        {photos.map(photo => {
          return (
            <Image
              key={photo.id}
              style={styles.image}
              source={
                photo.urls.small !== null ? {uri: photo.urls.small} : null
              }
            />
          );
        })}
      </TouchableOpacity>
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

export default HomeScreen;
