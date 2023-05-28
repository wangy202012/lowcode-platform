import ReactRenderer from "@alilc/lowcode-react-renderer";
import React, { useState, useRef } from "react";
import { Button, Message, Grid } from "@alifd/next";
import { createFetchHandler } from "@alilc/lowcode-datasource-fetch-handler";
import { buildComponents, AssetLoader } from "@alilc/lowcode-utils";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { injectComponents } from "@alilc/lowcode-plugin-inject";
import { getPageContent, getPageContentByPath } from "./api/index";
import "./app.scss";
import utils from "./utils";
import moment from "moment";
const App = () => {
  const [data, setData] = useState({});
  const [local, setLocal] = useState(false);
  const [jsonData, setJsonData] = useState({});
  const [notPub,setNotPub] = useState(false)
  const schemaData = useRef({});

  const appId = new URLSearchParams(window.location.search).get("appId");
  const appPath = new URLSearchParams(window.location.search).get("appPath");

  const { schema, components } = data;

  async function init() {
    let pageContent = null;
    // 远程获取
    if (!local) {
      let pageContentData = null;
      if (appPath) {
        pageContentData = await getPageContentByPath(appPath);
      } else {
        pageContentData = await getPageContent(appId);
      }
      if(pageContentData.code===-1 && pageContentData.message==='当前应用没有发布') {
        setNotPub(true)
        return
      }
      pageContent = utils.decodeSchema(pageContentData?.data?.content);
    } else {
      pageContent = jsonData;
    }

    const { packages, projectSchema } = pageContent;
    if (!packages || !projectSchema) {
      Message.error("数据结构异常");
      return;
    }
    const { componentsMap: componentsMapArray, componentsTree } = projectSchema;
    const componentsMap = {};
    componentsMapArray.forEach((component) => {
      componentsMap[component.componentName] = component;
    });
    const schema = componentsTree[0];
    const libraryMap = {};
    const libraryAsset = [];
    packages.forEach(({ package: _package, library, urls, renderUrls }) => {
      libraryMap[_package] = library;
      if (renderUrls) {
        libraryAsset.push(renderUrls);
      } else if (urls) {
        libraryAsset.push(urls);
      }
    });

    // TODO asset may cause pollution
    const assetLoader = new AssetLoader();
    await assetLoader.load(libraryAsset);
    const components = await injectComponents(
      buildComponents(libraryMap, componentsMap)
    );
    setData({
      schema,
      components,
    });
  }

  const onChange = (value) => {
    schemaData.current = value;
  };

  const confirmJson = () => {
    const jsonStr = schemaData.current;
    let jsonData = null;
    try {
      jsonData = JSON.parse(jsonStr);
    } catch (e) {
      Message.error("输入内容不是JSON格式");
    }
    if (jsonData) {
      // 先设置true，后设置false，保证只触发一次渲染
      setLocal(true);
      setTimeout(() => {
        setLocal(false);
      }, 0);
      setJsonData(jsonData);
    }
  };
  if (!schema || !components || local) {
    init();
    // return <Loading fullScreen />;
  }
  if(notPub){
    return <div>当前页面未曾发布</div>
  }

  return (
    <div className="render-container">
      {!appId && (
        <div className="render-container-left">
          <div className="left-title">
            <div className="label">数据渲染平台</div>
            <Button type="primary" onClick={confirmJson}>
              确认
            </Button>
          </div>

          <AceEditor
            mode="javascript"
            theme="github"
            // value={schemaData}
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
          {/* <Input.TextArea>
      </Input.TextArea> */}
        </div>
      )}
      <div className="render-container-content">
        <ReactRenderer
          className="lowcode-plugin-sample-preview-content"
          schema={schema}
          components={components}
          appHelper={{
            requestHandlersMap: {
              fetch: createFetchHandler(),
              Message,
              moment,
            },
          }}
        />
      </div>
    </div>
  );
};
export default App;
