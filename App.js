import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import GalleryScreen from './src/screens/Gallery';
import HomeScreen from './src/screens/Home';
import UserScreen from './src/screens/User';

const Stack = createStackNavigator();

const App = () => {
  const headerStyle = {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  };

  const homeOptions = ({navigation}) => ({
    title: 'Search',
    headerStyle: headerStyle,
  });

  const userOptions = () => ({
    title: 'User',
    headerStyle: headerStyle,
  });

  const galleryOptions = () => ({
    title: 'Gallery',
    headerStyle: headerStyle,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator keyboardHandlingEnabled={true}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={homeOptions}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={userOptions}
          />
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={galleryOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
