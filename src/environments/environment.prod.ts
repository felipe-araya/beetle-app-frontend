import packageInfo from '../../package.json';

export const environment = {
  production: true,
  NAME: packageInfo.name,
  VERSION: packageInfo.version,
  REST_USER: 'http://beetle-app-backend.herokuapp.com',
  REST_CORE: 'http://beetle-app-backend.herokuapp.com',
  REST_CUSTOMER_SUPPORT: 'http://beetle-app-backend.herokuapp.com'
};
