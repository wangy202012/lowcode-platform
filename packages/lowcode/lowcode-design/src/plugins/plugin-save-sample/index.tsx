import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button, SplitButton, Dialog ,Message} from '@alifd/next';
// next的form使用有问题，改用antd
import {Form,Input} from 'antd'
import { event } from '@alilc/lowcode-engine';
import { resetSchema } from '../../services/mockService';
import { saveSchema } from '../../services/index';
import { useEffect, useState } from 'react';
import React from 'react'

const defaultSaveOptions = {
  type: 1,
  desc: '保存',
  title: '保存',
  version: 'v1',
}
//@ts-ignore
const SaveButton = ({ scenarioName }) => {
  const [disBtn, setDisBtn] = useState(true);
  const [dlgVisible, setDlgVisible] = useState(false);
  const formRef = React.useRef(null);
  const [saveOptions, setSaveOptions] = useState(defaultSaveOptions);
  const menu = ['提交', '发布'].map((item) => (
    <SplitButton.Item key={item}>{item}</SplitButton.Item>
  ));
  useEffect(() => {
    event.on('common:app-is-mgr', (data) => {
      const ret = !(data.isMgr && data.lockOwner === '0');
      if (ret !== disBtn) setDisBtn(ret);
    });
  }, []);

 
  const onCancel = () => {
    setDlgVisible(false);
  };

  const onSubmit = () => {
    //@ts-ignore
    const values = formRef.current.getFieldsValue();
 
    if(!values.desc || (saveOptions.type===2 && !values.version)) {
      Message.error('必填项不能为空')
    }

    const ext = { type: 1, desc: values.desc};
    if (saveOptions.type===2) {
      ext.type = 2;
      ext.version = values.version
    }


    saveSchema(scenarioName, ext).then(rst=>{
      setDlgVisible(false)
      setSaveOptions(defaultSaveOptions)
    })
  };

  const onSaveItemClick = (item: any) => {
    debugger
    if (item === '提交') {
      setSaveOptions({ type: 1, desc: '提交', title: '提交' });
    } else {
      setSaveOptions({ type: 2, desc: '发布', title: '发布', version: 'v1' });
    }
    setDlgVisible(true);

  };
  const onSaveClick = (e: any) => {
    if (e.target.className !== 'next-btn-helper') return;
    console.log('保存记录');
    saveSchema(scenarioName, { type: 0 });
  };

  return (
    <div>
      <SplitButton
        disabled={disBtn}
        label="保存"
        type="primary"
        onItemClick={onSaveItemClick}
        onClick={onSaveClick}
      >
        {menu}
      </SplitButton>
      <Dialog
        v2
        title={saveOptions.title}
        visible={dlgVisible}
        onCancel={onCancel}
        onClose={onCancel}
        autoFocus
        footer={false}
        cancelProps={{ 'aria-label': 'cancel' }}
        okProps={{ 'aria-label': 'ok' }}
      >
        <Form ref={formRef}>
          <Form.Item name="desc" label="描述" required>
            <Input />
          </Form.Item>
    {
         saveOptions.type === 2 &&      <Form.Item name="version" label="版本" required >
                <Input />
              </Form.Item>
    }
          <Form.Item style={{display:'flex',justifyContent:'center'}}>
            <Button type="primary"   onClick={onSubmit} >
              确认
            </Button>
          </Form.Item>
        </Form>
      </Dialog>
    </div>
  );
};

// 保存功能示例
const SaveSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, hotkey, config } = ctx;
      const scenarioName = config.get('scenarioName');
      skeleton.add({
        name: 'saveSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <SaveButton scenarioName={scenarioName} />,
      });
      skeleton.add({
        name: 'resetSchema',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <Button onClick={() => resetSchema(scenarioName)}>重置页面</Button>,
      });
      hotkey.bind('command+s', (e) => {
        e.preventDefault();
        saveSchema(scenarioName);
      });
    },
  };
};
SaveSamplePlugin.pluginName = 'SaveSamplePlugin';
SaveSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default SaveSamplePlugin;
