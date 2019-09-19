import * as api from './baseApi';

export default {
  getCounties(cb, errorCb) {
    return api.get('/counties', {}, cb, errorCb);
  },
};
