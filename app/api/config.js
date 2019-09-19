
const api = {};

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
  case 'docker':
    api.baseURL = 'http://localhost:3200/api';
    break;
  default:
    api.baseURL = 'http://localhost:3200/api';
}

module.exports = {
  api,
};
