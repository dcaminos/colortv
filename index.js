/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import {name as appName} from './app.json';
import photosReducer from './src/reducers/Photos';
import usersReducer from './src/reducers/Users';

const rootReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
