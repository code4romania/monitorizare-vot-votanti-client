import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { incidentsLoaded, getCitiesSuccess, getPrecintsSuccess } from './actions';
import { SHORT_INCIDENTS, GET_CITIES, SUBMIT_FORM, GET_PRECINTS } from './constants';
import { countyId, getImage, cityId, getDescription, getToken, getIncidentId, getName, getPrenume, getPrecintId } from './selectors';
import request from 'utils/request';
import { browserHistory } from 'react-router';
import config from '../../api/config';

export function* getIncidents() {
  const requestURL = `${config.api.baseURL}/incidents`;

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
  const requestURL = `${config.api.baseURL}/counties/${countyIdValue}/cities`;
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

export function* getPrecintsPerCity() {
  const cityIdValue = yield select(cityId());
  const requestURL = `${config.api.baseURL}/${cityIdValue}/precincts`;
  const precintsData = yield call(request, requestURL);
  if (precintsData.data) {
    yield put(getPrecintsSuccess(precintsData.data));
  }
}

export function* precintsWatcher() {
  yield fork(takeLatest, GET_PRECINTS, getPrecintsPerCity);
}

export function* precints() {
  const watcher = yield fork(precintsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* submitForm() {
  const countyIdValue = yield select(countyId());

  const cityIdValue = yield select(cityId());
  const image = yield select(getImage());
  const getDescriptionValue = yield select(getDescription());
  const token = yield select(getToken());
  const firstName = yield select(getPrenume());
  const lastName = yield select(getName());
  const incidentId = yield select(getIncidentId());
  const precintId = yield select(getPrecintId());

  const formData = new FormData();
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('incident_type_id', incidentId);
  formData.append('description', getDescriptionValue);
  formData.append('county_id', countyIdValue);
  formData.append('city_id', cityIdValue);
  formData.append('precinct_id', precintId);
  formData.append('fromStation', true);
  formData.append('recaptchaResponse', token);
  formData.append('image', image);

  const requestURL = `${config.api.baseURL}/incidents`;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', requestURL, true);
  xhr.onreadystatechange = () => {
    if (xhr.status === 201) {
      browserHistory.push('/multumim');
    }
  };

  xhr.error = (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  };

  xhr.send(formData);
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
  precints,
  form,
];
