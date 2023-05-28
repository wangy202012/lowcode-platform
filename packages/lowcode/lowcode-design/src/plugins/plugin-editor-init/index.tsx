import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { injectAssets } from '@alilc/lowcode-plugin-inject';
import originAssets from '../../services/assets_simple.js';
import { getPageSchema } from '../../services/index';
import { getLowcodeAntdVersion } from '../../api/index';

let assets = originAssets;

const replaceAssetRoot = (assets: any) => {
  const str = JSON.stringify(assets);
  //@ts-ignore
  const target = window.lcAppAssetRoot !== '_lcAppAssetRoot_' ? window.lcAppAssetRoot : '';
  console.log('被替换的资源前缀：', target);
  const newStr = str.replace(/ASSET_ROOT/g, target);
  return JSON.parse(newStr);
};
const replaceVersion = (assets: any, pkgName: string, version: string) => {
  console.log('replaceversion');
  const pkg = assets.packages.find((item: any) => item.package === pkgName);
  if (!pkg) return;

  const comp = assets.components.find((item: any) => item.npm.package === pkgName);

  const newPkg = JSON.parse(JSON.stringify(pkg).replace(/VERSION_LOCATION/g, version));

  const newComp = JSON.parse(JSON.stringify(comp).replace(/VERSION_LOCATION/g, version));

  assets.packages = [...assets.packages.filter((item: any) => item.package !== pkgName), newPkg];
  assets.components = [
    ...assets.components.filter((item: any) => item.npm.package !== pkgName),
    newComp,
  ];

  return assets;
};
const RB_ECHARTS_LOWCODE_MATERIALS = 'rb-echarts-lowcode-materials';
const EditorInitPlugin = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    async init() {
      // debugger
      const { material, project, config } = ctx;
      const scenarioName = options['scenarioName'];
      const scenarioDisplayName = options['displayName'] || scenarioName;
      const scenarioInfo = options['info'] || {};
      // 保存在config中用于引擎范围其他插件使用
      config.set('scenarioName', scenarioName);
      config.set('scenarioDisplayName', scenarioDisplayName);
      config.set('scenarioInfo', scenarioInfo);

      // let echartsList = [];
      // try {
      //   echartsList = await getLowcodeAntdVersion(RB_ECHARTS_LOWCODE_MATERIALS);
      // } catch (e) {
      //   console.error('egg请求失败');
      // }
      // // 后端失败，可以使用默认版本
      // const echartsLastVersion = echartsList?.data?.[0] || '1.0.3';

      // 物料先前端写死，后续通过页面来管理
      // const echartsLastVersion = '1.0.4';
      // replaceVersion(assets, RB_ECHARTS_LOWCODE_MATERIALS, echartsLastVersion);

      // 替换掉占位符
      // assets = replaceAssetRoot(assets);

      // 设置物料描述
      const as = await injectAssets(assets);
      await material.setAssets(as);
      const schema = await getPageSchema(scenarioName);

      const components = as.components.map((item: any) => item.componentName);
      console.log('[所有组件]:', components, as.components);
      console.log('[页面资产]:', assets);
      // 加载 schema
      project.openDocument(schema);
    },
  };
};
EditorInitPlugin.pluginName = 'EditorInitPlugin';
EditorInitPlugin.meta = {
  preferenceDeclaration: {
    title: '保存插件配置',
    properties: [
      {
        key: 'scenarioName',
        type: 'string',
        description: '用于localstorage存储key',
      },
      {
        key: 'displayName',
        type: 'string',
        description: '用于显示的场景名',
      },
      {
        key: 'info',
        type: 'object',
        description: '用于扩展信息',
      },
    ],
  },
};
export default EditorInitPlugin;
