import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, message, Select } from 'antd';
import { getMockList, createMock, copyMock, updateMock, deleteMock, getUserList } from '../../api/index';
import moment from 'moment';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import './index.scss';

import _ from 'lodash';
 
const MOCK_PATH_PREFIX = '/__lc_api';
function Mocks() {
  const columns = [
    {
      title: '数据id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '数据名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数据标识',
      dataIndex: 'engName',
      key: 'engName',
    },
    {
      title: '请求路径',
      dataIndex: 'path',
      key: 'path',
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
      title: '访问',
      render: (_, record) => <div>
        <a href={MOCK_PATH_PREFIX +  record.path} target='_blank'>链接</a>
      </div>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <div>
     
          <Button
            style={{ marginLeft: '10px' }}
            onClick={editMock(record)}
            disabled={!canEdit(record)}
          >
            编辑
          </Button>
          <Button style={{ marginLeft: '10px' }} onClick={cpMock(record)}>
            复制
          </Button>
          <Button style={{ marginLeft: '10px' }} onClick={delMock(record)} disabled={!canDel(record)}>
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
 

  const [total, setTotal] = useState(0);
  const [queryParams, setQueryParams] = useState({
    pageSize: 10,
    current: 1,
  });

  const creMock = () => {
    setIsEdit(false);
    setCurrentRecord({});
    setIsModalOpen(true);
    setTimeout(() => {
      formRef.current.setFieldsValue({
        path: undefined,
        name: undefined,
        content:undefined,
        desc:undefined,
        managers: window.userName,
      });
    }, 0);
  };

 

  const canEdit = (app) => {
    return true
    // 超级管理员
    if(window.userName==='robin') return true
    const list = (app.managers || '').split(',');
    return list.includes(window.userName);
  };
  const canDel = (app) => {
    return true
        // 超级管理员
        if(window.userName==='robin') return true
    const list = (app.managers || '').split(',');
    return list.includes(window.userName);
  };

  const editMock = (oldMock) => () => {
    setIsEdit(true);
    const newMock = _.cloneDeep(oldMock);
    newMock.managers = (newMock.managers || '').split(',');
    setCurrentRecord(newMock);
    setIsModalOpen(true);
    setTimeout(() => {
      // 显示前：解码
 
      newMock.content = decodeURIComponent(newMock.content)
      formRef.current.setFieldsValue(newMock);
    }, 0);
  };

  const cpMock = (app) => () => {
    copyMock(app).then((rst) => {
      if (rst && rst.data) {
        message.success('复制成功');
        queryList();
      }
    });
  };

  const delMock = (mock) => () => {
    Modal.info({
      title: '删除数据',
      content: `确定删除数据:${mock.name}`,
      onOk() {
        deleteMock(mock.id)
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
    if (!values.name || !values.path || !values.content) {
      message.error('必填项不能为空');
      return;
    }

    


    // 保存前验证内容是否符合json格式
    try {
      const val = JSON.parse(values.content)
      values.content =  JSON.stringify(val,null,2)
    }catch(e){
      message.error('内容格式有误,请填入JSON对象或者数组')
      return
    }
    // 保存前验证路径
    if(!values.path.startsWith('/')) {
      values.path =  "/"+values.path
    }
  
 
    debugger
    // 保存前，编码
    values.content = encodeURIComponent(values.content)
 
    if (Array.isArray(values.managers)) {
      values.managers = values.managers.join(',');
    }

    console.log('得到：', values);
      if (isEdit) {
        updateMock(currentRecord.id, values).then((rst) => {
          if (rst.code === 0) {
            message.success('修改成功');
            setIsModalOpen(false);
            // es异步耗时
            setTimeout(() => {
              queryList();
            }, 2000);

          } else {
            message.error(rst.message);
          }
        });
      } else {
 
        createMock(values).then((rst) => {
          if (rst.code === 0) {
            message.success('新建成功');
            setIsModalOpen(false);
           setTimeout(() => {
            // es数据异步
            queryList();
           }, 1000);
          } else {
            message.error(rst.message);
          }
        });
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
    getMockList(params).then((rst) => {
      console.log('应用列表数据:', rst);
      const list = rst?.data?.list || [];

      setTotal(rst?.data?.total);
      // setPaginationObj({
      //   pageSize: rst?.data?.pageSize,
      //   current:rst?.data?.pageIndex,
      //   total:rst?.data?.total
      // })
      list.forEach((item) => {
        item.key = item.id;
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
      <div className="header">数据列表</div>
      <div className="toolbar">
        <div>
          <Form
            layout="inline"
            ref={searchFormRef}
            // name="control-ref"
            // onFinish={onFinish}
            // style={{ maxWidth: 600 }}
          >
            <Form.Item name="name" label="数据名称">
              <Input />
            </Form.Item>
            <Form.Item name="path" label="请求路径">
              <Input  />
            </Form.Item>
            <Form.Item>
              <Button onClick={searchClick}>搜索</Button>
            </Form.Item>
          </Form>
        </div>

        <Button type="primary" onClick={creMock}>
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
        title={isEdit ? '编辑数据' : '新建数据'}
          className='edit-app-dlg'
  
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
 
        >
          <Form.Item name="name" label="数据名称(中文)" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="engName" label="数据标识(英文)" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="path" label="请求路径" rules={[{ required: true }]}>
            <Input  />
          </Form.Item>
          <Form.Item name="desc" label="数据描述" >
            <Input  />
          </Form.Item>

   
          <Form.Item name="managers" label="管理员">
            <Select options={userList} mode="tags" />
          </Form.Item>
          <Form.Item name="content" label="数据内容" rules={[{ required: true }]}>
            {/* <Input.TextArea  /> */}
            <AceEditor
            mode="ace/mode/json"
            theme="github"
            style={{width:'100%'}}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Mocks;
