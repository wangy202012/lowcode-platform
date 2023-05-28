const axios = require("axios");
module.exports = (options, app) => {
  const BACKEND_SERVICE_PREFIX = "/__api";
  const MOCK_SERVICE_PREFIX = "/__lc_api";
  const UPLOAD_PREFIX = "/api/uploadFile";


  return async function (ctx, next) {
    let url = ctx.url;
    const backend_service_origin = ctx.app.config.backend_service_origin;

    if (url.startsWith(BACKEND_SERVICE_PREFIX)) {
      const ret = await axios({
        url: backend_service_origin + url.slice(BACKEND_SERVICE_PREFIX.length),
        method: ctx.method,
        data: ctx.request.body,
        headers: ctx.request.headers,
      });
      if (ret.status === 200) {
        ctx.body = ret.data;
        return;
      }
    }

    if (url.startsWith(MOCK_SERVICE_PREFIX)) {
      const targetUrl = url.slice(MOCK_SERVICE_PREFIX.length);
      // 过滤掉查询查询字符串
      const pathname = new URL(`http://localhost${targetUrl}`).pathname;
      const params = {
        url: backend_service_origin + "/mocks/getData",
        method: "POST",
        data: {
          path: pathname,
        },
        headers: ctx.request.headers,
      };
      const ret = await axios(params);
      if (ret.status === 200) {
        let content = ret.data.data;
        ctx.body = JSON.parse(decodeURIComponent(content));
        return;
      }
    }

    if (url.startsWith(UPLOAD_PREFIX)) {
      await next();
      if (ctx.body && ctx.body.success) {
        const data = ctx.body.data;
        // 上传完成，保存到数据库
        const uploadAsset = {
          assetName: data.name,
          assetPath: data.path,
        };
        const params = {
          url: backend_service_origin + "/asset",
          method: "POST",
          data: uploadAsset,
          // 请求头中有上传字段，不能要
          // headers: ctx.request.headers
        };
        const ret = await axios(params);
        if (ret.status === 200) {
          data.save = true;
        }
      }
      return;
    }
    return next();
  };
};
