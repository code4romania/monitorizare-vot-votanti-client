import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { incidentsLoaded, filtersLoaded } from './actions';
import { GET_INCIDENTS, FILTER } from './constants';
import { getNextPage, activeMap, countyId, typeId } from './selectors';
import request from '../../utils/request';
import config from '../../api/config';

export function* getNextIncidents(data, pageNumber) {
  const status = data.status;
  let nextPage = yield select(getNextPage());
  if (pageNumber != null) {
    nextPage = pageNumber;
  }
  let requestURL = `${config.api.baseURL}/incidents?limit=20&page=${nextPage}`;
  if (status != null) {
    requestURL += `&status=${status}`;
  }

  try {
    const incidentsResponse = yield call(request, requestURL);
    yield put(incidentsLoaded(incidentsResponse, status));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error while setting data', err);
  }
}

export function* getIncidents(data) {
  yield call(getNextIncidents, data, 0);
}
export function* getIncidentsWatcher() {
  yield fork(takeEvery, GET_INCIDENTS, getIncidents);
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

  const requestURL = `${config.api.baseURL}/incidents?status=Approved&type=${type}&map=${country}&county=${county}`;

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
