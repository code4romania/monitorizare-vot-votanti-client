import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { incidentsLoaded } from './actions';
import { SHORT_INCIDENTS } from './constants';

import request from 'utils/request';

export function* getIncidents() {
  const requestURL = 'http://portal-votanti-uat.azurewebsites.net/api/incidents';

  try {
    const incidentsResponse = yield call(request, requestURL);
    yield put(incidentsLoaded(incidentsResponse));
  } catch (err) {
    // to do when failed
  }
}

export function* getIncidentsWatcher() {
  yield fork(takeLatest, SHORT_INCIDENTS, getIncidents);
}

export function* shortIncidents() {
  const watcher = yield fork(getIncidentsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  shortIncidents,
];
