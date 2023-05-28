/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.backend_service_origin = 'http://localhost:10061';
  config.asset_service_origin = 'http://localhost:10044';
  config._lowcode_base_design_ = 'https://localhost:10060/design';
  config._lowcode_base_pkg_ = 'https://localhost:10060/pkg';
  return config
};
