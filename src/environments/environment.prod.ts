import packageInfo from '../../package.json';

export const environment = {
  production: true,
  NAME: packageInfo.name,
  VERSION: packageInfo.version,
  REST_USER: 'https://beetle-app-frontend.herokuapp.com',
  REST_CORE: 'https://beetle-app-frontend.herokuapp.com',
  REST_CUSTOMER_SUPPORT: 'https://beetle-app-frontend.herokuapp.com'
};
