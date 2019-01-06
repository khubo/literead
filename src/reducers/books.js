// book reducer
import { FETCHING_BOOKS, SET_BOOKS } from '../constants/actions';

const initialState = {
  books: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_BOOKS: {
      return {
        ...state,
        loading: true
      };
    }
    case SET_BOOKS: {
      return {
        ...state,
        books: payload.data,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
