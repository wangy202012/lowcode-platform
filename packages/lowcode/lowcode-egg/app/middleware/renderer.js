const axios = require("axios");
const md5 = require("js-md5");
const getFileList = (data) => {
  const regEx = new RegExp(`href=\"(.*?)\"`);
  let str = data;
  const list = [];
  while (str.length > 0) {
    let ret = regEx.exec(str);
    if (ret === null) break;
    list.push(ret[1]);
    str = str.slice(ret.index + 1);
  }
  return list;
};
module.exports = (options, app) => {
  const RENDERER_FILE_PREFIX = "/__api/renderer/pubPath/";
  return async function (ctx, next) {

    let url = ctx.url;
    const asset_service_origin = ctx.app.config.asset_service_origin;
    const artifacts_url = asset_service_origin + "/artifacts/";
    
    // 开发模式数据不从nginx中获取
    if (
      url.startsWith(RENDERER_FILE_PREFIX) &&
      ctx.request.headers.lowcode_mode !== "dev"
    ) {
      const currentFile = url.slice(RENDERER_FILE_PREFIX.length);
    
 
      // 先查看制品目录下有没有文件
      const ret = await axios.get(artifacts_url);
      if (ret.status === 200 && ret.data) {
        const fileList = getFileList(ret.data);
        // 去掉hash后缀
        const nameList = fileList.map((item) => item.slice(0, -22));
        const index = nameList.indexOf(currentFile);
        if (index !== -1) {
          const file = fileList[index];
          ctx.logger.info("匹配到文件了：", file,nameList,fileList,currentFile,index);

          const filePath = artifacts_url + file;
          const result = await axios.get(filePath);
          if (result.status === 200) {
            const errInfo = {
              code: -1,
              message: `应用[${nameList[index]}]的制品包已经被修改`,
              data:null
            };
            try {
              // 文件内容校验
              const hash = md5(JSON.stringify(result.data)).slice(20);
              if (file.includes(hash)) {
                ctx.body = result.data;
              } else {
                ctx.body = errInfo;
              }
            } catch (e) {
              ctx.body = errInfo;
            }

            // 结束请求
            return;
          }
        }
      }
    }

    return next();
  };
};
