import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, message, Select } from 'antd';
import { getList, createApp, copyApp, updateApp, deleteApp, getUserList } from '../../api/index';
import moment from 'moment';
import defaultApp from './defaultApp';
import './index.scss';
import utils from '../../utils';
import _ from 'lodash';
const APP_PATH_PREFIX = 'lc-template-';
function App() {
  const columns = [
    {
      title: '应用ID',
      dataIndex: 'appId',
      key: 'appId',
    },
    {
      title: '应用名称',
      dataIndex: 'appName',
      key: 'appName',
    },
    {
      title: '应用路径',
      dataIndex: 'appPath',
      key: 'appPath',
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      key: 'creator',
    },
    {
      title: '管理员',
      dataIndex: 'managers',
      key: 'managers',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      render: (_, record) => <div>{moment(record.createTime).format('YYYY-MM-DD HH:mm:ss')}</div>,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      render: (_, record) => <div>{moment(record.updateTime).format('YYYY-MM-DD HH:mm:ss')}</div>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <div>
          <Button type="primary" onClick={designApp(record)}>
            编排
          </Button>
          <Button
            style={{ marginLeft: '10px' }}
            onClick={editApp(record)}
            disabled={!canEdit(record)}
          >
            编辑
          </Button>
          <Button style={{ marginLeft: '10px' }} onClick={cpApp(record)}>
            复制
          </Button>
          <Button style={{ marginLeft: '10px' }} onClick={delApp(record)} disabled={!canDel(record)}>
            删除
          </Button>
        </div>
      ),
    },
  ];

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const [dataSource, setDataSource] = useState([]);
  const [userList, setUserList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const formRef = React.useRef(null);
  const searchFormRef = React.useRef(null);
  const [currentRecord, setCurrentRecord] = useState({});
  // const [paginationObj,setPaginationObj] = useState({
  //   pageSize:10,
  //   current:1,
  //   total:0
  // })

  const [total, setTotal] = useState(0);
  const [queryParams, setQueryParams] = useState({
    pageSize: 10,
    current: 1,
  });

  const creApp = () => {
    setIsEdit(false);
    setCurrentRecord({});
    setIsModalOpen(true);
    setTimeout(() => {
      formRef.current.setFieldsValue({
        appPath: undefined,
        appName: undefined,
        managers: window.userName,
      });
    }, 0);
  };

  const designApp = (app) => () => {
    window.location.hash = `#/design?appId=${app.appId}&appPath=${app.appPath}`  ;
    window.location.reload();
  };

  const canEdit = (app) => {
    // 超级管理员
    if(window.userName==='robin') return true
    const list = (app.managers || '').split(',');
    return list.includes(window.userName);
  };
  const canDel = (app) => {
        // 超级管理员
        if(window.userName==='robin') return true
    const list = (app.managers || '').split(',');
    return list.includes(window.userName);
  };

  const editApp = (oldApp) => () => {
    setIsEdit(true);
    const newApp = _.cloneDeep(oldApp);
    newApp.managers = (newApp.managers || '').split(',');
    setCurrentRecord(newApp);
    setIsModalOpen(true);
    setTimeout(() => {
      // 显示前：去掉前缀
      const path = newApp.appPath;
      newApp.appPath = path.startsWith(APP_PATH_PREFIX) ? path.slice(APP_PATH_PREFIX.length) : path;
      formRef.current.setFieldsValue(newApp);
    }, 0);
  };

  const cpApp = (app) => () => {
    copyApp(app).then((rst) => {
      if (rst && rst.data) {
        message.success('复制成功');
        queryList();
      }
    });
  };

  const delApp = (app) => () => {
    Modal.info({
      title: '删除应用',
      content: `确定删除应用:${app.appName}`,
      onOk() {
        deleteApp(app.appId)
          .then((rst) => {
            if (rst.data) {
              message.success('删除成功');
              queryList();
            }
          })
          .catch((e) => {
            debugger;
          });
      },
    });
  };
  const searchClick = () => {
    const values = searchFormRef.current.getFieldsValue();
    const params = { ...queryParams, ...values };
    setQueryParams(params);
    queryList(params);
  };
  const handleOk = () => {
    const values = formRef.current.getFieldsValue();
    if( Array.isArray(values.managers) && values.managers.length===0){ // 编辑时，管理员不能为空
      message.error('页面管理员不能为空');
      return;
    }
    if (!values.appPath) {
      message.error('请填写应用路径');
      return;
    }
 
    // 保存前：添加path前缀
    values.appPath = APP_PATH_PREFIX + values.appPath;
    if (Array.isArray(values.managers)) {
      values.managers = values.managers.join(',');
    }

    console.log('得到：', values);
    if (values.appName && values.appPath) {
      if (isEdit) {
        updateApp(currentRecord.appId, values).then((rst) => {
          if (rst.code === 0) {
            message.success('修改成功');
            setIsModalOpen(false);
            queryList();
          } else {
            message.error(rst.message);
          }
        });
      } else {
        values.content = utils.encodeSchema(defaultApp);
        createApp(values).then((rst) => {
          if (rst.code === 0) {
            message.success('新建成功');
            setIsModalOpen(false);
            queryList();
          } else {
            message.error(rst.message);
          }
        });
      }
    } else {
      message.error('请填写必填信息');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const paginationChange = (current) => {
    setQueryParams({
      current,
    });

    queryList({ ...queryParams, current });
  };

  const queryUsers = () => {
    getUserList().then((rst) => {
      if (rst.code === 0) {
        setUserList(
          (rst.data.list || []).map((item) => ({ label: item.username, value: item.username })),
        );
      }
    });
  };
  const queryList = (params = queryParams) => {
    getList(params).then((rst) => {
      console.log('应用列表数据:', rst);
      const list = rst?.data?.list || [];

      setTotal(rst?.data?.total);
      // setPaginationObj({
      //   pageSize: rst?.data?.pageSize,
      //   current:rst?.data?.pageIndex,
      //   total:rst?.data?.total
      // })
      list.forEach((item) => {
        item.key = item.appId;
      });
      setDataSource(list);
    });
  };

  useEffect(() => {
    queryList();
    queryUsers();
  }, []);

  return (
    <div className="app-list-container">
      <div className="header">应用列表</div>
      <div className="toolbar">
        <div>
          <Form
            layout="inline"
            ref={searchFormRef}
            // name="control-ref"
            // onFinish={onFinish}
            // style={{ maxWidth: 600 }}
          >
            <Form.Item name="appName" label="应用名称">
              <Input />
            </Form.Item>
            <Form.Item name="appPath" label="应用路径">
              <Input />
            </Form.Item>
          

            <Form.Item>
              <Button onClick={searchClick}>搜索</Button>
            </Form.Item>
          </Form>
        </div>

        <Button type="primary" onClick={creApp}>
          新建
        </Button>
      </div>
      <div className="table-container">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize: queryParams.pageSize,
            current: queryParams.current,
            total,
            onChange: paginationChange,
          }}
        />
        ;
      </div>

      <Modal
        title={isEdit ? '编辑应用' : '新建应用'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <Form
          {...layout}
          ref={formRef}
          name="control-ref"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="appName" label="应用名称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="appPath" label="应用路径" rules={[{ required: true }]}>
            <Input addonBefore={APP_PATH_PREFIX} />
          </Form.Item>
          <div className='app-path-reminder'>应用路径修改后，需要同步修改Nacos配置中页面state</div>

          <Form.Item name="managers" label="管理员">
            <Select options={userList} mode="tags" />
          </Form.Item>
          <Form.Item name="prodUrl" label="跳转地址">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
