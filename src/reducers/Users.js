import {
  FETCH_USERS_ERROR,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  SET_CURRENT_USER,
} from '../actions/Users';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  currentUser: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        data:
          action.payload.page === 1
            ? Array.from(action.payload.data)
            : [...state.data, ...action.payload.data],
        isLoading: false,
        error: null,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default usersReducer;
