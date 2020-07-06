import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const LoadingIcon = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const updateSearch = () => {
    onSearch(searchText);
  };

  return (
    <View>
      <TextInput
        placeholder="Search by name"
        onChangeText={search => setSearchText(search)}
        style={styles.searchBar}
        onSubmitEditing={updateSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 24,
    margin: 10,

    height: 50,
    backgroundColor: 'white',
  },
});

export default LoadingIcon;
