import { call, put } from 'redux-saga/effects';
import { getCountiesSuccess } from '../actions';
import config from '../../../api/config';
import request from 'utils/request';

export function* getAllCounties() {
  const requestURL = `${config.api.baseURL}/counties`;
  const counties = yield call(request, requestURL);
  if (counties.data) {
    yield put(getCountiesSuccess(counties.data));
  }
}

export default getAllCounties;
