import axios from 'axios';
import config from './config';

const getConfig = (requiresAuthorization) =>
  ({
    baseURL: config.api.baseURL,
    timeout: 10000,
    headers: {
      'Cache-Control': 'no-cache',
      Authorization: requiresAuthorization ? `Bearer {${sessionStorage.getItem('token')}}` : '',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

const handleError = (error, errorCb) => {
  if (error.response) {
    errorCb(error.response.data);
  } else {
    errorCb('Unhandled error');
  }
};

export const get = (url, payload, cb, errorCb) => {
  const baseApi = axios.create(getConfig());
  const promise = baseApi.get(url);
  promise.then((response) => {
    cb(response.data);
  }).catch(
    (err) => {
      handleError(err, errorCb);
    }
  );
};

export const post = (url, payload, cb, errorCb) => {
  const baseApi = axios.create(getConfig(true));
  const promise = baseApi.post(url, payload);
  promise.then((response) => {
    cb(response.data);
  })
    .catch((err) => {
      handleError(err, errorCb);
    });
};

export const put = (url, payload, cb, errorCb) => {
  const baseApi = axios.create(getConfig(true));
  const promise = baseApi.put(url, payload);
  promise.then((response) => {
    cb(response.data);
  })
    .catch((err) => {
      handleError(err, errorCb);
    });
};
