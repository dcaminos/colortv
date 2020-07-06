import fetch from 'node-fetch';
import Unsplash, {toJson} from 'unsplash-js';
global.fetch = fetch;
export const FETCH_PHOTOS_PENDING = 'FETCH_PHOTOS_PENDING';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR';

const APP_ACCESS_KEY =
  'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5';
const APP_SECRET_KEY =
  'a5ab4ed2efdc772dca8d5636a26c0d897907df38cd92baa9067e57093d9596b5';

const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
  secret: APP_SECRET_KEY,
});

function fetchPhotosPending() {
  return {
    type: FETCH_PHOTOS_PENDING,
  };
}

function fetchPhotosSuccess(data) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: data,
  };
}

function fetchPhotosError(error) {
  return {
    type: FETCH_PHOTOS_ERROR,
    payload: error,
  };
}

export const fetchPhotosAction = ids => {
  return async dispatch => {
    dispatch(fetchPhotosPending());

    Promise.all(
      ids.map(id => {
        return unsplash.photos.getPhoto(id).then(toJson);
      }),
    )
      .then(photos => {
        dispatch(fetchPhotosSuccess(photos));
      })
      .catch(error => {
        dispatch(fetchPhotosError(error));
      });
  };
};
