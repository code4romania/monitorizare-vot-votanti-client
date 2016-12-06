import { fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_COUNTIES, GET_CITIES, GET_INCIDENT_TYPES } from '../constants';

import getCounties from './getCounties';
import getCities from './getCities';
import getIncidentTypes from './getIncidentTypes';

export function* rootSaga() {
  yield fork(takeEvery, GET_COUNTIES, getCounties);
  yield fork(takeEvery, GET_CITIES, getCities);
  yield fork(takeEvery, GET_INCIDENT_TYPES, getIncidentTypes);
}

export default [
  rootSaga,
];
