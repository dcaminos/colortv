import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsersAction} from '../actions/Users';
import ErrorMessage from '../components/ErrorMessage';
import SearchInput from '../components/SearchInput';
import UserCard from '../components/UserCard';
import {getUsersData, getUsersStatus} from '../selectors/Users';

const HomeScreen = () => {
  const [page, setPage] = useState(1);
  const [words, setWords] = useState('');

  const status = useSelector(getUsersStatus);
  const data = useSelector(getUsersData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (words.length > 1 && page > 0) {
      dispatch(fetchUsersAction(words, page));
    }
  }, [words, page]);

  const search = searchText => {
    setWords(searchText);
    setPage(1);
  };

  const _handleLoadMore = () => {
    setPage(page + 1);
  };

  if (status.error !== null) {
    return <ErrorMessage error={status.error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => <UserCard key={item.id} user={item} />}
          onEndReached={_handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
      </View>
      <SearchInput onSearch={search} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
});

export default HomeScreen;
