import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const FullIframeMeta: ComponentMetadata = {
  "componentName": "FullIframe",
  "title": "FullIframe",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": '精选组件',
  "category": '布局容器类',
  "npm": {
    "package": "lowcode-base-components",
    "version": "1.0.0",
    "exportName": "FullIframe",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "url",
            "zh-CN": "地址"
          }
        },
        "name": "url",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "全屏框架",
    // "screenshot": "https://img.alicdn.com/tfs/TB1o0t4u9f2gK0jSZFPXXXsopXa-112-64.png",
    "schema": {
      "componentName": "FullIframe",
      "props": {
        "url": "https://img.ltn.com.tw/Upload/news/600/2023/05/12/phpK05jr4.png"
      }
    }
  }
];

export default {
  ...FullIframeMeta,
  snippets
};
