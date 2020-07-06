import fetch from 'node-fetch';
import Unsplash, {toJson} from 'unsplash-js';
global.fetch = fetch;
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const PER_PAGE = 10;
const APP_ACCESS_KEY =
  'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5';
const APP_SECRET_KEY =
  'a5ab4ed2efdc772dca8d5636a26c0d897907df38cd92baa9067e57093d9596b5';

const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
  secret: APP_SECRET_KEY,
});

function fetchUsersPending() {
  return {
    type: FETCH_USERS_PENDING,
  };
}

function fetchUsersSuccess(data, page) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      data,
      page,
    },
  };
}

function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
}

export const fetchUsersAction = (words, page) => {
  return async dispatch => {
    dispatch(fetchUsersPending());

    unsplash.search
      .users(words, page, PER_PAGE)
      .then(toJson)
      .then(json => {
        dispatch(fetchUsersSuccess(json.results, page));
      })
      .catch(error => {
        dispatch(fetchUsersError(error));
      });
  };
};

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
}
