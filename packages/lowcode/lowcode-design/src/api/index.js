import utils from "./utils";
import mock from './mock/index'
import querystring from 'querystring'
import _ from 'lodash'
const isMock = window._env_ === 'mock'
export const getList = (p) => {
  const params = _.cloneDeep(p)
  if(params.current){
    params.pageIndex = params.current;
    delete params.current
  }

  if (isMock) return Promise.resolve(mock.list)
  return utils.get("/__api/app/list?" + querystring.stringify(params));
};

export const getAppById = (id) => {
  return utils.get(`/__api/app/${id}`);
};

export const getAppLock = (appId)=>{
  return utils.get('/__api/content/lock/' + appId)
}

export const getLogsList = (p)=>{
  const params = _.cloneDeep(p)
  if(params.current){
    params.pageIndex = params.current;
    delete params.current
  }
  // if (isMock) return Promise.resolve(mock.list)
  return utils.post("/__api/logger/list?" ,params);
}

export const getLogs2List = (p)=>{
  const params = _.cloneDeep(p)
  if(params.current){
    params.pageIndex = params.current;
    delete params.current
  }
  // if (isMock) return Promise.resolve(mock.list)
  return utils.post("/__api/logger2/list?" ,params);
}

export const getPathEnum = ()=>{
  return utils.get('/__api/common/getEnums/AppLoggerPath')
}

export const createApp = (app) => {
  return utils.post("/__api/app", app);
};


export const copyApp = (app) => {
  return utils.post("/__api/app/copy/"+app.appId);
};

export const updateApp = (id, app) => {
  return utils.put("/__api/app/" + id, app);
};




export const deleteApp = (id) => {
  return utils.del("/__api/app/" + id);
};


export const getSchema = (id)=>{
  return utils.get('/__api/content/' + id)
}


export const getRecordList = (params)=>{
  return utils.post('/__api/record/list',params)
}

export const updateSchema = (id,content,ext={})=>{
  const params = {
    appId:id,
    content,
    ...ext
  }
  return utils.put("/__api/content/" + id,params)
}

export const getUsername = ()=>{
  return utils.get("/__api/common/getUsername")
}

export const getLowcodeAntdVersion = (pkgName)=>{
  return utils.get('/api/getLowcodeAntdVersion/'+pkgName)
}



export const getUserList = ()=>{
  return utils.get('/passport/authorities/list')
}


export const getMockList=() =>{
  return utils.get('/__api/mocks/list')
}


export const createMock = (mock)=>{
  return utils.post("/__api/mocks", mock);
}

export const deleteMock = (id)=>{
  return utils.del("/__api/mocks/" + id);
}

export const updateMock = (id,mock)=>{
  return utils.put("/__api/mocks/" + id, mock);
}

export const getAssetList=(params) =>{
  return utils.get('/__api/asset/list?' + querystring.stringify(params))
}

export const getUsedFiles =() =>{
  return utils.get('/__api/asset/getUsedFiles')
}
