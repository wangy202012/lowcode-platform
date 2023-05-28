import React, { useEffect, useRef, useState } from 'react';
import design from './design';
import { event } from '@alilc/lowcode-engine';
import utils from '../../utils';
import { getList, getAppLock } from '../../api';
function Design() {
  const globalInfo = useRef({
    isMgr: false,
    lockOwner: '0',
  });

  const queryIsMgr = () => {
    const appId = utils.getAppId();
    getList({ appId }).then((rst) => {
      if (rst.code === 0 && Array.isArray(rst?.data?.list) && rst.data.list.length === 1) {
        const appInfo = rst.data.list[0];
        const ret = (appInfo.managers || '').split(',').includes(window.userName);
        globalInfo.current.isMgr = ret;
      }
    });
  };

  const queryLockOwner = () => {
    const appId = utils.getAppId();
    getAppLock(appId).then((rst) => {
      if (rst.code === 0 && rst.data !== globalInfo.current.lockOwner) {
        globalInfo.current.lockOwner = rst.data;
      }
    });
  };

  const main = async () => {
    await design.registerPlugins();
    design.init(document.getElementById('lce-container'), {
      // locale: 'zh-CN',
      enableCondition: true,
      enableCanvasLock: true,
      // 默认绑定变量
      supportVariableGlobally: true,
      requestHandlersMap: {
        fetch: design.createFetchHandler(),
      },
    });
  };
  useEffect(() => {
    // 编辑态标识
    window._lc_design_ = true
    main();
    queryIsMgr();
    queryLockOwner();
    const int1 = setInterval(() => {
      queryLockOwner();
    }, 10000);
    const int2 = setInterval(() => {
      event.emit('app-is-mgr', globalInfo.current);
    }, 1000);
    return () => {
      clearInterval(int1);
      clearInterval(int2);
    };
  }, []);
  return <div id="lce-container" />;
}

export default Design;
