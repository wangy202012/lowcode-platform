/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.backend_service_origin = 'http://lowcode-manager:10061';
  config.asset_service_origin = 'http://lowcode-nginx:10044';
  // 这个是浏览器访问，不走docker的域名,本地调试用localhost
  config._lowcode_base_design_ = '/design';
  config._lowcode_base_pkg_ = '/pkg';
  // config.HOST = 'gp1.sa.lycc.qihoo.net';
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1653052886912_9992';

  config.cluster = {
    listen:{
      port: 10062
    }
  }
  // add your middleware config here
  config.middleware = [
    "renderer",
    "proxy"
  ];

  config.multipart = {
    mode: 'file',
    fileSize:'100mb',
    // 主要是图片和html两类资源
    whitelist:[
      '.jpg','.jpeg','.png','.html','.svg'
    ]
  };

  config.pluginExample = {
    name: 'test',
    auth: 'robin',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [],
  };
  config.logger = {
    level: 'INFO'
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT,  POST, DELETE, PATCH',
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  // config.nacos = {
  //   serverAddr: 'gp1.sa.lycc.qihoo.net:8848',
  //   configs: {
  //     microAppsCfg: {
  //       dataId: 'microApps',
  //       group: 'DEFAULT_GROUP'
  //     }
  //   }
  // }
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: 'localhost',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: '12345678',
  //     // 数据库名
  //     database: 'FRC_DB',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
