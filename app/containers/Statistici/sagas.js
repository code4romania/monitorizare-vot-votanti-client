import { takeLatest } from 'redux-saga';
import { take, call, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_STATS } from './constants';

export function* getStatsData() {
  const urls = ['http://portal-votanti-uat.azurewebsites.net/api/statistici/numar-observatori', 'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari', 'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari-judete',
    'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari-judet-top', 'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari-sectii', 'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari-deschidere-judete',
    'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari-deschidere-sectii', 'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari-numarare-judete', 'http://portal-votanti-uat.azurewebsites.net/api/statistici/sesizari-numarare-sectii',
  ];

  yield urls.map((url) => call(parallelFetch, url));

  function* parallelFetch(url) {
    try {
      let data = yield call(fetch, url);
      data = yield data.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
}

export function* getStatsWatcher() {
  yield fork(takeLatest, GET_STATS, getStatsData);
}

export function* getStats() {
  const watcher = yield fork(getStatsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getStats,
];
