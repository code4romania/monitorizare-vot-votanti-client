import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { incidentsLoaded, getCitiesSuccess } from './actions';
import { SHORT_INCIDENTS, GET_CITIES, SUBMIT_FORM } from './constants';
import { countyId, getImage } from './selectors';
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

export function* getAllCitiesPerCountry() {
  const countyIdValue = yield select(countyId());
  const requestURL = `http://portal-votanti-uat.azurewebsites.net/api/counties/${countyIdValue}/cities`;
  const citiesData = yield call(request, requestURL);
  if (citiesData.data) {
    yield put(getCitiesSuccess(citiesData.data));
  } else {
    // yield call(() => browserHistory.push('/notfound'));
  }
}

export function* citiesWatcher() {
  yield fork(takeLatest, GET_CITIES, getAllCitiesPerCountry);
}

export function* cities() {
  const watcher = yield fork(citiesWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export function* submitForm() {
  const image = yield select(getImage());
  const data = new FormData();
  data.firstName = 'Ion';
  data.lastName = 'Vasile';
  data.incidentType = '1';
  data.description = 'description';
  data.county_id = '2';
  data.city = '2';
  data.stationNumber = '3';
  data.fromStation = true;
  data.append('file', image);

  const options = {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    body: data,
  };

  const requestURL = 'http://portal-votanti-uat.azurewebsites.net/api/incidents';
  const citiesData = yield call(request, requestURL, options);
  if (citiesData.data) {
    // yield put(getCitiesSuccess(citiesData.data));
  } else {
    // yield call(() => browserHistory.push('/notfound'));
  }
}

export function* submitFormWatcher() {
  yield fork(takeLatest, SUBMIT_FORM, submitForm);
}

export function* form() {
  const watcher = yield fork(submitFormWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  shortIncidents,
  cities,
  form,
];

