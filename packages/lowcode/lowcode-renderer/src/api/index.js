import utils from "./utils";


export const getPageContent = (appId) => {
  // react应用配置代理太难，目前使用这种笨方法
  if (localStorage.getItem('lowcode_mode') === "dev") {
    return utils.get("http://43.137.18.227:10061/renderer/" + appId);
  }
  return utils.get("/__api/renderer/" + appId);
};


export const getPageContentByPath = (appPath) => {
  // react应用配置代理太难，目前使用这种笨方法
  if (localStorage.getItem('lowcode_mode') === "dev") {
    return utils.get("http://43.137.18.227:10061/renderer/" + appPath);
  }
  return utils.get("/__api/renderer/pubPath/" + appPath);
};
