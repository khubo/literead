import { all } from 'redux-saga/effects';

import bookSaga from './books';

export default function*() {
  yield all([bookSaga()]);
}
