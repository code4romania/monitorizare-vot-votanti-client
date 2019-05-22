import { call, put } from 'redux-saga/effects';
import { getCountiesSuccess } from '../actions';
// import { selectChoozId } from '../selectors';
import request from 'utils/request';

export function* getAllCounties() {
  const requestURL = 'https://portal-votanti-uat.azurewebsites.net/api/counties';
  const counties = yield call(request, requestURL);
  if (counties.data) {
    yield put(getCountiesSuccess(counties.data));
  } else {
    // yield call(() => browserHistory.push('/notfound'));
  }
}

export default getAllCounties;
