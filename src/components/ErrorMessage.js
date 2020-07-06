import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ErrorMessage = ({error}) => {
  return (
    <View style={styles.errorMessage}>
      <Text style={styles.banner}>
        {'Oops.. An unexpected error occurred:'}
      </Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },

  banner: {
    color: 'red',
  },

  error: {
    color: 'red',
    marginVertical: 20,
  },
});

export default ErrorMessage;
