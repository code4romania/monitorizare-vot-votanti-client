import * as api from './baseApi';

export default {
  getReports(cb, errorCb) {
    return api.get('/reports', {}, cb, errorCb);
  },
};
