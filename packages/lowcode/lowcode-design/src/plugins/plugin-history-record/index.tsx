import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button, Drawer, Timeline, Message, Checkbox } from '@alifd/next';
import { useEffect, useState } from 'react';
import md5 from 'js-md5';
import { getRecordList, updateSchema } from '../../api/index';
import { event } from '@alilc/lowcode-engine';
import copy from 'copy-to-clipboard';
import utils from '../../utils';
import { DownloadOutlined, CopyOutlined, RollbackOutlined } from '@ant-design/icons';
import { Tag, Modal } from 'antd';

const getState = (type: any) => {
  switch (type) {
    case 1:
      return 'process';
    case 2:
      return 'success';
    case 0:
      return undefined;
    case 3:
      return 'error';
    default:
      return 'error';
  }
  return undefined;
};
const TimelineItem = Timeline.Item;
const Record = () => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([]);
  const [typeList, setTypeList] = useState([0, 1, 2, 3]);
  const [total, setTotal] = useState();

  const [disBtn, setDisBtn] = useState(true);
  useEffect(() => {
    event.on('common:app-is-mgr', (data) => {
      const ret = !(data.isMgr && data.lockOwner === '0');
      if (ret !== disBtn) setDisBtn(ret);
    });
  }, []);

  const onTypeChange = (list: any) => {
    setTypeList(list);
    queryList({ typeList: list });
  };

  const copyPage = (content: string) => () => {
    const obj = utils.decodeSchema(content);
    const str = JSON.stringify(obj, null, 2);
    if (copy(str)) {
      Message.success('页面Schema成功复制到剪贴板');
    }
  };
  const downFile = (item: any) => () => {
    const content = JSON.stringify({
      code: 0,
      message: 'SUCCESS',
      data: { ...item, isProd: true },
    });
    const hs = md5(content).slice(20); // 只保留10个
    const appPath = utils.getAppPath();
    console.log(item);
    utils.downloadFile(content, `${appPath}_HA${hs}SH.json`);
  };

  const rollbackPage = (item: any) => () => {
    console.log('item:', item);
    Modal.confirm({
      okText: '确定',
      cancelText: '取消',
      title: '确定回滚',
      content: '确定回滚到时间节点:' + utils.getTime(item.updateTime),
      onOk: () => {
        updateSchema(utils.getAppId(), item.content, {
          type: 3,
          desc: `回滚(${utils.getTime(item.updateTime)})`,
        }).then((rst) => {
          if (rst.code === 0 && rst.data === true) {
            Message.success('页面回滚成功');
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        });
      },
    });
  };

  const queryList = (params = {}) => {
    const appId = new URL(location.origin + location.hash.slice(1)).searchParams.get('appId');
    getRecordList({ appId, typeList, ...params }).then((rst) => {
      console.log('dddd:', rst);
      setList(rst.data.list);
      setTotal(rst.data.total);
    });
  };
  useEffect(() => {
    if (visible) {
      queryList();
      console.log('显示历史记录:');
    }
  }, [visible]);

  const showPanel = () => {
    console.log('显示面板');
    setVisible(true);
  };
  return (
    <div>
      <Button type="primary" onClick={() => showPanel()}>
        历史记录
      </Button>
      <Drawer
        title="历史记录"
        placement="right"
        width={300}
        closeMode={['close', 'esc']}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Checkbox.Group value={typeList} onChange={onTypeChange} aria-labelledby="groupId">
          <Checkbox id="0" value={0}>
            保存
          </Checkbox>
          <Checkbox id="3" value={3}>
            回滚
          </Checkbox>
          <Checkbox id="1" value={1}>
            提交
          </Checkbox>
          <Checkbox id="2" value={2}>
            发布
          </Checkbox>
        </Checkbox.Group>
        <Timeline style={{ marginTop: 20 }}>
          {list.map((item: any) => {
            return (
              <TimelineItem
                state={getState(item.type)}
                title={
                  <span>
                    <RollbackOutlined onClick={rollbackPage(item)} style={{ marginRight: 5 }} />
                    <CopyOutlined onClick={copyPage(item.content)} style={{ marginRight: 5 }} />
                    {item.version && (
                      <span>
                        <DownloadOutlined style={{ marginRight: 5 }} onClick={downFile(item)} />
                        <Tag color="green">{item.version}</Tag>
                      </span>
                    )}
                    {item.desc}
                  </span>
                }
                time={utils.getTime(item.updateTime) + ' - ' + item.updater}
              />
            );
          })}
          {/* <TimelineItem title="Receipt" state="process" />
          <TimelineItem title={<span><button>回滚</button></span>}  />
          <TimelineItem title="Order" /> */}
        </Timeline>
        ,
      </Drawer>
    </div>
  );
};

// 保存功能示例
const HistoryRecordPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;

      skeleton.add({
        name: 'historyRecord',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <Record />,
      });
    },
  };
};
HistoryRecordPlugin.pluginName = 'HistoryRecordPlugin';
HistoryRecordPlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default HistoryRecordPlugin;
