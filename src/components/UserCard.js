import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchPhotosAction} from '../actions/Photos';
import {setCurrentUser} from '../actions/Users';

const UserCard = ({user}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goToArticle = () => {
    dispatch(setCurrentUser(user));
    dispatch(fetchPhotosAction(user.photos.map(p => p.id)));

    navigation.navigate('User');
  };

  const urlToImage = user.profile_image.medium;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={goToArticle}>
        <Text style={styles.title}>{user.name}</Text>
        <Image
          style={styles.image}
          source={urlToImage !== null ? {uri: urlToImage} : null}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: '50%',
    height: 200,
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    height: '100%',
  },

  title: {
    padding: 10,
    paddingTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  image: {
    width: '100%',
    flexGrow: 1,
    resizeMode: 'cover',
  },
});

export default UserCard;

/*

*/
