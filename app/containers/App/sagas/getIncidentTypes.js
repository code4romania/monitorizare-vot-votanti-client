import { call, put } from 'redux-saga/effects';
import { getIncidentTypesSuccess } from '../actions';
import request from 'utils/request';

export function* getIncidentTypes() {
  const requestURL = 'https://portal-votanti-uat.azurewebsites.net/api/incidents/types';
  const incidentTypes = yield call(request, requestURL);
  if (incidentTypes.data) {
    yield put(getIncidentTypesSuccess(incidentTypes.data));
  } else {
    // yield call(() => browserHistory.push('/notfound'));
  }
}

export default getIncidentTypes;
