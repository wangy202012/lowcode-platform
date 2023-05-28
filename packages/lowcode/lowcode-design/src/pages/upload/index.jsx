import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';

import { Button, message, Upload, List } from 'antd';
import utils from '../../utils';
import copy from 'copy-to-clipboard';

import   { CopyOutlined,ChromeOutlined } from '@ant-design/icons';
import { getAssetList,getUsedFiles } from '../../api/index';
import './index.scss'
const headers = {
  authorization: 'authorization-text',
};
const testImg =
  'https://brain001v.sarp.bjzdt.qihoo.net:10060/files/ec993d19-3916-42c0-86cd-2ee4f619f42b.png';

const App = () => {
  const [assets, setAssets] = useState([]);
  const [page,setPage] = useState({
    pageIndex:1,pageSize:12
  })
  const [total,setTotal] = useState(0)
  const queryList = (params)=>{
    getAssetList(params).then((rst) => {
      setAssets(rst.data.list);
      setTotal(rst.data.total)
    });
  }
  useEffect(() => {
    queryList(page)
  }, []);

  const queryUsedFiles = ()=>{
    getUsedFiles().then(rst=>{
      if(rst.code===0) {
        if(copy(JSON.stringify(rst.data))){
          message.success("被引用列表已复制到剪切板")
        }
      }
    })
  }
  const onChange = (info, fileList) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      const target = (info.fileList || []).find((item) => item.uid === info.file.uid);
      if (target) {
        target.url = info.file.response.data.path;
      }
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const onPageIndexChange = (pageIndex)=>{
    const params = {...page,pageIndex}
    setPage(params)
    setTimeout(() => {
      queryList(params)
    });
 
  }
  const copyPath = (content) =>()=>{
    if(copy(content)){
      message.success("路径成功复制到剪贴板")
    }
  }
  const openPath = (path)=> ()=>{
    window.open(path)
  }
  return (
    <div className='upload-asset-container'>
      <div style={{display:'flex',flexDirection:'col'}}>
      <Upload headers={headers} action="/api/uploadFile" name="file" onChange={onChange}>
        <Button icon={<UploadOutlined />}>上传到服务器</Button>
      </Upload>
      <Button  style={{marginLeft:20}} onClick={queryUsedFiles}>获取已引用资源列表</Button>
      </div>

      <div className='title'>资源列表</div>
      <List
        style={{height:`calc(100vh - 230px)`,overflow:'auto'}}
        grid={{ gutter: 16 }}
        pagination={{ position: 'top', align: 'start', current:page.pageIndex,pageSize:page.pageSize,total ,onChange:onPageIndexChange}}
        dataSource={assets}
        renderItem={(item, index) => (
          <List.Item>
            <div style={{ height: '250px', width: '300px', border: '1px solid #ddd',borderRadius:6, padding:5 }}>
              <img src={item.assetPath} style={{ width: '290px', height: '150px' }}></img>
              <div style={{ fontSize: 12,marginTop:10 ,paddingLeft:10}}>
                <div>文件名称: {item.assetName}</div>
                <div>
                  文件路径:
                  <CopyOutlined style={{cursor:'pointer',marginLeft:4,marginRight:4}} onClick={copyPath(item.assetPath)}/>
                  <ChromeOutlined onClick={openPath(item.assetPath)}/>
                </div>
                <div>发布者: {item.creator}</div>
                <div>发布时间: {utils.getTime(item.createTime)}</div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
