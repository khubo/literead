import { SEARCH_BOOKS } from '../constants/actions';

export const searchBooks = books => ({
  type: SEARCH_BOOKS,
  payload: {
    data: books
  }
});
