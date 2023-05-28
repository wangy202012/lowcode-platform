import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button, SplitButton } from '@alifd/next';
import { saveSchema } from '../../services/index';
import { useEffect, useState } from 'react';
import { getAppById } from '../../api/index';
import { event } from '@alilc/lowcode-engine';
import utils from '../../utils';
const PreviewButton = () => {
  const [disBtn, setDisBtn] = useState(true);
  const menu = ['跳转'].map((item) => <SplitButton.Item key={item}>{item}</SplitButton.Item>);
  useEffect(() => {
    event.on('common:app-is-mgr', (data) => {
      const ret = !(data.isMgr && data.lockOwner === '0');
      if (ret !== disBtn) setDisBtn(ret);
    });
  }, []);
  const doPreview = (e: any) => {
    if (e.target.className !== 'next-btn-helper') return;
    saveSchema();
    setTimeout(() => {
      const appId = new URL(location.origin + location.hash.slice(1)).searchParams.get('appId');
      window.open(`/renderer?appId=${appId}`);
    }, 500);
  };

  const doItemPreview = () => {
    // 先查看是否有跳转地址
    getAppById(utils.getAppId()).then((rst) => {
      let appPath = new URL(location.origin + location.hash.slice(1)).searchParams.get('appPath');
      let url = `/renderer?appPath=${appPath}`
      if (rst && rst.data && rst.data.prodUrl) {
        url = rst.data.prodUrl;
      }
      window.open(url);
    });
  };

  return (
    <SplitButton
      type="primary"
      disabled={disBtn}
      label="预览"
      onItemClick={doItemPreview}
      onClick={doPreview}
    >
      {menu}
    </SplitButton>
  );
};

// 保存功能示例
const PreviewSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <PreviewButton config={config} />,
      });
    },
  };
};
PreviewSamplePlugin.pluginName = 'PreviewSamplePlugin';
PreviewSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default PreviewSamplePlugin;
