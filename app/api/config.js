var path = require('path');

var api = {};

switch (process.env.NODE_ENV) {
  case 'development':
    api.baseURL = 'https://portal-votanti-uat.azurewebsites.net/api';
    break;
  case 'testing':
    api.baseURL = 'https://portal-votanti-uat.azurewebsites.net/api';
    break;
  case 'production':
    api.baseURL = 'https://portal-votanti-uat.azurewebsites.net/api';
    break;
}

module.exports = {
  api: api
}
