
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ListDetailPageMeta: ComponentMetadata = {
  "componentName": "ListDetailPage",
  "title": "ListDetailPage",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-base-components",
    "version": "1.0.1",
    "exportName": "ListDetailPage",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "详情配置",
        "name": "detailList",

        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "title",
                          "zh-CN": "title"
                        }
                      },
                      "name": "title",
                      "setter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "extraSetter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
                            }
                          }
                        },
                        "isRequired": true,
                        "initialValue": {}
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "key",
                          "zh-CN": "key"
                        }
                      },
                      "name": "key",
                      "setter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "extraSetter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
                            }
                          }
                        },
                        "isRequired": true,
                        "initialValue": {}
                      }
                    },
                    {
                      "title": "props",
                      "name": "props",
                      "setter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "extraSetter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
                            }
                          }
                        },
                        "isRequired": true,
                        "initialValue": {}
                      }
                    }
                  ],
                  "extraSetter": {
                    "componentName": "MixedSetter",
                    "isRequired": false,
                    "props": {}
                  }
                }
              }
            }
          },
          "isRequired": true,
          "initialValue": []
        }
      },
      {
        "name": "onClose",
        "propType": "func"
      },
      {
        "title": "列表页标题",
        "name": "title",
        "setter": "StringSetter"
      },
      {
        "title":"列表页面",
        "name": "listChildren",
        "propType": {
          "type": "oneOfType",
          "value": [
            "bool",
            {
              "type": "instanceOf",
              "value": "node"
            }
          ]
        },
        "description": "内容"
      },
      {
        "title":"详情页面",
        "name": "detailChildren",
        "propType": {
          "type": "oneOfType",
          "value": [
            "bool",
            {
              "type": "instanceOf",
              "value": "node"
            }
          ]
        },
        "description": "内容"
      },
      // {
      //   "title":"列表页面",
      //   "name":"listChildren",
      //   setter: {
      //     componentName: 'SlotSetter',
      //     isRequired: true,
      //     title: '组件坑位',
      //     initialValue: {
      //       type: 'JSSlot',
      //       params: [ 'item'],
      //       value: [],
      //     },
      //   }
      // },
      {
        "title":"详情页面",
        "name":"detailChildren",
        setter: {
          componentName: 'SlotSetter',
          isRequired: true,
          title: '组件坑位',
          initialValue: {
            type: 'JSSlot',
            params: [ 'item'],
            value: [],
          },
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
    "title": "列表详情页签",
    // "screenshot": "https://img.alicdn.com/tfs/TB1o0t4u9f2gK0jSZFPXXXsopXa-112-64.png",
    "schema": {
      "componentName": "ListDetailPage",
      "props": {
        title:"列表名称",
        "children": {
          "type": "JSSlot",
          "props": {
            "title": "列表内容"
          }
        },
        "listChildren": {
          "type": "JSSlot",
          "props": {
            "title": "列表内容",
            "isAutoContainer": true
          }
        },
        "detailChildren": {
          "type": "JSSlot",
          "props": {
            "title": "详情内容",
            "isAutoContainer": true
          }
        },
        onClose:{
          "type": "JSFunction",
          "value": "(v, e) => { console.log(v, e) }"
        }
      }
    }
  }
];

export default {
  ...ListDetailPageMeta,
  snippets
};
