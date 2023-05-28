import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { event } from '@alilc/lowcode-engine';
import { Button, SplitButton } from '@alifd/next';
import './index.scss';

import { saveSchema } from '../../services/index';
import { useEffect, useState } from 'react';

const ShowInfo = () => {
  const [isMgr, setIsMgr] = useState(false);
  const [lockOwner, setLockOwner] = useState('0');
  useEffect(() => {
    event.on('common:app-is-mgr', (data) => {
      if (data.isMgr !== isMgr) setIsMgr(data.isMgr);
      if (data.lockOwner !== lockOwner) setLockOwner(data.lockOwner);
    });
  }, []);
  const getMsg = ()=>{
    if(!isMgr) return "非管理员不可保存/预览"
    if(lockOwner!=="0") return `当前页面被用户(${lockOwner})编排，请稍后再试`
    return ""
  }

  return <div className="show-info-plugin-container" style={{color:'#d63737'}}>{getMsg()}</div>;
};

// 保存功能示例
const ShowInfoPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, hotkey, config } = ctx;
      const scenarioName = config.get('scenarioName');

      skeleton.add({
        name: 'showInfo',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'center',
        },
        content: (
          // <Button onClick={() => saveSchema(scenarioName)}>
          //   保存
          // </Button>
          <ShowInfo />
        ),
      });

      hotkey.bind('command+s', (e) => {
        e.preventDefault();
        saveSchema(scenarioName);
      });
    },
  };
};
ShowInfoPlugin.pluginName = 'ShowInfoPlugin';
ShowInfoPlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default ShowInfoPlugin;
