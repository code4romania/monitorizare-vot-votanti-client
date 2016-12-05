import { call, put, select } from 'redux-saga/effects';
import { getCitiesSuccess } from 'containers/Sesizari/actions';
import { countyId } from 'containers/Sesizari/selectors';
import request from 'utils/request';

export function* getAllCitiesPerCountry() {
  const countyIdValue = yield select(countyId());
  const requestURL = `http://portal-votanti-uat.azurewebsites.net/api/counties/${countyIdValue}/cities`;
  const cities = yield call(request, requestURL);
  if (cities.data) {
    yield put(getCitiesSuccess(cities.data));
  } else {
    // yield call(() => browserHistory.push('/notfound'));
  }
}

export default getAllCitiesPerCountry;
