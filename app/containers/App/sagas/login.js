import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import authApi from '../../../api/authApi';

function loginApi(data) {
  return authApi
    .login(data.credentials)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
export function* login(data) {
  const { response, error } = yield loginApi(data);
  if (response) {
    /*
    jwt data is not that useful... TODO?
    {
      typ: "JWT",
      alg: "HS256"
      }.
      {
      sub: 8,
      iss: "http:\/\/portal-votanti-uat.azurewebsites.net\/api\/auth\/login",
      iat: 1550947514,
      exp: 1550951114,
      nbf: 1550947514,
      jti: "a8a862b0cf2f786d61caa77ea88bd308"
      }.
    */
    yield put({ type: 'AUTHENTICATION_SUCCESFUL', response });
    yield put(push('/admin'));
  } else {
    yield put({ type: 'AUTHENTICATION_FAILED', error });
  }
}

export default login;
