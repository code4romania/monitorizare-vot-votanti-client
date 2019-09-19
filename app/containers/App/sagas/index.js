import { fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_COUNTIES, GET_INCIDENT_TYPES, LOGIN } from '../constants';

import getCounties from './getCounties';
import getIncidentTypes from './getIncidentTypes';
import login from './login';

export function* rootSaga() {
  yield fork(takeEvery, GET_COUNTIES, getCounties);
  yield fork(takeEvery, GET_INCIDENT_TYPES, getIncidentTypes);
  yield fork(takeEvery, LOGIN, login);
}

export default [
  rootSaga,
];
