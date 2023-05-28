
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulInputMeta: ComponentMetadata = {
  "componentName": "ColorfulInput",
  "title": "ColorfulInput",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-base-components",
    "version": "0.1.0",
    "exportName": "ColorfulInput",
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
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
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
    "title": "ColorfulInput",
    "screenshot": "",
    "schema": {
      "componentName": "ColorfulInput",
      "props": {}
    }
  }
];

export default {
  ...ColorfulInputMeta,
  snippets
};
