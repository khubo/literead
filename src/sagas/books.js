import { SEARCH_BOOKS, FETCHING_BOOKS, SET_BOOKS } from '../constants/actions';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import pick from 'lodash.pick';

import { BooksApi } from '../api';

function* searchBooks({ payload }) {
  yield put({ type: FETCHING_BOOKS });
  const data = yield call(BooksApi.search, payload.data);
  const books = data.items
    .map(book => pick(book, ['id', 'volumeInfo']))
    .map(({ id, volumeInfo }) => ({
      id,
      ...volumeInfo
    }));

  yield put({
    type: SET_BOOKS,
    payload: {
      data: books
    }
  });
}

export default function* watcherSaga() {
  yield all([yield takeLatest(SEARCH_BOOKS, searchBooks)]);
}
