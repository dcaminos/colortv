import {
  FETCH_PHOTOS_ERROR,
  FETCH_PHOTOS_PENDING,
  FETCH_PHOTOS_SUCCESS,
} from '../actions/Photos';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_PHOTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default photosReducer;
