import { call, put } from 'redux-saga/effects';
import { getIncidentTypesSuccess } from '../actions';
import request from 'utils/request';
import config from '../../../api/config';

export function* getIncidentTypes() {
  const requestURL = `${config.api.baseURL}/incidents/types`;
  const incidentTypes = yield call(request, requestURL);
  if (incidentTypes.data) {
    yield put(getIncidentTypesSuccess(incidentTypes.data));
  } else {
    // yield call(() => browserHistory.push('/notfound'));
  }
}

export default getIncidentTypes;
