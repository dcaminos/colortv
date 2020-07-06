import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingIcon = () => {
  return (
    <View style={styles.loadingIcon}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingIcon;
