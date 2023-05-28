import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber,DatePicker,Select } from 'antd';
import { getLogs2List,getPathEnum} from '../../api/index';
import moment from 'moment';
 
import './index2.scss';
const { RangePicker } = DatePicker;
function Logs() {
  const columns = [
    {
      title: '日志ID',
      dataIndex: 'id',
      key: 'id',
    },

    {
      title: '操作人',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '操作名称',
      dataIndex: 'methodName',
      key: 'methodName',
    },
    {
      title: '花费时间(ms)',
      dataIndex: 'takeTime',
      key: 'takeTime',
    },
    {
      title: 'Http类型',
      dataIndex: 'httpMethod',
      key: 'httpMethod',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },


    // {
    //   title: '后端类名',
    //   dataIndex: 'classMethod',
    //   key: 'classMethod',
    // },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '操作时间',
      dataIndex: 'currentDateTime',
      render: (_, record) => <div>{moment(record.currentDateTime).format('YYYY-MM-DD HH:mm:ss')}</div>,
    }

  ];

 
  const [dataSource, setDataSource] = useState([]);
 
  const searchFormRef = React.useRef(null);
 
  const [pathList,setPathList] = useState([])
 

  const [total, setTotal] = useState(0);
  const [queryParams, setQueryParams] = useState({
    pageSize: 10,
    current: 1,
  });

  
 

 
 
  const searchClick = () => {
 
    const values = searchFormRef.current.getFieldsValue();
 
    if(Array.isArray(values.rangeTime) && values.rangeTime.length===2){
     values.startTime =  moment.utc(values.rangeTime[0]).toJSON()
     values.endTime =  moment.utc(values.rangeTime[1]).toJSON()
     delete values.rangeTime
    }
    const params = { ...queryParams, ...values };
    setQueryParams(params);
    queryList(params);
  };
 

  
  const paginationChange = (current) => {
    setQueryParams({
      current,
    });

    queryList({ ...queryParams, current });
  };
  const queryEnums = ()=>{
    getPathEnum().then(rst=>{
 
      if(rst.code===0){
        const list = rst.data.map(item=>({label:item.label,value:item.code}))
        setPathList(list)
      }
    })
  }
  const queryList = (params = queryParams) => {
 
    getLogs2List(params).then((rst) => {
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
    queryEnums()
  }, []);

  return (
    <div className="logs-list-container">
      <div className="header">日志列表</div>
      <div className="toolbar">
        <div>
          <Form
            layout="inline"
            ref={searchFormRef}
            // name="control-ref"
            // onFinish={onFinish}
            // style={{ maxWidth: 600 }}
          >
  
            <Form.Item name="rangeTime" label="起始时间">
              <RangePicker
                showTime={true}
                // format="YYYY-MM-DD HH:mm:ss"
              />
            </Form.Item>
            <Form.Item name="userName" label="操作人">
              <Input/>
            </Form.Item>

            <Form.Item name="methodName" label="操作名称">
              <Input/>
            </Form.Item>
            {/* <Form.Item name="minTakeTime" label="花费时间>">
              <InputNumber/>
            </Form.Item> */}

            <Form.Item>
              <Button onClick={searchClick}>搜索</Button>
            </Form.Item>
          </Form>
        </div>

 
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
 
    </div>
  );
}

export default Logs;
