import * as api from './baseApi';

export default {
  login(cb, errorCb, payload) {
    return api.post('/auth/login', payload, cb, errorCb);
  },
};
