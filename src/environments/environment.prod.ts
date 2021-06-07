import packageInfo from '../../package.json';

export const environment = {
  production: true,
  NAME: packageInfo.name,
  VERSION: packageInfo.version,
  REST_USER: 'https://betca-tpv-user.herokuapp.com',
  REST_CORE: 'https://betca-tpv-core.herokuapp.com',
  REST_CUSTOMER_SUPPORT: 'https://betca-tpv-customer-support.herokuapp.com'
};
