'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // egg请求必须以api打头！！！其他开头会被定位前端或者java后端
  router.get('/api/getLowcodeAntdVersion/:pkgName', controller.home.getVersion);
  router.get('/api/mockTableData', controller.home.mockTableData);
  router.post('/api/uploadFile', controller.home.uploadFile);
  router.get('/list', controller.home.list);
  router.post('/add', controller.home.add);
  router.get('/user/findByParamId/:userId', controller.home.findByParamId);
  router.get('/user/findByQueryId', controller.home.findByQueryId);
  router.get('/getCode', controller.home.getCode);
  router.get('/testCors', controller.home.testCors);
  router.get('/testMysql', controller.home.testMysql);
  router.get('/testPost', controller.home.testPost);

};
