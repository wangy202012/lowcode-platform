import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, message,DatePicker,Select } from 'antd';
import { getLogsList,getPathEnum} from '../../api/index';
import moment from 'moment';
 
import './index.scss';
const { RangePicker } = DatePicker;
function Logs() {
  const columns = [
    {
      title: '日志ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '日志类型',
      dataIndex: 'logType',
      key: 'logType',
    },
 
    {
      title: '操作时间',
      dataIndex: 'time',
      render: (_, record) => <div>{moment(record.time).format('YYYY-MM-DD HH:mm:ss')}</div>,
    },
    {
      title: '内容',
      dataIndex: 'message',
      key: 'message',
    },

  ];

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const formRef = React.useRef(null);
  const searchFormRef = React.useRef(null);
  const [currentRecord, setCurrentRecord] = useState({});
  const [pathList,setPathList] = useState([])
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
 
    getLogsList(params).then((rst) => {
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
            <Form.Item name="pathCode" label="日志类型">
              <Select options={pathList} style={{width:'150px'}}/>
            </Form.Item>

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
