import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button } from '@alifd/next';
 

// 保存功能示例
const BackListPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
 
      const goBack = ()=>{
        window.location.href = window.location.origin + "/#/app"
      }
      skeleton.add({
        name: 'backList',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button onClick={() => goBack()}>
            返回列表
          </Button>
        ),
      });
    },
  };
}
BackListPlugin.pluginName = 'BackListPlugin';
BackListPlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default BackListPlugin;