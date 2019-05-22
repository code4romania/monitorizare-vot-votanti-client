import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { incidentsLoaded, filtersLoaded } from './actions';
import { INCIDENTS, FILTER } from './constants';
import { getNextPage, activeMap, countyId, typeId } from './selectors';
import request from 'utils/request';

export function* getIncidents() {
  const nextPage = yield select(getNextPage());
  const requestURL = `https://portal-votanti-uat.azurewebsites.net/api/incidents?limit=20&page=${nextPage}`;

  try {
    const incidentsResponse = yield call(request, requestURL);
    yield put(incidentsLoaded(incidentsResponse));
  } catch (err) {
    // to do when failed
  }
}

export function* getIncidentsWatcher() {
  yield fork(takeLatest, INCIDENTS, getIncidents);
}

export function* incidents() {
  const watcher = yield fork(getIncidentsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* newFilter() {
  const country = yield select(activeMap());
  const county = yield select(countyId());
  const type = yield select(typeId());

  const requestURL = `https://portal-votanti-uat.azurewebsites.net/api/incidents?status=Approved&type=${type}&map=${country}&county=${county}`;

  try {
    const filters = yield call(request, requestURL);
    yield put(filtersLoaded(filters));
  } catch (err) {
    // to do when failed
  }
}

export function* filterWatcher() {
  yield fork(takeLatest, FILTER, newFilter);
}

export function* filter() {
  const watcher = yield fork(filterWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  incidents,
  filter,
];
