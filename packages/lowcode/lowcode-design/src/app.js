import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import routes from "./router/config";
import { HashRouter, Route,useHistory } from "react-router-dom";
import {getUsername} from './api/index'
import querystring from 'querystring'
const menus = routes.filter(item => !item.hidden).map((item) => ({ key: item.path, label: item.label }))
 

const { Header, Content, Sider } = Layout;
const App = (props) => {
  const pathname = window.location.pathname;
  // 特殊逻辑临时处理
  if(location.hash.includes('access_token')) {
    const str =location.hash.slice(location.hash.indexOf('access_token')) 
    const params =querystring.parse(str);
    const access_token = params.access_token;
    const expires_in = params.expires_in;
    localStorage.setItem('access_token',access_token)
    localStorage.setItem('expires_in',expires_in)

    const targetUrl = location.hash.slice(0,location.hash.indexOf('access_token')-1)
    // 清空URL
    location.href = targetUrl
  }
  useEffect(()=>{
    getUsername().then(rst=>{
      if(rst.data && rst.data !=='anonymousUser') {
        window.userName = rst.data
        setUserName(rst.data)
      }
    })
  },[])

  const [userName,setUserName] = useState("游客")
  const history = useHistory();
  const menuChange = ({ key }) => {
    // console.log('props:',history)
    // debugger
  
    window.location.hash = '#' + key;
  };
  const isFullScreen = () => {
    return window.location.pathname.startsWith('/design')
  }
  return (
    <HashRouter>
      <Layout className="lowcode-design-container">
        {
          !isFullScreen() ? <Header className="lowcode-design-header-container" >
            <div className="my-header">
            <div>{window.lcAppName}</div> 
            <div className="user">当前用户：{userName}</div>
            </div>
          </Header> : null
        }
        <Layout>
          {
            !isFullScreen() ? <Sider width={280}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[pathname]}
                style={{
                  height: "100%",
                  borderRight: 0,
                }}
                onClick={menuChange}
                items={menus}
              />
            </Sider> : null
          }
          <Layout
            style={{
              padding: "16px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: "white",
              }}
            >
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact
                  component={route.Component}
                />
              ))}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </HashRouter>
  );
};
export default App;
