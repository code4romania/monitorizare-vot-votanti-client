import { takeLatest } from 'redux-saga';
import { take, call, fork, cancel, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_STATS } from './constants';
import request from 'utils/request';
import { statsLoaded } from './actions';
import config from '../../api/config';


export function* getStatsData() {
  const requestURL = `${config.api.baseURL}/reports`;

  try {
    const stats = yield call(request, requestURL);
    yield put(statsLoaded(stats));
  } catch (err) {
    // to do when failed
  }
}

export function* getStatsWatcher() {
  yield fork(takeLatest, GET_STATS, getStatsData);
}

export function* getStats() {
  const watcher = yield fork(getStatsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getStats,
];
