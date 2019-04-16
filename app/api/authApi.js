import * as api from './baseApi';

export default {
  login(payload) {
    return new Promise((resolve, reject) => api.post('/auth/login', payload, resolve, reject));
  },
};
