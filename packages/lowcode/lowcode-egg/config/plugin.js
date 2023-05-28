'use strict';
const path = require('path');
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // security: false,
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mysql: {
    enable: false,
    package: 'egg-mysql',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  nacos: {
    enable: true,
    path: path.resolve(__dirname, '../lib/plugins/nacos'),
  },
  // pluginExample: {
  //   enable: true,
  //   path: path.resolve(__dirname, '../../egg-plugin-example'),
  // },
};
