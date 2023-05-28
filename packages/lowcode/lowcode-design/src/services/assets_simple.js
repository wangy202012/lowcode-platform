export default {
  "version": "1.1.13",
  "packages": [
    {
      "package": "moment",
      "version": "2.24.0",
      "urls": ["https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"],
      "library": "moment"
    },
    {
      "package": "lodash",
      "urls": ["https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"],
      "library": "lodash"
    },
    {
      "title": "fusion组件库",
      "package": "@alifd/next",
      "version": "1.26.4",
      // 更换主题色
      "urls": [
        "/pkg/theme-tg-next.css",
        "/pkg/next-with-locales.min.js"
      ],
      "library": "Next"
    },
    {
      "title": "NextTable",
      "package": "NextTable",
      "version": "1.0.1",
      "urls": [
        "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.js",
        "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.css"
      ],
      "library": "NextTable"
    },
    {
      "title": "AliLowCodeComponents",
      "package": "@alifd/ali-lowcode-components",
      "version": "latest",
      "urls": [
        "https://gw.alipayobjects.com/os/lib/alifd/ali-lowcode-components/0.1.4/dist/ali-lowcode-components.js",
        "https://gw.alipayobjects.com/os/lib/alifd/ali-lowcode-components/0.1.4/dist/ali-lowcode-components.css"
      ],
      "library": "AliLowCodeComponents"
    },
    {
      "title": "BizCharts",
      "package": "bizcharts",
      "version": "4.1.11",
      "urls": ["https://g.alicdn.com/code/lib/bizcharts/4.1.11/BizCharts.min.js"],
      "library": "BizCharts"
    },
    {
      package: 'lowcode-base-components',
      version: '0.1.0',
      library: 'BaseComps',
      urls: ['/lowcode-base-components/render/view.js', '/lowcode-base-components/render/view.css'],
      editUrls: ['/lowcode-base-components/view.js', '/lowcode-base-components/view.css'],
      advancedUrls: {
        default: [
          '/lowcode-base-components/render/view.js',
          '/lowcode-base-components/render/view.css',
        ],
      },
      advancedEditUrls: {},
    },
    {
      package: '@alifd/layout',
      version: '2.0.7',
      library: 'AlifdLayout',
      urls: [
        'https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/dist/AlifdLayout.js',
        'https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/dist/AlifdLayout.css',
      ],
      editUrls: [
        'https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/view.js',
        'https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/view.css',
      ],
    },
  ],
  "components": [
    {
      exportName: 'AlifdLayoutMeta',
      npm: {
        package: '@alifd/layout',
        version: '2.0.7',
      },
      url: 'https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/meta.js',
      urls: {
        default: 'https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/meta.js',
      },
    },
    {
      "componentName": "Link",
      "title": "链接",
      "npm": {
        "package": "@alifd/ali-lowcode-components",
        "version": "latest",
        "exportName": "Link",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "href",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "超链接",
              "en-US": "Link"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性：href | 说明：超链接地址",
              "en-US": "prop: href | description: link address"
            }
          },
          "propType": "string",
          "defaultValue": "https://fusion.design"
        },
        {
          "name": "children",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "链接文案",
              "en-US": "Text"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性：children | 说明：超链接文案",
              "en-US": "prop: children | description: text of the link"
            }
          },
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "defaultValue": "这是一个超链接"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "target",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "页面目标",
              "en-US": "Target"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性：target | 说明：跳转页面目标",
              "en-US": "prop: target | description: target of new page"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["_blank", "_self"]
          }
        }
      ],
      "configure": {
        "supports": {
          "style": true,
          "events": ["onClick"]
        },
        "component": {
          "isContainer": true
        },
        "props": [
          {
            "name": "children",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "链接文案",
                "en-US": "Text"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性：children | 说明：超链接文案",
                "en-US": "prop: children | description: text of the link"
              }
            },
            "setter": "StringSetter",
            "defaultValue": "这是一个超链接"
          },
          {
            "name": "linkType",
            "title": "跳转类型",
            "condition": {
              "type": "JSFunction",
              "value": "condition(target) {\n          const _pages_ = target.getProps().getPropValue(\"_pages_\");\n          console.log('_pages_: ', _pages_);\n          return !!_pages_;\n        }"
            },
            "defaultValue": "page",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "value": "page",
                    "title": "内部页面"
                  },
                  {
                    "value": "link",
                    "title": "外部链接"
                  }
                ]
              }
            }
          },
          {
            "name": "_redirect_url",
            "title": "跳转页面",
            "extraProps": {
              "getValue": {
                "type": "JSFunction",
                "value": "(target, value) => {\n            return target.getProps().getPropValue('href');\n          }"
              },
              "setValue": {
                "type": "JSFunction",
                "value": "(target, value) => {\n            return target.getProps().setPropValue('href', value);\n          }"
              }
            },
            "setter": {
              "type": "JSFunction",
              "value": "(target) => {\n          const data = ((target.getProps().getPropValue('_pages_') || {}).content || []).map(item => {\n            return {\n              title: item.title.zh-CN,\n              value: `#/${item.relateUuid}`,\n            };\n          });\n          return {\n            componentName: 'SelectSetter',\n            props: {\n              options: data\n            },\n          };\n        }"
            },
            "condition": {
              "type": "JSFunction",
              "value": "condition(target) {\n          return target.getProps().getPropValue(\"linkType\") === 'page';\n        }"
            }
          },
          {
            "name": "href",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "跳转链接",
                "en-US": "Link"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性：href | 说明：超链接地址",
                "en-US": "prop: href | description: link address"
              }
            },
            "setter": "StringSetter",
            "condition": {
              "type": "JSFunction",
              "value": "condition(target) {\n          return target.getProps().getPropValue(\"linkType\") === 'link';\n        }"
            }
          },
          {
            "name": "target",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "页面目标",
                "en-US": "Target"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性：target | 说明：跳转页面目标",
                "en-US": "prop: target | description: target of new page"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "value": "_self",
                    "title": "当前页面"
                  },
                  {
                    "value": "_blank",
                    "title": "新开页面"
                  }
                ]
              }
            }
          },
          {
            "name": "_pages_",
            "condition": {
              "type": "JSFunction",
              "value": "() => false"
            }
          }
        ],
        "advanced": {
          "initials": [
            {
              "name": "linkType",
              "initial": {
                "type": "JSFunction",
                "value": "() => 'link'"
              }
            },
            {
              "name": "_pages_",
              "initial": {
                "type": "JSFunction",
                "value": "(target) => {\n          let url = `/uipass/query/formnav/getFormNavigationListByOrder.json${window.location.search}`\n          if (['localhost', '127.0.0.1', 'a7343369-3834-4e55-9f69-e071f489f979-3333.cloud-ide-router.alibaba-inc.com'].includes(window.location.hostname)) {\n            url = 'mock-pages.json';\n          }\n          (AliLowCodeEngine || VisualEngine).editor.utils.get(url)\n            .then((response) => {\n              target.getProps().setPropValue('_pages_', response);\n            });\n        }"
              }
            }
          ],
          "filters": [],
          "autoruns": []
        }
      },
      "icon": "",
      "category": "常用"
    },
    {
      "componentName": "Message",
      "title": "提示",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Message",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "title",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标题",
              "en-US": "Title"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: title | 说明: 标题",
              "en-US": "prop: title | description: Title"
            }
          },
          "propType": "string",
          "description": "标题",
          "defaultValue": "标题"
        },
        {
          "name": "type",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "类型",
              "en-US": "Type"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: type | 说明: 反馈类型",
              "en-US": "prop: type | description: message type"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["success", "warning", "error", "notice", "help", "loading"]
          },
          "description": "反馈类型",
          "defaultValue": "success"
        },
        {
          "name": "shape",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "形状",
              "en-US": "Shape"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: shape | 说明: 外观",
              "en-US": "prop: shape | description: message shape"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["inline", "addon", "toast"]
          },
          "description": "外观",
          "defaultValue": "inline"
        },
        {
          "name": "size",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "尺寸",
              "en-US": "Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: size | 说明: 尺寸",
              "en-US": "prop: size | description: message size"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["medium", "large"]
          },
          "description": "尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "children",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "文本",
              "en-US": "Content"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: children | 说明: 文本内容",
              "en-US": "prop: children | description: message content"
            }
          },
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "内容"
        },
        {
          "name": "visible",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "是否显示",
              "en-US": "Visible"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: visible | 说明: 当前是否显示",
              "en-US": "prop: visible | description: visible"
            }
          },
          "propType": "bool",
          "description": "当前是否显示"
        },
        {
          "name": "iconType",
          "propType": "string",
          "description": "显示的图标类型，会覆盖内部设置的IconType"
        },
        {
          "name": "closeable",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "显示 Close",
              "en-US": "Show Close"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: closeable | 说明: 显示关闭按钮",
              "en-US": "prop: closeable | description: show close button"
            }
          },
          "propType": "bool",
          "description": "显示关闭按钮",
          "defaultValue": false
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "关闭按钮的回调"
        },
        {
          "name": "afterClose",
          "propType": "func",
          "description": "关闭之后调用的函数"
        },
        {
          "name": "animation",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "开启动效",
              "en-US": "Animation"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: animation | 说明: 是否开启动效",
              "en-US": "prop: animation | description: enable animation"
            }
          },
          "propType": "bool",
          "description": "收起动画",
          "defaultValue": true
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "iconType",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "图标",
                  "en-US": "Icon"
                },
                "tip": {
                  "type": "i18n",
                  "zh-CN": "属性: iconType | 说明: 显示的图标类型",
                  "en-US": "prop: iconType | description: icon type"
                }
              },
              "setter": {
                "componentName": "IconSetter"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "反馈"
    },
    {
      "componentName": "Avatar",
      "title": "头像",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Avatar",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "children",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "文本内容",
              "en-US": "Content"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: children | 说明: 文本内容",
              "en-US": "prop: children | description: avatar content"
            }
          },
          "propType": "string"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "size",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "头像尺寸",
              "en-US": "Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: size | 说明: 头像的大小",
              "en-US": "prop: size | description: avatar size"
            }
          },
          "propType": {
            "type": "oneOfType",
            "value": [
              {
                "type": "oneOf",
                "value": ["small", "medium", "large"]
              },
              "number"
            ]
          },
          "description": "头像的大小",
          "defaultValue": "medium"
        },
        {
          "name": "shape",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "头像形状",
              "en-US": "Shape"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: shape | 说明: 头像的形状",
              "en-US": "prop: shape | description: avatar shape"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["circle", "square"]
          },
          "description": "头像的形状",
          "defaultValue": "circle"
        },
        {
          "name": "icon",
          "title": "icon",
          "propType": "string",
          "description": "icon 类头像的图标类型，可设为 Icon 的 `type` 或 `ReactNode`"
        },
        {
          "name": "src",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "头像地址",
              "en-US": "Src"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: src | 说明: 图片类头像的资源地址",
              "en-US": "prop: src | description: resource address"
            }
          },
          "propType": "string",
          "description": "图片类头像的资源地址"
        },
        {
          "name": "onError",
          "propType": "func",
          "description": "图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "icon",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "图标",
                  "en-US": "Icon"
                },
                "tip": {
                  "type": "i18n",
                  "zh-CN": "属性: icon | 说明: 图标类型",
                  "en-US": "prop: icon | description: icon type"
                }
              },
              "setter": {
                "componentName": "IconSetter"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Badge",
      "title": "徽标数",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Badge",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "count",
          "title": "count",
          "propType": "string",
          "description": "展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时默认隐藏",
          "defaultValue": 0
        },
        {
          "name": "content",
          "title": "内容",
          "propType": "node",
          "description": "自定义节点内容"
        },
        {
          "name": "overflowCount",
          "title": "封顶数字",
          "propType": {
            "type": "oneOfType",
            "value": ["number", "string"]
          },
          "description": "展示的封顶的数字",
          "defaultValue": 99
        },
        {
          "name": "showZero",
          "title": {
            "label": "展示零",
            "tip": "showZero|当count为 0 时，是否显示 count"
          },
          "propType": "bool",
          "description": "当count为 0 时，是否显示 count",
          "defaultValue": true
        },
        {
          "name": "dot",
          "title": {
            "label": "红点",
            "tip": "dot|不展示数字，只展示一个小红点"
          },
          "propType": "bool",
          "description": "不展示数字，只展示一个小红点",
          "defaultValue": false
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "count",
              "title": {
                "label": "展示的数字",
                "tip": "count|大于 overflowCount 时显示为 ${overflowCount}+，为 0 时默认隐藏",
                "docUrl": "https://fusion.alibaba-inc.com/pc/component/basic/badge"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["StringSetter", "ExpressionSetter"]
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "BalloonInner",
      "title": "BalloonInner",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Balloon",
        "main": "",
        "destructuring": true,
        "subName": "Inner"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "closable",
          "propType": "bool",
          "defaultValue": true
        },
        {
          "name": "children",
          "propType": "any"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "alignEdge",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "onClose",
          "propType": "func"
        },
        {
          "name": "style",
          "propType": "any"
        },
        {
          "name": "align",
          "propType": "string",
          "defaultValue": "b"
        },
        {
          "name": "type",
          "propType": "string",
          "defaultValue": "normal"
        },
        {
          "name": "isTooltip",
          "propType": "bool"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "pure",
          "propType": "bool",
          "defaultValue": false
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Balloon.Tooltip",
      "title": "文字提示",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Balloon",
        "main": "",
        "destructuring": true,
        "subName": "Tooltip"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "pure",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "children",
          "title": "提示文案",
          "propType": "string"
        },
        {
          "name": "type",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "primary"]
          },
          "description": "样式类型",
          "defaultValue": "normal"
        },
        {
          "name": "triggerType",
          "title": "触发行为",
          "propType": {
            "type": "oneOf",
            "value": ["hover", "click"]
          },
          "description": "触发行为\n鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用click",
          "defaultValue": "hover"
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层当前显示的状态"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层在显示和隐藏触发的事件\n@param {Boolean} visible 弹层是否隐藏和显示\n@param {String} type 触发弹层显示或隐藏的来源， closeClick 表示由自带的关闭按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "align",
          "title": "弹出位置",
          "propType": {
            "type": "oneOf",
            "value": ["t", "r", "b", "l", "tl", "tr", "bl", "br", "lt", "lb", "rt", "rb"]
          },
          "description": "弹出层位置\n@enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合",
          "defaultValue": "b"
        },
        {
          "name": "offset",
          "propType": {
            "type": "arrayOf",
            "value": "number"
          },
          "description": "弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量\ne.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px",
          "defaultValue": [0, 0]
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        },
        {
          "name": "delay",
          "title": "延迟显示",
          "propType": "number",
          "description": "弹层在触发以后的延时显示, 单位毫秒 ms"
        },
        {
          "name": "trigger",
          "propType": "node",
          "description": "触发元素"
        },
        {
          "name": "onClick",
          "propType": "func"
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "任何visible为false时会触发的事件"
        },
        {
          "name": "onHover",
          "propType": "func"
        },
        {
          "name": "defaultVisible",
          "title": "默认显示",
          "propType": "bool",
          "description": "弹层默认显示的状态",
          "defaultValue": false
        },
        {
          "name": "alignEdge",
          "title": "边缘对齐",
          "propType": "bool",
          "description": "弹出层对齐方式, 是否为边缘对齐",
          "defaultValue": false
        },
        {
          "name": "closable",
          "title": "关闭按钮",
          "propType": "bool",
          "description": "是否显示关闭按钮",
          "defaultValue": true
        },
        {
          "name": "needAdjust",
          "title": "自动调整",
          "propType": "bool",
          "description": "是否进行自动位置调整",
          "defaultValue": false
        },
        {
          "name": "afterClose",
          "propType": "func",
          "description": "浮层关闭后触发的事件, 如果有动画，则在动画结束后触发"
        },
        {
          "name": "shouldUpdatePosition",
          "propType": "bool",
          "description": "强制更新定位信息"
        },
        {
          "name": "autoFocus",
          "title": "自动聚焦",
          "propType": "bool",
          "description": "弹层出现后是否自动focus到内部第一个元素",
          "defaultValue": true
        },
        {
          "name": "followTrigger",
          "title": "跟随滚动",
          "propType": "bool",
          "description": "是否跟随滚动"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "prefix",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "pure",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "visible",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "offset",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "shouldUpdatePosition",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupContainer",
              "title": {
                "docUrl": "https://fusion.alibaba-inc.com/pc/component/basic/balloon#demo-api",
                "label": "弹层容器",
                "tip": "指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数()。"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["StringSetter", "FunctionSetter"]
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Balloon",
      "title": "气泡框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Balloon",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "pure",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "type",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "primary"]
          },
          "description": "样式类型",
          "defaultValue": "normal"
        },
        {
          "name": "triggerType",
          "title": "触发行为",
          "propType": {
            "type": "oneOf",
            "value": ["hover", "click"]
          },
          "description": "触发行为\n鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用click",
          "defaultValue": "hover"
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层当前显示的状态"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层在显示和隐藏触发的事件\n@param {Boolean} visible 弹层是否隐藏和显示\n@param {String} type 触发弹层显示或隐藏的来源， closeClick 表示由自带的关闭按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "align",
          "title": "弹出位置",
          "propType": {
            "type": "oneOf",
            "value": ["t", "r", "b", "l", "tl", "tr", "bl", "br", "lt", "lb", "rt", "rb"]
          },
          "description": "弹出层位置\n@enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合",
          "defaultValue": "b"
        },
        {
          "name": "offset",
          "propType": {
            "type": "arrayOf",
            "value": "number"
          },
          "description": "弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量\ne.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px",
          "defaultValue": [0, 0]
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        },
        {
          "name": "delay",
          "title": "延迟显示",
          "propType": "number",
          "description": "弹层在触发以后的延时显示, 单位毫秒 ms"
        },
        {
          "name": "trigger",
          "propType": "node",
          "description": "触发元素"
        },
        {
          "name": "onClick",
          "propType": "func"
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "任何visible为false时会触发的事件"
        },
        {
          "name": "onHover",
          "propType": "func"
        },
        {
          "name": "defaultVisible",
          "title": "默认显示",
          "propType": "bool",
          "description": "弹层默认显示的状态",
          "defaultValue": false
        },
        {
          "name": "alignEdge",
          "title": "边缘对齐",
          "propType": "bool",
          "description": "弹出层对齐方式, 是否为边缘对齐",
          "defaultValue": false
        },
        {
          "name": "closable",
          "title": "关闭按钮",
          "propType": "bool",
          "description": "是否显示关闭按钮",
          "defaultValue": true
        },
        {
          "name": "needAdjust",
          "title": "自动调整",
          "propType": "bool",
          "description": "是否进行自动位置调整",
          "defaultValue": false
        },
        {
          "name": "afterClose",
          "propType": "func",
          "description": "浮层关闭后触发的事件, 如果有动画，则在动画结束后触发"
        },
        {
          "name": "shouldUpdatePosition",
          "propType": "bool",
          "description": "强制更新定位信息"
        },
        {
          "name": "autoFocus",
          "title": "自动聚焦",
          "propType": "bool",
          "description": "弹层出现后是否自动focus到内部第一个元素",
          "defaultValue": true
        },
        {
          "name": "followTrigger",
          "title": "跟随滚动",
          "propType": "bool",
          "description": "是否跟随滚动"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "prefix",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "pure",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "visible",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "offset",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "shouldUpdatePosition",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupContainer",
              "title": {
                "docUrl": "https://fusion.alibaba-inc.com/pc/component/basic/balloon#demo-api",
                "label": "弹层容器",
                "tip": "指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数()。"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["StringSetter", "FunctionSetter"]
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "容器"
    },
    {
      "componentName": "Box",
      "title": "容器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Box",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "direction",
          "title": {
            "label": "布局方向",
            "tip": "布局方向，默认为 column ，一个元素占据一整行，默认为column"
          },
          "propType": {
            "type": "oneOf",
            "value": ["row", "column"]
          },
          "defaultValue": "column"
        },
        {
          "name": "wrap",
          "title": "是否折行",
          "propType": "bool",
          "description": "是否折行",
          "defaultValue": false
        },
        {
          "name": "justify",
          "title": {
            "label": "沿主轴排布关系",
            "tip": "justify | 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）"
          },
          "propType": {
            "type": "oneOf",
            "value": ["flex-start", "center", "flex-end", "space-between", "space-around"]
          }
        },
        {
          "name": "align",
          "title": {
            "label": "垂直主轴排布关系",
            "tip": "align | 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）"
          },
          "propType": {
            "type": "oneOf",
            "value": ["flex-start", "center", "flex-end", "baseline", "stretch"]
          }
        },
        {
          "name": "spacing",
          "title": {
            "label": "元素间距",
            "tip": "元素之间的间距 [bottom&top, right&left]"
          },
          "propType": {
            "type": "oneOfType",
            "value": [
              "number",
              {
                "type": "arrayOf",
                "value": "number"
              }
            ]
          }
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "id",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "容器"
    },
    {
      "componentName": "Breadcrumb.Item",
      "title": "面包屑 Item",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Breadcrumb",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "children",
          "description": "内容",
          "propType": "string"
        },
        {
          "name": "link",
          "propType": "string",
          "description": "面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`"
        },
        {
          "name": "activated",
          "propType": "bool"
        },
        {
          "name": "separator",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "className",
          "propType": "any"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "children",
            "title": "文本内容",
            "setter": "StringSetter"
          }
        ]
      },
      "icon": "",
      "category": "导航"
    },
    {
      "componentName": "Breadcrumb",
      "title": "面包屑",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Breadcrumb",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "description": "样式类名的品牌前缀",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "面包屑子节点，需传入 Breadcrumb.Item"
        },
        {
          "name": "maxNode",
          "propType": {
            "type": "oneOfType",
            "value": [
              "number",
              {
                "type": "oneOf",
                "value": ["auto"]
              }
            ]
          },
          "description": "面包屑最多显示个数，超出部分会被隐藏, 设置为 auto 会自动根据父元素的宽度适配。",
          "defaultValue": 100
        },
        {
          "name": "separator",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "分隔符，可以是文本或 Icon"
        },
        {
          "name": "component",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "func"]
          },
          "description": "设置标签类型",
          "defaultValue": "nav"
        },
        {
          "name": "className",
          "propType": "any"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "childWhitelist": ["Breadcrumb.Item"]
          }
        },
        "props": [
          {
            "name": "maxNode",
            "title": {
              "label": "最大节点数",
              "tip": "默认 100"
            },
            "setter": "NumberSetter"
          },
          {
            "name": "separator",
            "title": "分隔符",
            "setter": "StringSetter"
          },
          {
            "name": "Breadcrumb.Item",
            "title": "面包屑项",
            "setter": {
              "componentName": "ArraySetter",
              "props": {
                "itemSetter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "primaryKey",
                          "title": "面包屑项编号",
                          "condition": {
                            "type": "JSFunction",
                            "value": "() => false"
                          },
                          "initialValue": {
                            "type": "JSFunction",
                            "value": "val => {\n                        if (val) return val;\n                        return String(Math.floor(Math.random() * 10000));\n                      }"
                          },
                          "setter": "StringSetter"
                        },
                        {
                          "name": "children",
                          "title": "标题",
                          "initialValue": {
                            "zh-CN": "",
                            "en-US": "",
                            "type": "i18n"
                          },
                          "setter": "StringSetter"
                        },
                        {
                          "name": "link",
                          "title": "链接",
                          "initialValue": {
                            "zh-CN": "",
                            "en-US": "",
                            "type": "i18n"
                          },
                          "setter": "StringSetter"
                        },
                        {
                          "name": "target",
                          "title": "打开方式",
                          "initialValue": {
                            "zh-CN": "",
                            "en-US": "",
                            "type": "i18n"
                          },
                          "setter": {
                            "componentName": "RadioGroupSetter",
                            "initialValue": "_self",
                            "props": {
                              "options": [
                                {
                                  "title": "新开页面",
                                  "value": "_blank"
                                },
                                {
                                  "title": "当前页面",
                                  "value": "_self"
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "type": "JSFunction",
                    "value": "() => {\n                return {\n                  primaryKey: String(Math.floor(Math.random() * 10000)),\n                  children: \"Title\",\n                  target: \"_self\"\n                };\n              }"
                  }
                }
              }
            },
            "extraProps": {
              "virtual": {
                "type": "JSFunction",
                "value": "() => true"
              },
              "getValue": {
                "type": "JSFunction",
                "value": "(target, value) => {\n            console.log(\"getValue: \", target, value);\n            return target.getNode().children.map(child => {\n              return {\n                primaryKey: String(child.getPropValue(\"primaryKey\")),\n                children: child.getPropValue(\"children\"),\n                link: child.getPropValue(\"link\"),\n                target: child.getPropValue(\"target\")\n              };\n            });\n          }"
              },
              "setValue": {
                "type": "JSFunction",
                "value": "(target, value) => {\n            console.log(\"setValue: \", target, value);\n            const node = target.getNode();\n            const map = {};\n            if (!Array.isArray(value)) {\n              value = [];\n            }\n            value.forEach(item => {\n              const BreadcrumbItem = Object.assign({}, item);\n              map[item.primaryKey] = BreadcrumbItem;\n            });\n            node.children.mergeChildren(\n              child => {\n                const primaryKey = String(child.getPropValue(\"primaryKey\"));\n                console.log(child.id + \"----\" + primaryKey);\n                if (Object.hasOwnProperty.call(map, primaryKey)) {\n                  child.setPropValue(\"children\", map[primaryKey].children);\n                  child.setPropValue(\"link\", map[primaryKey].link);\n                  child.setPropValue(\"target\", map[primaryKey].target);\n                  delete map[primaryKey];\n                  return false;\n                }\n                return true;\n              },\n              () => {\n                const items = [];\n                for (const primaryKey in map) {\n                  if (Object.hasOwnProperty.call(map, primaryKey)) {\n                    items.push({\n                      componentName: \"Breadcrumb.Item\",\n                      props: map[primaryKey]\n                    });\n                  }\n                }\n                console.log(\"adder: \", items);\n                return items;\n              },\n              (child1, child2) => {\n                const a = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child1.getPropValue(\"primaryKey\"))\n                );\n                const b = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child2.getPropValue(\"primaryKey\"))\n                );\n                console.log(\"a: \", a);\n                console.log(\"b: \", b);\n                return a - b;\n              }\n            );\n          }"
              },
              "onChange": {
                "type": "JSFunction",
                "value": "() => {\n            console.log(\"onChange: \", arguments);\n          }"
              }
            }
          }
        ],
        "supports": {
          "style": true
        }
      },
      "icon": "",
      "category": "导航"
    },
    {
      "componentName": "Button.Group",
      "title": "按钮组",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Button",
        "main": "",
        "destructuring": true,
        "subName": "Group"
      },
      "props": [
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "size",
          "propType": "string",
          "description": "统一设置 Button 组件的按钮大小",
          "defaultValue": "medium"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "childWhitelist": ["Button"]
          }
        },
        "props": [
          {
            "name": "size",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "统一设置子按钮的尺寸",
                "en-US": "Button Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 统一设置子按钮的尺寸",
                "en-US": "prop: size | description: button size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          }
        ]
      },
      "icon": "",
      "category": "常用"
    },
    {
      "componentName": "Button",
      "title": "按钮",
      "icon": "https://img.alicdn.com/tfs/TB1rT0gPQL0gK0jSZFAXXcA9pXa-200-200.svg",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Button",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "children",
          "title": "内容",
          "propType": "string"
        },
        {
          "name": "icon",
          "propType": "string",
          "description": "自定义内联样式"
        },
        {
          "name": "type",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "按钮类型",
              "en-US": "Button Type"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: type | 说明: 按钮类型",
              "en-US": "prop: type | description: button type"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["primary", "secondary", "normal"]
          },
          "description": "按钮的类型",
          "defaultValue": "normal"
        },
        {
          "name": "size",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "按钮尺寸",
              "en-US": "Button Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: size | 说明: 按钮尺寸",
              "en-US": "prop: size | description: button size"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "按钮的尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "iconSize",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "图标尺寸",
              "en-US": "Icon Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: iconSize | 说明: 图标尺寸",
              "en-US": "prop: iconSize | description: icon size"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl"]
          },
          "defaultValue": "small",
          "description": "按钮中 Icon 的尺寸，用于替代 Icon 的默认大小"
        },
        {
          "name": "ghost",
          "title": {
            "type": "i18n",
            "zh-CN": "幽灵按钮",
            "en-US": "ghost"
          },
          "propType": {
            "type": "oneOf",
            "value": [true, false, "light", "dark"]
          },
          "description": "是否为幽灵按钮",
          "defaultValue": false
        },
        {
          "name": "loading",
          "title": "loading",
          "propType": "bool",
          "description": "设置按钮的载入状态",
          "defaultValue": false
        },
        {
          "name": "text",
          "title": {
            "type": "i18n",
            "zh-CN": "文本按钮",
            "en-US": "text"
          },
          "propType": "bool",
          "description": "是否为文本按钮",
          "defaultValue": false
        },
        {
          "name": "warning",
          "title": "warning",
          "propType": "bool",
          "description": "是否为警告按钮",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "title": {
            "type": "i18n",
            "zh-CN": "禁用",
            "en-US": "disabled"
          },
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "onClick",
          "title": "onClick",
          "propType": "func",
          "description": "点击按钮的回调\n@param {Object} e Event Object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "onMouseUp",
          "propType": "func"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "icon",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "图标",
                  "en-US": "Icon"
                },
                "tip": {
                  "type": "i18n",
                  "zh-CN": "属性: icon | 说明: 图标类型",
                  "en-US": "prop: icon | description: icon type"
                }
              },
              "setter": "IconSetter",
              "setValue": {
                "type": "JSFunction",
                "value": "(target, value) => {\n            target.nodes[0].children.import(value && {\"componentName\": \"Icon\", \"props\": {\"type\": value, \"style\": {\"marginRight\": 5}}}, true);\n          }"
              }
            },
            {
              "name": "ghost",
              "title": {
                "type": "i18n",
                "zh-CN": "幽灵按钮",
                "en-US": "ghost"
              },
              "setter": {
                "componentName": "RadioGroupSetter",
                "props": {
                  "options": [
                    {
                      "title": "True",
                      "value": true
                    },
                    {
                      "title": "False",
                      "value": false
                    },
                    {
                      "title": "Light",
                      "value": "light"
                    },
                    {
                      "title": "Dark",
                      "value": "dark"
                    }
                  ]
                }
              },
              "description": "是否为幽灵按钮",
              "defaultValue": false
            },
            {
              "name": "children",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "按钮内容",
                  "en-US": "Content"
                },
                "tip": {
                  "type": "i18n",
                  "zh-CN": "属性: children | 说明: 按钮文本",
                  "en-US": "prop: children | description: button content"
                }
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["StringSetter", "ExpressionSetter"]
                }
              }
            }
          ]
        }
      },
      "category": "常用"
    },
    {
      "componentName": "Calendar",
      "title": "日历",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Calendar",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "默认选中的日期（moment 对象）"
        },
        {
          "name": "value",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "选中的日期值 (moment 对象)"
        },
        {
          "name": "modes",
          "propType": {
            "type": "instanceOf",
            "value": "array"
          }
        },
        {
          "name": "disableChangeMode",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "format",
          "propType": "string",
          "defaultValue": "YYYY-MM-DD"
        },
        {
          "name": "showOtherMonth",
          "propType": "bool",
          "description": "是否展示非本月的日期",
          "defaultValue": true
        },
        {
          "name": "defaultVisibleMonth",
          "propType": "func",
          "description": "默认展示的月份"
        },
        {
          "name": "shape",
          "propType": {
            "type": "oneOf",
            "value": ["card", "fullscreen", "panel"]
          },
          "description": "展现形态",
          "defaultValue": "fullscreen"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选择日期单元格时的回调\n@param {Object} value 对应的日期值 (moment 对象)"
        },
        {
          "name": "onModeChange",
          "propType": "func",
          "description": "面板模式变化时的回调\n@param {String} mode 对应面板模式 date month year"
        },
        {
          "name": "onVisibleMonthChange",
          "propType": "func",
          "description": "展现的月份变化时的回调\n@param {Object} value 显示的月份 (moment 对象)\n@param {String} reason 触发月份改变原因"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义样式类"
        },
        {
          "name": "dateCellRender",
          "propType": "func",
          "description": "自定义日期渲染函数\n@param {Object} value 日期值（moment对象）\n@returns {ReactNode}"
        },
        {
          "name": "monthCellRender",
          "propType": "func",
          "description": "自定义月份渲染函数\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@returns {ReactNode}"
        },
        {
          "name": "yearCellRender",
          "propType": "func"
        },
        {
          "name": "disabledDate",
          "propType": "func",
          "description": "不可选择的日期\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@returns {Boolean}"
        },
        {
          "name": "locale",
          "propType": "object",
          "description": "国际化配置"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "shape",
            "title": "展现形态",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["card", "fullscreen", "panel"]
              }
            }
          },
          {
            "name": "showOtherMonth",
            "display": "block",
            "title": "展示非本月日期",
            "setter": {
              "componentName": "BoolSetter"
            }
          }
        ]
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "CardActions",
      "title": "CardActions",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": "Actions"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "component",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          },
          "description": "设置标签类型",
          "defaultValue": "div"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "CardBulletHeader",
      "title": "CardBulletHeader",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": "BulletHeader"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "title",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "卡片的标题"
        },
        {
          "name": "subTitle",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "卡片的副标题"
        },
        {
          "name": "showTitleBullet",
          "propType": "bool",
          "description": "是否显示标题的项目符号",
          "defaultValue": true
        },
        {
          "name": "extra",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标题区域的用户自定义内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "CardCollaspeContent",
      "title": "CardCollaspeContent",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": "CollaspeContent"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "contentHeight",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "number"]
          },
          "description": "内容区域的固定高度",
          "defaultValue": 120
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "CardContent",
      "title": "CardContent",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": "Content"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "component",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          },
          "description": "设置标签类型",
          "defaultValue": "div"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "CardDivider",
      "title": "CardDivider",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": "Divider"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "component",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          },
          "description": "设置标签类型",
          "defaultValue": "hr"
        },
        {
          "name": "inset",
          "propType": "bool",
          "description": "分割线是否向内缩进"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "CardHeader",
      "title": "CardHeader",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": "Header"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "title",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "卡片的标题"
        },
        {
          "name": "subTitle",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "卡片的副标题"
        },
        {
          "name": "extra",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标题区域的用户自定义内容"
        },
        {
          "name": "component",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          },
          "description": "设置标签类型",
          "defaultValue": "div"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "CardMedia",
      "title": "CardMedia",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": "Media"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "component",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          },
          "description": "设置标签类型",
          "defaultValue": "div"
        },
        {
          "name": "image",
          "propType": "string",
          "description": "背景图片地址"
        },
        {
          "name": "src",
          "propType": "string",
          "description": "媒体源文件地址"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Card",
      "title": "卡片",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Card",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "showTitleBullet",
          "title": "标题符号",
          "propType": "bool",
          "description": "标题的项目符号",
          "defaultValue": true
        },
        {
          "name": "showHeadDivider",
          "title": "分割线",
          "propType": "bool",
          "description": "头部分隔线",
          "defaultValue": true
        },
        {
          "name": "title",
          "propType": {
            "type": "oneOfType",
            "value": ["node", "string"]
          },
          "description": "标题"
        },
        {
          "name": "subTitle",
          "propType": {
            "type": "oneOfType",
            "value": ["node", "string"]
          },
          "description": "副标题"
        },
        {
          "name": "extra",
          "title": {
            "label": "自定义内容",
            "tip": "标题栏用户自定义内容"
          },
          "propType": {
            "type": "oneOfType",
            "value": ["node", "string"]
          },
          "description": "标题栏用户自定义内容"
        },
        {
          "name": "contentHeight",
          "title": "内容高度",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "number"]
          },
          "description": "内容区域的固定高度",
          "defaultValue": 120
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "description": "文本方向是从右向左"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "id",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            }
          ]
        }
      },
      "icon": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_card.png",
      "category": "内容"
    },
    {
      "componentName": "CascaderSelect",
      "title": "级联选择器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "CascaderSelect",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "label",
          "title": {
            "label": "label",
            "tip": "自定义内联 label"
          },
          "propType": "string",
          "description": "自定义内联 label"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "大小",
          "defaultValue": "medium"
        },
        {
          "name": "placeholder",
          "propType": "string",
          "description": "占位符"
        },
        {
          "name": "dataSource",
          "propType": {
            "type": "arrayOf",
            "value": "object"
          }
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "hasArrow",
          "propType": "bool",
          "description": "下拉箭头",
          "defaultValue": true
        },
        {
          "name": "hasBorder",
          "propType": "bool",
          "description": "边框",
          "defaultValue": true
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "清除按钮",
          "defaultValue": false
        },
        {
          "name": "notFoundContent",
          "title": {
            "label": "无数据时显示内容",
            "tip": "notFoundContent"
          },
          "propType": {
            "type": "oneOfType",
            "value": ["node", "string"]
          },
          "description": "无数据时显示内容",
          "defaultValue": "Not Found"
        },
        {
          "name": "loadData",
          "propType": "func",
          "description": "异步加载数据函数\n@param {Object} data 当前点击异步加载的数据"
        },
        {
          "name": "header",
          "propType": "node",
          "description": "自定义下拉框头部"
        },
        {
          "name": "footer",
          "propType": "node",
          "description": "自定义下拉框底部"
        },
        {
          "name": "defaultVisible",
          "title": {
            "label": "初始下拉框是否显示",
            "tip": "defaultVisible"
          },
          "propType": "bool",
          "description": "初始下拉框是否显示",
          "defaultValue": false
        },
        {
          "name": "visible",
          "title": {
            "label": "当前下拉框是否显示",
            "tip": "visible"
          },
          "propType": "bool",
          "description": "当前下拉框是否显示"
        },
        {
          "name": "readOnly",
          "propType": "bool",
          "description": "是否只读"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中值改变时触发的回调函数\n@param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组\n@param {Object|Array} data 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点\n@param {Object} extra 额外参数\n@param {Array} extra.selectedPath 单选时选中的数据的路径\n@param {Boolean} extra.checked 多选时当前的操作是选中还是取消选中\n@param {Object} extra.currentData 多选时当前操作的数据\n@param {Array} extra.checkedData 多选时所有被选中的数据\n@param {Array} extra.indeterminateData 多选时半选的数据"
        },
        {
          "name": "expandTriggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "展开触发方式",
          "defaultValue": "click"
        },
        {
          "name": "onExpand",
          "propType": "func"
        },
        {
          "name": "useVirtual",
          "propType": "bool",
          "description": "虚拟滚动",
          "defaultValue": false
        },
        {
          "name": "multiple",
          "propType": "bool",
          "description": "是否多选",
          "defaultValue": false
        },
        {
          "name": "changeOnSelect",
          "title": {
            "label": "选中即改变",
            "tip": "changeOnSelect|是否选中即发生改变, 该属性仅在单选模式下有效"
          },
          "propType": "bool",
          "description": "是否选中即发生改变, 该属性仅在单选模式下有效",
          "defaultValue": false
        },
        {
          "name": "canOnlyCheckLeaf",
          "title": {
            "label": "canOnlyCheckLeaf",
            "tip": "是否只能勾选叶子项的checkbox，该属性仅在多选模式下有效"
          },
          "propType": "bool",
          "description": "是否只能勾选叶子项的checkbox，该属性仅在多选模式下有效",
          "defaultValue": false
        },
        {
          "name": "checkStrictly",
          "title": {
            "label": "checkStrictly",
            "tip": "父子节点是否选中不关联"
          },
          "propType": "bool",
          "description": "父子节点是否选中不关联",
          "defaultValue": false
        },
        {
          "name": "listStyle",
          "propType": "object",
          "description": "每列列表样式对象"
        },
        {
          "name": "resultAutoWidth",
          "title": {
            "label": "resultAutoWidth",
            "tip": "搜索结果列表是否和选择框等宽"
          },
          "propType": "bool",
          "description": "搜索结果列表是否和选择框等宽",
          "defaultValue": true
        },
        {
          "name": "showSearch",
          "propType": "bool",
          "description": "搜索框",
          "defaultValue": false
        },
        {
          "name": "filter",
          "propType": "func",
          "description": "自定义搜索函数\n@param {String} searchValue 搜索的关键字\n@param {Array} path 节点路径\n@return {Boolean} 是否匹配\n@default 根据路径所有节点的文本值模糊匹配"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "下拉框显示或关闭时触发事件的回调函数\n@param {Boolean} visible 是否显示\n@param {String} type 触发显示关闭的操作类型, fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "popupStyle",
          "propType": "object",
          "description": "下拉框自定义样式对象"
        },
        {
          "name": "popupProps",
          "propType": "object",
          "description": "透传到 Popup 的属性对象"
        },
        {
          "name": "followTrigger",
          "title": {
            "label": "是否跟随滚动",
            "tip": "followTrigger"
          },
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "isPreview",
          "title": {
            "label": "是否为预览态",
            "tip": "isPreview"
          },
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        }
      ],
      "configure": {
        "supports": {
          "style": true,
          "events": [
            {
              "name": "onChange",
              "templete": "templeteTest(e,${extParams}){this.setState({isShowDialog: false})}"
            },
            {
              "name": "onExpand"
            },
            {
              "name": "onVisibleChange"
            }
          ]
        },
        "props": [
          {
            "name": "label",
            "title": {
              "label": "内联文案",
              "tip": "自定义内联 label"
            },
            "setter": "StringSetter"
          },
          {
            "name": "size",
            "title": "尺寸",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "placeholder",
            "title": "占位提示",
            "setter": "StringSetter"
          },
          {
            "name": "dataSource",
            "title": "级联数据",
            "setter": "JsonSetter"
          },
          {
            "name": "disabled",
            "setter": "BoolSetter",
            "title": "是否禁用",
            "defaultValue": false
          },
          {
            "name": "hasArrow",
            "setter": "BoolSetter",
            "title": "下拉箭头",
            "defaultValue": true
          },
          {
            "name": "hasBorder",
            "setter": "BoolSetter",
            "title": "边框",
            "defaultValue": true
          },
          {
            "name": "hasClear",
            "setter": "BoolSetter",
            "title": "清除按钮",
            "defaultValue": false
          },
          {
            "name": "readOnly",
            "setter": "BoolSetter",
            "title": "是否只读"
          },
          {
            "name": "multiple",
            "setter": "BoolSetter",
            "title": "是否多选",
            "defaultValue": false
          },
          {
            "name": "showSearch",
            "setter": "BoolSetter",
            "title": "搜索框",
            "defaultValue": false
          },
          {
            "name": "followTrigger",
            "title": {
              "label": "跟随滚动",
              "tip": "followTrigger"
            },
            "setter": "BoolSetter",
            "description": "是否跟随滚动"
          },
          {
            "name": "isPreview",
            "title": {
              "label": "预览态",
              "tip": "isPreview"
            },
            "setter": "BoolSetter",
            "description": "是否为预览态"
          },
          {
            "name": "expandTriggerType",
            "display": "block",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["click", "hover"]
              }
            },
            "title": "展开触发方式",
            "defaultValue": "click"
          },
          {
            "name": "notFoundContent",
            "display": "block",
            "title": {
              "label": "无数据时显示内容",
              "tip": "notFoundContent"
            },
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["StringSetter", "SlotSetter"]
              }
            },
            "defaultValue": "Not Found"
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ]
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Cascader",
      "title": "级联",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Cascader",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中值改变时触发的回调函数\n@param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组\n@param {Object|Array} data 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点\n@param {Object} extra 额外参数\n@param {Array} extra.selectedPath 单选时选中的数据的路径\n@param {Boolean} extra.checked 多选时当前的操作是选中还是取消选中\n@param {Object} extra.currentData 多选时当前操作的数据\n@param {Array} extra.checkedData 多选时所有被选中的数据\n@param {Array} extra.indeterminateData 多选时半选的数据"
        },
        {
          "name": "onSelect",
          "propType": "func"
        },
        {
          "name": "dataSource",
          "propType": "array"
        },
        {
          "name": "expandTriggerType",
          "title": {
            "label": "触发方式",
            "tip": "expandTriggerType | 展开触发的方式"
          },
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "展开触发的方式",
          "defaultValue": "click"
        },
        {
          "name": "onExpand",
          "propType": "func",
          "description": "展开时触发的回调函数\n@param {Array} expandedValue 各列展开值的数组"
        },
        {
          "name": "useVirtual",
          "title": {
            "label": "虚拟滚动",
            "tip": "useVirtual | 是否开启虚拟滚动"
          },
          "propType": "bool",
          "description": "是否开启虚拟滚动",
          "defaultValue": false
        },
        {
          "name": "multiple",
          "propType": "bool",
          "description": "是否多选",
          "defaultValue": false
        },
        {
          "name": "canOnlySelectLeaf",
          "title": {
            "label": "单选时是否只能选中叶子节点",
            "tip": "canOnlySelectLeaf"
          },
          "propType": "bool",
          "description": "单选时是否只能选中叶子节点",
          "defaultValue": false
        },
        {
          "name": "canOnlyCheckLeaf",
          "title": {
            "label": "多选时是否只能选中叶子节点",
            "tip": "canOnlyCheckLeaf"
          },
          "propType": "bool",
          "description": "多选时是否只能选中叶子节点",
          "defaultValue": false
        },
        {
          "name": "checkStrictly",
          "title": {
            "tip": "checkStrictly",
            "label": "父子节点是否选中不关联"
          },
          "propType": "bool",
          "description": "父子节点是否选中不关联",
          "defaultValue": false
        },
        {
          "name": "listStyle",
          "propType": "object",
          "description": "每列列表样式对象"
        },
        {
          "name": "loadData",
          "title": {
            "label": "loadData",
            "tip": "异步加载数据函数\n@param {Object} data 当前点击异步加载的数据\n@param {Object} source 当前点击数据，source是原始对象"
          },
          "propType": "func",
          "description": "异步加载数据函数\n@param {Object} data 当前点击异步加载的数据\n@param {Object} source 当前点击数据，source是原始对象"
        },
        {
          "name": "onBlur",
          "propType": "func"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "prefix",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "loadData",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "listStyle",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "dataSource",
              "title": "级联数据",
              "setter": "JsonSetter"
            },
            {
              "name": "canOnlySelectLeaf",
              "display": "block",
              "title": {
                "label": "单选时是否只能选中叶子节点",
                "tip": "canOnlySelectLeaf"
              },
              "setter": "BoolSetter",
              "defaultValue": false
            },
            {
              "name": "canOnlyCheckLeaf",
              "display": "block",
              "title": {
                "label": "多选时是否只能选中叶子节点",
                "tip": "canOnlyCheckLeaf"
              },
              "setter": "BoolSetter",
              "defaultValue": false
            },
            {
              "name": "checkStrictly",
              "display": "block",
              "title": {
                "tip": "checkStrictly",
                "label": "父子节点是否选中不关联"
              },
              "setter": "BoolSetter",
              "defaultValue": false
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "CheckboxGroup",
      "title": "复选按钮组",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Checkbox",
        "main": "",
        "destructuring": true,
        "subName": "Group"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "整体禁用"
        },
        {
          "name": "value",
          "propType": {
            "type": "oneOfType",
            "value": [
              {
                "type": "instanceOf",
                "value": "array"
              },
              "string",
              "number"
            ]
          },
          "description": "被选中的值列表"
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "oneOfType",
            "value": [
              {
                "type": "instanceOf",
                "value": "array"
              },
              "string",
              "number"
            ]
          },
          "description": "默认被选中的值列表"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中值改变时的事件\n@param {Array} value 选中项列表\n@param {Event} e Dom 事件对象"
        },
        {
          "name": "itemDirection",
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "子项目的排列方式\n- hoz: 水平排列 (default)\n- ver: 垂直排列",
          "defaultValue": "hoz"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态",
          "defaultValue": false
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {number} value 评分值"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "disabled",
            "title": "是否禁用",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "itemDirection",
            "title": "排列方式",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "水平排列",
                    "value": "hoz"
                  },
                  {
                    "title": "垂直排列",
                    "value": "ver"
                  }
                ]
              }
            },
            "defaultValue": "hoz"
          },
          {
            "name": "isPreview",
            "title": "预览态",
            "setter": {
              "componentName": "BoolSetter"
            }
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "defaultValue": "[]",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["JsonSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "dataSource",
            "display": "block",
            "title": "选项",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "items": [
                              {
                                "name": "label",
                                "title": "label",
                                "setter": "StringSetter"
                              },
                              {
                                "name": "value",
                                "title": "value",
                                "setter": "StringSetter"
                              }
                            ]
                          }
                        },
                        "initialValue": {
                          "label": "选项一",
                          "value": "1"
                        }
                      }
                    }
                  },
                  "ExpressionSetter"
                ]
              }
            }
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true,
          "events": ["onChange"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "CheckboxItem",
      "title": "复选框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": "CheckboxItem"
      },
      "props": [
        {
          "name": "checked",
          "propType": "bool",
          "description": "是否选中",
          "defaultValue": false
        },
        {
          "name": "indeterminate",
          "propType": "bool",
          "description": "是否半选中",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中或取消选中触发的回调函数\n@param {Boolean} checked 是否选中\n@param {Object} event 选中事件对象"
        },
        {
          "name": "helper",
          "propType": "node",
          "description": "帮助文本"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Menu", "SubMenu", "Menu.Group", "MenuButton"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Checkbox",
      "title": "复选按钮",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Checkbox",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "id",
          "propType": "string",
          "description": "ID"
        },
        {
          "name": "name",
          "propType": "string",
          "description": "name"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "checked",
          "propType": "bool",
          "description": "选中状态"
        },
        {
          "name": "defaultChecked",
          "propType": "bool",
          "description": "默认选中状态",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "禁用"
        },
        {
          "name": "label",
          "propType": "string",
          "description": "label"
        },
        {
          "name": "indeterminate",
          "propType": "bool",
          "description": "中间状态"
        },
        {
          "name": "defaultIndeterminate",
          "propType": "bool",
          "description": "默认中间态",
          "defaultValue": false
        },
        {
          "name": "value",
          "propType": {
            "type": "oneOfType",
            "value": ["string"]
          },
          "description": "value"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "label",
            "title": "标题",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["StringSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "value",
            "title": "Value",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["StringSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "indeterminate",
            "title": "半选状态",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "disabled",
            "title": "是否禁用",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "controlChecked",
            "display": "block",
            "title": {
              "label": "外部控制选中",
              "tip": "外部控制选中后，选中状态需要开发者自己根据 onChange 回传的值重新设置给组件才能生效"
            },
            "setter": "BoolSetter"
          },
          {
            "name": "checked",
            "title": "选中状态",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            },
            "condition": {
              "type": "JSFunction",
              "value": "condition(target) {\n          return target.getProps().getPropValue(\"controlChecked\") || false;\n        }"
            }
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true,
          "events": ["onChange", "onMouseEnter", "onMouseLeave"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Collapse.Panel",
      "title": "折叠面板Panel",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Collapse",
        "main": "",
        "destructuring": true,
        "subName": "Panel"
      },
      "props": [
        {
          "name": "children",
          "propType": "any"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "子组件接受行内样式"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁止用户操作"
        },
        {
          "name": "title",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标题"
        }
      ],
      "configure": {
        "component": {
          "nestingRule": {
            "parentWhitelist": ["Collapse"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Collapse",
      "title": "折叠面板",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Collapse",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "dataSource",
          "propType": "array",
          "description": "使用数据模型构建"
        },
        {
          "name": "defaultExpandedKeys",
          "propType": {
            "type": "arrayOf",
            "value": "string"
          },
          "description": "默认展开keys"
        },
        {
          "name": "expandedKeys",
          "propType": {
            "type": "arrayOf",
            "value": "string"
          },
          "description": "受控展开keys"
        },
        {
          "name": "onExpand",
          "propType": "func",
          "description": "展开状态发升变化时候的回调"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "所有禁用"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "扩展class"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "组件接受行内样式"
        },
        {
          "name": "accordion",
          "propType": "bool",
          "description": "手风琴模式，一次只能打开一个",
          "defaultValue": false
        },
        {
          "name": "rtl",
          "propType": "bool"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "dataSource",
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["JsonSetter", "ExpressionSetter"]
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "title": "柱状图",
      "category": "常用图表(试验)",
      "componentName": "ColumnChart",
      "icon": "https://unpkg.alibaba-inc.com/@ali/vc-bizcharts@1.1.4/src/vc-column/logo.svg",
      "npm": {
        "package": "bizcharts",
        "version": "4.1.11-beta.2",
        "exportName": "ColumnChart",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "configure": {
        "props": [
          {
            "name": "titleConfig",
            "title": "标题配置",
            "display": "block",
            "type": "group",
            "items": [
              {
                "name": "title.text",
                "title": "标题",
                "setter": "StringSetter"
              },
              {
                "name": "title.visible",
                "title": "是否展示",
                "setter": "BoolSetter"
              }
            ]
          },
          {
            "name": "xFieldConfig",
            "title": "横坐标",
            "type": "group",
            "display": "block",
            "items": [
              {
                "name": "xField",
                "title": "横坐标标识",
                "display": "inline",
                "setter": "StringSetter",
                "defaultValue": "year",
                "tip": "标题文本",
                "supportVariable": true
              },
              {
                "name": "xFieldAlias",
                "title": "横坐标别名",
                "display": "inline",
                "setter": "StringSetter",
                "setValue": {
                  "type": "JSFunction",
                  "value": "(target, value) => {\n              target\n                .getProps()\n                .setPropValue(\n                  `meta.${target.getProps().getPropValue(\"xField\")}.alias`,\n                  value\n                );\n            }"
                }
              }
            ]
          },
          {
            "name": "yFieldConfig",
            "title": "纵坐标",
            "type": "group",
            "display": "block",
            "items": [
              {
                "name": "yField",
                "title": "纵坐标标识",
                "display": "inline",
                "setter": "StringSetter",
                "defaultValue": "year",
                "tip": "标题文本",
                "supportVariable": true
              },
              {
                "name": "yFieldAlias",
                "title": "纵坐标别名",
                "display": "inline",
                "setter": "StringSetter",
                "setValue": {
                  "type": "JSFunction",
                  "value": "(target, value) => {\n              target\n                .getProps()\n                .setPropValue(\n                  `meta.${target.getProps().getPropValue(\"yField\")}.alias`,\n                  value\n                );\n            }"
                }
              }
            ]
          },
          {
            "name": "data",
            "title": "图表数据",
            "tip": "配置图表数据",
            "setter": "JsonSetter"
          }
        ],
        "supports": {
          "style": true
        }
      }
    },
    {
      "componentName": "DatePicker",
      "title": "日期选择框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "DatePicker",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "name",
          "title": {
            "label": "名称",
            "tip": "name|表单相关"
          },
          "propType": "string",
          "description": "name|表单相关"
        },
        {
          "name": "label",
          "title": {
            "label": "标签",
            "tip": "label|输入框内置标签"
          },
          "propType": "string",
          "description": "label|输入框内置标签"
        },
        {
          "name": "state",
          "title": {
            "label": "状态",
            "tip": "state|输入框状态"
          },
          "propType": {
            "type": "oneOf",
            "value": ["success", "loading", "error"]
          },
          "description": "state|输入框状态"
        },
        {
          "name": "placeholder",
          "title": {
            "label": "占位提示",
            "tip": "placeholder|输入提示"
          },
          "propType": "string",
          "description": "输入提示"
        },
        {
          "name": "value",
          "title": {
            "label": "value",
            "tip": "value|日期值（受控）"
          },
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "日期值（受控）moment 对象"
        },
        {
          "name": "defaultValue",
          "title": {
            "label": "默认值",
            "tip": "defaultValue|初始日期值，moment 对象"
          },
          "propType": "date",
          "description": "defaultValue|初始日期值，moment 对象"
        },
        {
          "name": "format",
          "title": {
            "label": "格式",
            "tip": "format|日期值的格式（用于限定用户输入和展示）"
          },
          "propType": "string",
          "description": "format|日期值的格式（用于限定用户输入和展示）",
          "defaultValue": "YYYY-MM-DD"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "日期值改变时的回调\n@param {MomentObject|String} value 日期值"
        },
        {
          "name": "onOk",
          "propType": "func",
          "description": "点击确认按钮时的回调\n@return {MomentObject|String} 日期值"
        },
        {
          "name": "size",
          "title": {
            "label": "尺寸",
            "tip": "size|输入框尺寸"
          },
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "size|输入框尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "disabled",
          "title": {
            "label": "是否禁用",
            "tip": "disabled|是否禁用"
          },
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "hasClear",
          "title": {
            "label": "清除按钮",
            "tip": "hasClear|是否显示清空按钮"
          },
          "propType": "bool",
          "description": "hasClear|是否显示清空按钮",
          "defaultValue": true
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "跟随滚动"
        },
        {
          "name": "defaultVisible",
          "title": {
            "label": "弹层显示",
            "tip": "defaultVisible|弹层默认是否显示"
          },
          "propType": "bool",
          "description": "defaultVisible|弹层默认是否显示",
          "defaultValue": false
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "form",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "prefix",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            // 日期组件用不了，临时解决方案
            {
              "name": "value",
              "setter": "DateSetter"
              // "condition": {
              //   "type": "JSFunction",
              //   "value": "() => false"
              // }
            },
            {
              "name": "name",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "defaultValue",
              "title": {
                "label": "默认值",
                "tip": "defaultValue|初始日期值，moment 对象"
              },
              "setter": "DateSetter"
            },
            {
              "name": "form",
              "type": "group",
              "title": "高级",
              "display": "block",
              "items": [
                {
                  "name": "id",
                  "title": {
                    "label": {
                      "type": "i18n",
                      "zh-CN": "唯一标识",
                      "en-US": "ID"
                    },
                    "tip": {
                      "type": "i18n",
                      "zh-CN": "属性: id | 说明: 唯一标识",
                      "en-US": "prop: id | description: switch id"
                    }
                  },
                  "setter": "StringSetter"
                },
                {
                  "name": "name",
                  "title": {
                    "label": {
                      "type": "i18n",
                      "zh-CN": "表单标识",
                      "en-US": "Name"
                    },
                    "tip": {
                      "type": "i18n",
                      "zh-CN": "属性: name | 说明: 表单标识",
                      "en-US": "prop: name | description: switch name"
                    }
                  },
                  "setter": "StringSetter"
                }
              ]
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Dialog",
      "title": "对话框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Dialog",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "visible",
          "propType": {
            "type": "oneOfType",
            "value": ["JSExpression", "bool"]
          },
          "description": "是否显示",
          "defaultValue": false
        },
        {
          "name": "title",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "标题"
        },
        {
          "name": "children",
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
          "name": "footer",
          "propType": {
            "type": "oneOfType",
            "value": ["bool"]
          },
          "description": "底部按钮"
        },
        {
          "name": "footerAlign",
          "propType": {
            "type": "oneOf",
            "value": ["left", "center", "right"]
          },
          "description": "操作对齐方式",
          "defaultValue": "right"
        },
        {
          "name": "closeable",
          "propType": {
            "type": "oneOf",
            "value": ["close", "mask", "esc,close", "close,esc,mask", "esc"]
          },
          "description": "关闭方式",
          "defaultValue": "esc,close"
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "对话框关闭时触发的回调函数\n@param {String} trigger 关闭触发行为的描述字符串\n@param {Object} event 关闭时事件对象"
        },
        {
          "name": "hasMask",
          "propType": "bool",
          "description": "是否显示遮罩",
          "defaultValue": true
        },
        {
          "name": "animation",
          "propType": {
            "type": "oneOfType",
            "value": ["object", "bool"]
          },
          "description": "显示隐藏时动画的播放方式\n@property {String} in 进场动画\n@property {String} out 出场动画"
        },
        {
          "name": "autoFocus",
          "propType": "bool",
          "description": "是否获得焦点",
          "defaultValue": false
        },
        {
          "name": "isFullScreen",
          "propType": "bool",
          "description": "是否全屏",
          "defaultValue": false
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "isModal": true,
          "rootSelector": "div.next-dialog",
          "nestingRule": {
            "parentWhitelist": ["Page"]
          }
        },
        "props": [
          {
            "name": "title",
            "title": "标题",
            "setter": "StringSetter",
            "initialValue": "标题"
          },
          {
            "name": "visible",
            "title": "是否显示",
            "setter": "BoolSetter",
            "initialValue": false
          },
          {
            "name": "hasMask",
            "title": "显示遮罩",
            "setter": "BoolSetter",
            "initialValue": true
          },
          {
            "name": "closeMode",
            "title": "关闭方式",
            "setter": {
              "componentName": "SelectSetter",
              "mutiple": true,
              "props": {
                "options": [
                  {
                    "title": "close",
                    "value": "close"
                  },
                  {
                    "title": "mask",
                    "value": "mask"
                  },
                  {
                    "title": "esc",
                    "value": "esc"
                  }
                ]
              }
            },
            "initialValue": ["esc", "close"]
          },
          {
            "name": "autoFocus",
            "title": "自动聚焦",
            "setter": "BoolSetter",
            "initialValue": false
          },
          {
            "name": "buttons",
            "title": "底部按钮配置",
            "type": "group",
            "extraProps": {
              "display": "block"
            },
            "items": [
              {
                "name": "footer",
                "title": "是否显示",
                "setter": "BoolSetter",
                "initialValue": true
              },
              {
                "name": "footerAlign",
                "title": "对齐方式",
                "initialValue": "right",
                "condition": {
                  "type": "JSFunction",
                  "value": "target => {\n              return target.getProps().getPropValue(\"footer\");\n            }"
                },
                "setter": {
                  "componentName": "RadioGroupSetter",
                  "initialValue": "right",
                  "props": {
                    "options": [
                      {
                        "title": "left",
                        "value": "left"
                      },
                      {
                        "title": "center",
                        "value": "center"
                      },
                      {
                        "title": "right",
                        "value": "right"
                      }
                    ]
                  }
                }
              },
              {
                "name": "footerActions",
                "title": "排列方式",
                "initialValue": ["ok", "cancel"],
                "condition": {
                  "type": "JSFunction",
                  "value": "target => {\n              return target.getProps().getPropValue(\"footer\");\n            }"
                },
                "setter": {
                  "componentName": "SelectSetter",
                  "initialValue": ["ok", "cancel"],
                  "props": {
                    "options": [
                      {
                        "title": "ok, cancel",
                        "value": ["ok", "cancel"]
                      },
                      {
                        "title": "cancel, ok",
                        "value": ["cancel", "ok"]
                      },
                      {
                        "title": "cancel",
                        "value": ["cancel"]
                      },
                      {
                        "title": "ok",
                        "value": ["ok"]
                      }
                    ]
                  }
                }
              }
            ]
          }
        ],
        "supports": {
          "events": ["onOk", "onCancel", "onClose"],
          "style": true
        },
        "advanced": {
          "callbacks": {
            "onNodeAdd": {
              "type": "JSFunction",
              "value": "(dragment, currentNode) => {\n        \n        \n        if (\n          !dragment ||\n          [\"NextP\", \"NextBlock\", \"Slot\"].includes(dragment.componentName) ||\n          (dragment.isModal && dragment.isModal())\n        ) {\n          console.log(\n            `[${dragment.componentName}] doesn\\'n need to wrap with NextBlock > NextBlockCell`\n          );\n          return;\n        }\n\n        const NextPProps = {\n          wrap: false,\n          type: \"body2\",\n          verAlign: \"middle\",\n          textSpacing: true,\n          align: \"left\"\n        };\n\n        if (\n          [\n            \"Form\",\n            \"ResponsiveGrid\",\n            \"Box\",\n            \"Card\",\n            \"List\",\n            \"Message\",\n            \"Slider\",\n            \"NextTable\"\n          ].includes(dragment.componentName) ||\n          dragment.getPropValue(\"isFillContainer\")\n        ) {\n          NextPProps.full = true;\n        }\n        const layoutPSchema = {\n          componentName: \"NextP\",\n          title: \"段落\",\n          props: NextPProps,\n          children: [dragment.schema]\n        };\n\n        \n        const layoutBlockNode = len =>\n          currentNode.document.createNode({\n            componentName: \"NextBlock\",\n            title: \"区块\",\n            props: {\n              childTotalColumns: len || 12\n            },\n            children: [\n              {\n                componentName: \"NextBlockCell\",\n                title: \"子区块\",\n                props: {\n                  isAutoContainer: true,\n                  colSpan: 12,\n                  rowSpan: 1\n                },\n                children: [layoutPSchema]\n              }\n            ]\n          });\n\n        const dropLocation = dragment.document.designer.dropLocation;\n\n        if (!dropLocation) {\n          \n          return;\n        }\n        const dropTarget = dropLocation.target;\n        const dropTargetName = dropLocation.target.componentName || \"\";\n\n        \n        const targetId = (dropLocation && dropLocation.target.id) || \"\";\n        \n        let slotTarget =\n          currentNode.slots.length > 0 &&\n          currentNode.slots.find(item => item.id === targetId);\n\n        const layoutPNode = currentNode.document.createNode(layoutPSchema);\n\n        \n        const isAsideSlot =\n          slotTarget && [\"aside\"].indexOf(slotTarget._slotFor.key) > -1;\n        \n        const isNeedPSlot =\n          slotTarget &&\n          [\"header\", \"footer\", \"nav\"].indexOf(slotTarget._slotFor.key) > -1;\n\n        const wrapWithBlock = (dragment, node, dropTargetName, blockLen) => {\n          setTimeout(() => {\n            console.log(\n              `[${dragment.componentName}] to [${dropTargetName}] need to wrap with NextBlock > NextBlockCell > NextP [from NextPage2]`\n            );\n            const newNode = node.document.createNode(\n              layoutBlockNode(blockLen).schema\n            );\n            node.insertBefore(newNode, dragment, false);\n            dragment.remove(false);\n            newNode\n              .getChildren()\n              .get(0)\n              .getChildren()\n              .get(0)\n              .getChildren()\n              .get(0)\n              .select();\n          }, 1);\n        };\n\n        const wrapWithP = (dragment, node, dropTargetName) => {\n          setTimeout(() => {\n            \n            \n            if (dropTargetName === \"NextP\") {\n              console.log(\n                `[${dragment.componentName}] to [${dropTargetName}] does't need to wrap with NextP. [from NextPage3]`\n              );\n              return;\n            }\n\n            console.log(\n              `[${dragment.componentName}] to [${dropTargetName}] need to wrap with NextP [from NextPage3]`\n            );\n            const newNode = node.document.createNode(\n              Object.assign(layoutPNode.schema)\n            );\n            node.insertBefore(newNode, dragment, false);\n            dragment.remove(false);\n            newNode\n              .getChildren()\n              .get(0)\n              .select();\n          }, 1);\n        };\n\n        \n        \n        if (\n          [\"NextPage\"].includes(dropTargetName) &&\n          currentNode.getChildren().has(dragment)\n        ) {\n          wrapWithBlock(dragment, currentNode, dropTargetName, 12);\n\n          \n          \n        } else if (\n          isAsideSlot &&\n          slotTarget &&\n          slotTarget.getChildren().has(dragment)\n        ) {\n          wrapWithBlock(dragment, slotTarget, dropTargetName, 1);\n\n          \n          \n          \n        } else if (\n          dropTarget.getPropValue(\"isAutoContainer\") ||\n          dropTargetName === \"Tab.Item\"\n        ) {\n          wrapWithP(dragment, dropTarget, dropTargetName);\n\n          \n          \n        } else if (isNeedPSlot && slotTarget) {\n          wrapWithP(dragment, slotTarget, dropTargetName);\n        }\n\n        \n      }"
            }
          }
        }
      },
      "icon": "",
      "category": "容器"
    },
    {
      "componentName": "Div",
      "title": "Div",
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Divider",
      "title": "分隔符",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Divider",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "children",
          "propType": "string",
          "description": "文案",
          "defaultValue": "分隔符"
        },
        {
          "name": "dashed",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "是否虚线",
              "en-US": "Dashed"
            }
          },
          "propType": {
            "type": "bool"
          },
          "description": "是否为虚线",
          "defaultValue": false
        },
        {
          "name": "direction",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "朝向",
              "en-US": "Direction"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "线是水平还是垂直类型",
          "defaultValue": "hoz"
        },
        {
          "name": "orientation",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标题位置",
              "en-US": "Orientation"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["left", "right", "center"]
          },
          "description": "分割线标题的位置",
          "defaultValue": "center"
        }
      ],
      "configure": {
        "advanced": {
          "filters": [
            {
              "name": "",
              "filter": {
                "type": "JSFunction",
                "value": "filters"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Drawer.Inner",
      "title": "Drawer.Inner",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Drawer",
        "main": "",
        "destructuring": true,
        "subName": "Inner"
      },
      "props": [
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "closeable",
          "propType": "bool",
          "defaultValue": true
        },
        {
          "name": "role",
          "propType": "string",
          "defaultValue": "dialog"
        },
        {
          "name": "title",
          "propType": "string"
        },
        {
          "name": "placement",
          "propType": {
            "type": "oneOf",
            "value": ["top", "right", "bottom", "left"]
          }
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "onClose",
          "propType": "func"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "headerStyle",
          "propType": "object"
        },
        {
          "name": "bodyStyle",
          "propType": "object"
        },
        {
          "name": "afterClose",
          "propType": "func"
        },
        {
          "name": "beforeOpen",
          "propType": "func"
        },
        {
          "name": "beforeClose",
          "propType": "func"
        },
        {
          "name": "cache",
          "propType": "bool"
        },
        {
          "name": "shouldUpdatePosition",
          "propType": "bool"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Drawer",
      "title": "抽屉",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Drawer",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "prefix",
          "title": {
            "type": "i18n",
            "zh-CN": "前缀",
            "en-US": "prefix"
          },
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "width",
          "title": {
            "type": "i18n",
            "zh-CN": "宽度",
            "en-US": "width",
            "tip": "width|仅在 placement是 left right 的时候生效"
          },
          "propType": {
            "type": "oneOfType",
            "value": ["number", "string"]
          },
          "description": "宽度，仅在 placement是 left right 的时候生效"
        },
        {
          "name": "height",
          "title": {
            "type": "i18n",
            "zh-CN": "高度",
            "en-US": "height",
            "tip": "height|仅在 placement是 top bottom 的时候生效"
          },
          "propType": {
            "type": "oneOfType",
            "value": ["number", "string"]
          },
          "description": "高度，仅在 placement是 top bottom 的时候生效"
        },
        {
          "name": "placement",
          "propType": {
            "type": "oneOf",
            "value": ["top", "right", "bottom", "left"]
          },
          "description": "位于页面的位置",
          "defaultValue": "right"
        },
        {
          "name": "title",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "标题"
        },
        {
          "name": "headerStyle",
          "propType": "object",
          "description": "header上的样式"
        },
        {
          "name": "bodyStyle",
          "propType": "object",
          "description": "body上的样式"
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "是否显示"
        },
        {
          "name": "hasMask",
          "propType": "bool",
          "description": "是否显示遮罩",
          "defaultValue": true
        },
        {
          "name": "onVisibleChange",
          "propType": "func"
        },
        {
          "name": "animation",
          "title": {
            "label": "动画",
            "tip": "animation"
          },
          "propType": "bool",
          "description": "显示隐藏时动画的播放方式\n@property {String} in 进场动画\n@property {String} out 出场动画"
        },
        {
          "name": "closeable",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "bool"]
          },
          "description": "控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：\n**close** 表示点击关闭按钮可以关闭对话框\n**mask** 表示点击遮罩区域可以关闭对话框\n**esc** 表示按下 esc 键可以关闭对话框\n如 'close' 或 'close,esc,mask'\n如果设置为 true，则以上关闭方式全部生效\n如果设置为 false，则以上关闭方式全部失效",
          "defaultValue": true
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "对话框关闭时触发的回调函数\n@param {String} trigger 关闭触发行为的描述字符串\n@param {Object} event 关闭时事件对象"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "isModal": true,
          "rootSelector": ".next-drawer",
          "nestingRule": {
            "parentWhitelist": {
              "type": "JSFunction",
              "value": "(testNode, currentNode) => {\n          return testNode.componentName === \"Page\";\n        }"
            }
          }
        },
        "props": [
          {
            "name": "title",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "标题",
                "en-US": "Title"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: title | 说明: 标题",
                "en-US": "prop: title | description: title"
              }
            },
            "setter": {
              "componentName": "StringSetter"
            },
            "description": "标题"
          },
          {
            "name": "width",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "宽度",
                "en-US": "width"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: width | 说明: 宽度",
                "en-US": "prop: width | description: 仅在 placement是 left right 的时候生效"
              }
            },
            "setter": {
              "componentName": "NumberSetter"
            },
            "description": "宽度，仅在 placement是 left right 的时候生效"
          },
          {
            "name": "height",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "高度",
                "en-US": "height"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: height | 说明: 高度",
                "en-US": "prop: height | description: 仅在 placement是 top bottom 的时候生效"
              }
            },
            "setter": {
              "componentName": "NumberSetter"
            },
            "description": "高度，仅在 placement是 top bottom 的时候生效"
          },
          {
            "name": "placement",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "弹出位置",
                "en-US": "height"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: placement | 说明: 位于页面的位置",
                "en-US": "prop: placement | description: drawer placement"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["top", "right", "bottom", "left"]
              }
            },
            "description": "位于页面的位置",
            "defaultValue": "right"
          },
          {
            "name": "visible",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否显示",
                "en-US": "visible"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: visible | 说明: 是否显示",
                "en-US": "prop: visible | description: drawer visible"
              }
            },
            "setter": "BoolSetter",
            "description": "是否显示"
          },
          {
            "name": "hasMask",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示遮罩",
                "en-US": "hasMask"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasMask | 说明: 是否显示遮罩",
                "en-US": "prop: hasMask | description: drawer hasMask"
              }
            },
            "setter": {
              "componentName": "BoolSetter"
            },
            "description": "是否显示遮罩",
            "defaultValue": true
          },
          {
            "name": "closeable",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示遮罩",
                "en-US": "closeable"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: closeable | 说明: 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：\n**close** 表示点击关闭按钮可以关闭对话框\n**mask** 表示点击遮罩区域可以关闭对话框\n**esc** 表示按下 esc 键可以关闭对话框\n如 'close' 或 'close,esc,mask'\n如果设置为 true，则以上关闭方式全部生效\n如果设置为 false，则以上关闭方式全部失效",
                "en-US": "prop: closeable | description: drawer closeable"
              }
            },
            "setter": {
              "componentName": "BoolSetter"
            },
            "description": "控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：\n**close** 表示点击关闭按钮可以关闭对话框\n**mask** 表示点击遮罩区域可以关闭对话框\n**esc** 表示按下 esc 键可以关闭对话框\n如 'close' 或 'close,esc,mask'\n如果设置为 true，则以上关闭方式全部生效\n如果设置为 false，则以上关闭方式全部失效",
            "defaultValue": true
          }
        ],
        "advanced": {
          "callbacks": {
            "onNodeAdd": {
              "type": "JSFunction",
              "value": "(dragment, currentNode) => {\n        \n        \n        if (\n          !dragment ||\n          [\"NextP\", \"NextBlock\", \"Slot\"].includes(dragment.componentName) ||\n          (dragment.isModal && dragment.isModal())\n        ) {\n          console.log(\n            `[${dragment.componentName}] doesn\\'n need to wrap with NextBlock > NextBlockCell`\n          );\n          return;\n        }\n\n        const NextPProps = {\n          wrap: false,\n          type: \"body2\",\n          verAlign: \"middle\",\n          textSpacing: true,\n          align: \"left\"\n        };\n\n        if (\n          [\n            \"Form\",\n            \"ResponsiveGrid\",\n            \"Box\",\n            \"Card\",\n            \"List\",\n            \"Message\",\n            \"Slider\",\n            \"NextTable\"\n          ].includes(dragment.componentName) ||\n          dragment.getPropValue(\"isFillContainer\")\n        ) {\n          NextPProps.full = true;\n        }\n        const layoutPSchema = {\n          componentName: \"NextP\",\n          title: \"段落\",\n          props: NextPProps,\n          children: [dragment.schema]\n        };\n\n        \n        const layoutBlockNode = len =>\n          currentNode.document.createNode({\n            componentName: \"NextBlock\",\n            title: \"区块\",\n            props: {\n              childTotalColumns: len || 12\n            },\n            children: [\n              {\n                componentName: \"NextBlockCell\",\n                title: \"子区块\",\n                props: {\n                  isAutoContainer: true,\n                  colSpan: 12,\n                  rowSpan: 1\n                },\n                children: [layoutPSchema]\n              }\n            ]\n          });\n\n        const dropLocation = dragment.document.designer.dropLocation;\n\n        if (!dropLocation) {\n          \n          return;\n        }\n        const dropTarget = dropLocation.target;\n        const dropTargetName = dropLocation.target.componentName || \"\";\n\n        \n        const targetId = (dropLocation && dropLocation.target.id) || \"\";\n        \n        let slotTarget =\n          currentNode.slots.length > 0 &&\n          currentNode.slots.find(item => item.id === targetId);\n\n        const layoutPNode = currentNode.document.createNode(layoutPSchema);\n\n        \n        const isAsideSlot =\n          slotTarget && [\"aside\"].indexOf(slotTarget._slotFor.key) > -1;\n        \n        const isNeedPSlot =\n          slotTarget &&\n          [\"header\", \"footer\", \"nav\"].indexOf(slotTarget._slotFor.key) > -1;\n\n        const wrapWithBlock = (dragment, node, dropTargetName, blockLen) => {\n          setTimeout(() => {\n            console.log(\n              `[${dragment.componentName}] to [${dropTargetName}] need to wrap with NextBlock > NextBlockCell > NextP [from NextPage2]`\n            );\n            const newNode = node.document.createNode(\n              layoutBlockNode(blockLen).schema\n            );\n            node.insertBefore(newNode, dragment, false);\n            dragment.remove(false);\n            newNode\n              .getChildren()\n              .get(0)\n              .getChildren()\n              .get(0)\n              .getChildren()\n              .get(0)\n              .select();\n          }, 1);\n        };\n\n        const wrapWithP = (dragment, node, dropTargetName) => {\n          setTimeout(() => {\n            \n            \n            if (dropTargetName === \"NextP\") {\n              console.log(\n                `[${dragment.componentName}] to [${dropTargetName}] does't need to wrap with NextP. [from NextPage3]`\n              );\n              return;\n            }\n\n            console.log(\n              `[${dragment.componentName}] to [${dropTargetName}] need to wrap with NextP [from NextPage3]`\n            );\n            const newNode = node.document.createNode(\n              Object.assign(layoutPNode.schema)\n            );\n            node.insertBefore(newNode, dragment, false);\n            dragment.remove(false);\n            newNode\n              .getChildren()\n              .get(0)\n              .select();\n          }, 1);\n        };\n\n        \n        \n        if (\n          [\"NextPage\"].includes(dropTargetName) &&\n          currentNode.getChildren().has(dragment)\n        ) {\n          wrapWithBlock(dragment, currentNode, dropTargetName, 12);\n\n          \n          \n        } else if (\n          isAsideSlot &&\n          slotTarget &&\n          slotTarget.getChildren().has(dragment)\n        ) {\n          wrapWithBlock(dragment, slotTarget, dropTargetName, 1);\n\n          \n          \n          \n        } else if (\n          dropTarget.getPropValue(\"isAutoContainer\") ||\n          dropTargetName === \"Tab.Item\"\n        ) {\n          wrapWithP(dragment, dropTarget, dropTargetName);\n\n          \n          \n        } else if (isNeedPSlot && slotTarget) {\n          wrapWithP(dragment, slotTarget, dropTargetName);\n        }\n\n        \n      }"
            }
          }
        }
      },
      "icon": "",
      "category": "容器"
    },
    {
      "componentName": "Dropdown",
      "title": "下拉菜单",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Dropdown",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "pure",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层当前是否显示"
        },
        {
          "name": "defaultVisible",
          "propType": "bool",
          "description": "弹层默认是否显示",
          "defaultValue": false
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层显示或隐藏时触发的回调函数\n@param {Boolean} visible 弹层是否显示\n@param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "triggerType",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "instanceOf",
                "value": "array"
              }
            ]
          },
          "description": "触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']",
          "defaultValue": "hover"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "设置此属性，弹层无法显示或隐藏",
          "defaultValue": false
        },
        {
          "name": "align",
          "propType": "string",
          "description": "弹层相对于触发元素的定位, 详见 Overlay 的定位部分",
          "defaultValue": "tl bl"
        },
        {
          "name": "offset",
          "propType": {
            "type": "instanceOf",
            "value": "array"
          },
          "description": "弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量\ne.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px",
          "defaultValue": [0, 0]
        },
        {
          "name": "delay",
          "propType": "number",
          "description": "弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效",
          "defaultValue": 200
        },
        {
          "name": "autoFocus",
          "propType": "bool",
          "description": "弹层打开时是否让其中的元素自动获取焦点"
        },
        {
          "name": "hasMask",
          "propType": "bool",
          "description": "是否显示遮罩",
          "defaultValue": false
        },
        {
          "name": "cache",
          "propType": "bool",
          "description": "隐藏时是否保留子节点",
          "defaultValue": false
        },
        {
          "name": "animation",
          "propType": {
            "type": "oneOfType",
            "value": ["object", "bool"]
          },
          "description": "配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画\n@default { in: 'expandInDown', out: 'expandOutUp' }"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "trigger",
              "title": {
                "label": "触发元素",
                "tip": ""
              },
              "setter": "SlotSetter"
            },
            {
              "name": "animation",
              "title": {
                "label": "animation",
                "tip": "配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画\n@default { in: 'expandInDown', out: 'expandOutUp' }"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": [
                    {
                      "componentName": "ObjectSetter",
                      "props": {
                        "config": {
                          "items": [
                            {
                              "name": "in",
                              "description": "",
                              "setter": "StringSetter",
                              "defaultValue": "enter-class"
                            },
                            {
                              "name": "out",
                              "description": "",
                              "setter": "StringSetter",
                              "defaultValue": "leave-class"
                            }
                          ]
                        }
                      },
                      "initialValue": {
                        "in": "enter-class",
                        "out": "leave-class"
                      }
                    },
                    {
                      "componentName": "BoolSetter",
                      "initialValue": true
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "ErrorBoundary",
      "title": "ErrorBoundary",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "ConfigProvider",
        "main": "",
        "destructuring": true,
        "subName": "ErrorBoundary"
      },
      "props": [
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "element"
          }
        },
        {
          "name": "afterCatch",
          "propType": "func",
          "description": "捕获错误后的自定义处理, 比如埋点上传\n@param {Object} error 错误\n@param {Object} errorInfo 错误详细信息"
        },
        {
          "name": "fallbackUI",
          "propType": "func",
          "description": "捕获错误后的展现 自定义组件\n@param {Object} error 错误\n@param {Object} errorInfo 错误详细信息\n@returns {Element} 捕获错误后的处理"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Field",
      "title": "Field",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Field",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "this",
          "propType": "any"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Form.Error",
      "title": "Form.Error",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Form",
        "main": "",
        "destructuring": true,
        "subName": "Error"
      },
      "props": [
        {
          "name": "name",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "instanceOf",
                "value": "array"
              }
            ]
          },
          "description": "表单名"
        },
        {
          "name": "field",
          "propType": "object",
          "description": "自定义 field (在 Form 内不需要设置)"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "children",
          "propType": {
            "type": "oneOfType",
            "value": [
              {
                "type": "instanceOf",
                "value": "node"
              },
              "func"
            ]
          },
          "description": "自定义错误渲染, 可以是 node 或者 function(errors, state)"
        },
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Form.Item",
      "title": "表单项",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Form",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "label",
          "propType": "string",
          "description": "标签"
        },
        {
          "name": "labelCol",
          "propType": {
            "type": "shape",
            "value": [
              {
                "name": "span",
                "description": "span",
                "propType": "number"
              },
              {
                "name": "offset",
                "description": "offset",
                "propType": "number"
              }
            ]
          },
          "description": "label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效"
        },
        {
          "name": "wrapperCol",
          "propType": {
            "type": "shape",
            "value": [
              {
                "name": "span",
                "description": "span",
                "propType": "number"
              },
              {
                "name": "offset",
                "description": "offset",
                "propType": "number"
              }
            ]
          },
          "description": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol"
        },
        {
          "name": "help",
          "title": {
            "label": "自定义提示信息",
            "tip": "如不设置，则会根据校验规则自动生成."
          },
          "propType": "string",
          "description": "自定义提示信息，如不设置，则会根据校验规则自动生成."
        },
        {
          "name": "extra",
          "title": {
            "label": "额外的提示信息",
            "tip": "和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面"
          },
          "propType": "string",
          "description": "额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面"
        },
        {
          "name": "validateState",
          "title": {
            "label": "校验状态",
            "tip": "如不设置，则会根据校验规则自动生成\n@enumdesc 失败, 成功, 校验中, 警告"
          },
          "propType": {
            "type": "oneOf",
            "value": ["error", "success", "loading", "warning"]
          },
          "description": "校验状态，如不设置，则会根据校验规则自动生成\n@enumdesc 失败, 成功, 校验中, 警告"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        },
        {
          "name": "size",
          "title": {
            "label": "Size",
            "tip": "单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。"
          },
          "propType": {
            "type": "oneOf",
            "value": ["large", "small", "medium"]
          },
          "description": "单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。"
        },
        {
          "name": "fullWidth",
          "title": {
            "label": "fullWidth",
            "tip": "单个 Item 中表单类组件宽度是否是100%"
          },
          "propType": "bool",
          "description": "单个 Item 中表单类组件宽度是否是100%"
        },
        {
          "name": "labelAlign",
          "title": {
            "label": "标签的位置",
            "tip": "上, 左, 内"
          },
          "propType": {
            "type": "oneOf",
            "value": ["top", "left", "inset"]
          },
          "description": "标签的位置\n@enumdesc 上, 左, 内"
        },
        {
          "name": "labelTextAlign",
          "title": {
            "label": "标签的左右对齐方式",
            "tip": "左, 右"
          },
          "propType": {
            "type": "oneOf",
            "value": ["left", "right"]
          },
          "description": "标签的左右对齐方式\n@enumdesc 左, 右"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "扩展class"
        },
        {
          "name": "required",
          "title": {
            "label": "不能为空",
            "tip": "[表单校验] 不能为空"
          },
          "propType": "bool",
          "description": "[表单校验] 不能为空"
        },
        {
          "name": "requiredMessage",
          "title": {
            "label": "自定义错误信息",
            "tip": "[表单校验]为空时自定义错误信息"
          },
          "propType": "string",
          "description": "required 自定义错误信息"
        },
        {
          "name": "min",
          "title": {
            "label": "最小值",
            "tip": "[表单校验] 最小值"
          },
          "propType": "number",
          "description": "[表单校验] 最小值"
        },
        {
          "name": "max",
          "title": {
            "label": "最大值",
            "tip": "[表单校验] 最大值"
          },
          "propType": "number",
          "description": "[表单校验] 最大值"
        },
        {
          "name": "minmaxMessage",
          "title": {
            "label": "min/max message",
            "tip": "[表单校验] min/max 自定义错误信息"
          },
          "propType": "string",
          "description": "min/max 自定义错误信息"
        },
        {
          "name": "minLength",
          "title": {
            "label": "最小长度",
            "tip": "[表单校验] 字符串最小长度 / 数组最小个数"
          },
          "propType": "number",
          "description": "[表单校验] 字符串最小长度 / 数组最小个数"
        },
        {
          "name": "maxLength",
          "title": {
            "label": "最大长度",
            "tip": "[表单校验] 字符串最大长度 / 数组最大个数"
          },
          "propType": "number",
          "description": "[表单校验] 字符串最大长度 / 数组最大个数"
        },
        {
          "name": "minmaxLengthMessage",
          "title": {
            "label": "max|min length error message",
            "tip": "[表单校验] minLength/maxLength 自定义错误信息"
          },
          "propType": "string",
          "description": "minLength/maxLength 自定义错误信息"
        },
        {
          "name": "length",
          "title": {
            "label": "长度",
            "tip": "[表单校验] 字符串精确长度 / 数组精确个数"
          },
          "propType": "number",
          "description": "[表单校验] 字符串精确长度 / 数组精确个数"
        },
        {
          "name": "lengthMessage",
          "title": {
            "label": "length error message",
            "tip": "[表单校验] minLength/maxLength 自定义错误信息"
          },
          "propType": "string",
          "description": "length 自定义错误信息"
        },
        {
          "name": "pattern",
          "title": {
            "label": "正则",
            "tip": "[表单校验] 正则校验"
          },
          "propType": "string",
          "description": "正则校验"
        },
        {
          "name": "patternMessage",
          "title": {
            "label": "pattern error message",
            "tip": "[表单校验] pattern 自定义错误信息"
          },
          "propType": "string",
          "description": "pattern 自定义错误信息"
        },
        {
          "name": "format",
          "title": {
            "label": "format",
            "tip": "[表单校验] 四种常用的 pattern"
          },
          "propType": {
            "type": "oneOf",
            "value": ["number", "email", "url", "tel"]
          },
          "description": "[表单校验] 四种常用的 pattern"
        },
        {
          "name": "formatMessage",
          "title": {
            "label": "format error message",
            "tip": "[表单校验] format 自定义错误信息"
          },
          "propType": "string",
          "description": "format 自定义错误信息"
        },
        {
          "name": "validator",
          "propType": "func",
          "description": "[表单校验] 自定义校验函数"
        },
        {
          "name": "autoValidate",
          "propType": "bool",
          "description": "是否修改数据时自动触发校验"
        },
        {
          "name": "device",
          "propType": {
            "type": "oneOf",
            "value": ["phone", "tablet", "desktop"]
          },
          "description": "预设屏幕宽度"
        },
        {
          "name": "responsive",
          "propType": "bool"
        },
        {
          "name": "colSpan",
          "propType": "number",
          "description": "在响应式布局模式下，表单项占多少列"
        },
        {
          "name": "labelWidth",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "number"]
          },
          "description": "在响应式布局下，且label在左边时，label的宽度是多少",
          "defaultValue": 100
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否开启预览态"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Form"]
          }
        },
        "supports": {
          "style": true
        },
        "props": [
          {
            "name": "label",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "标签文本",
                "en-US": "Label"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: label | 说明: 标签文本内容",
                "en-US": "prop: label | description: label content"
              }
            },
            "setter": "StringSetter",
            "description": "标签"
          },
          {
            "name": "help",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "错误提示",
                "en-US": "Help Info"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: help | 说明: 自定义提示信息, 如不设置，则会根据校验规则自动生成.",
                "en-US": "prop: help | description: help infomation"
              }
            },
            "setter": "StringSetter",
            "description": "自定义提示信息，如不设置，则会根据校验规则自动生成."
          },
          {
            "name": "extra",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "帮助提示",
                "en-US": "Extra Info"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: extra | 说明: 额外的提示信息, 和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面",
                "en-US": "prop: extra | description: extra infomation"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "validateState",
            "title": {
              "label": "校验状态",
              "tip": "如不设置，则会根据校验规则自动生成\n@enumdesc 失败, 成功, 校验中, 警告"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["error", "success", "loading", "warning"]
              }
            }
          },
          {
            "name": "size",
            "title": {
              "label": "尺寸",
              "tip": "单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "labelAlign",
            "title": {
              "label": "标签位置",
              "tip": "上, 左, 内"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["top", "left", "inset"]
              }
            },
            "defaultValue": "left"
          },
          {
            "name": "labelTextAlign",
            "title": {
              "label": "标签对齐",
              "tip": "左, 右"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["left", "right"]
              }
            },
            "defaultValue": "left"
          },
          {
            "name": "device",
            "title": {
              "label": "设备"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["phone", "tablet", "desktop"]
              }
            },
            "defaultValue": "desktop"
          },
          {
            "name": "fullWidth",
            "title": {
              "label": "宽度占满",
              "tip": "单个 Item 中表单类组件宽度是否是100%"
            },
            "setter": "BoolSetter",
            "description": "单个 Item 中表单类组件宽度是否是100%"
          },
          {
            "name": "isPreview",
            "title": {
              "label": "预览态"
            },
            "setter": "BoolSetter",
            "description": "是否开启预览态"
          },
          {
            "name": "autoValidate",
            "title": {
              "label": "自动校验"
            },
            "setter": "BoolSetter",
            "description": "是否修改数据时自动触发校验"
          },
          {
            "type": "group",
            "display": "accordion",
            "title": "校验",
            "items": [
              {
                "type": "group",
                "display": "popup",
                "title": "非空校验",
                "items": [
                  {
                    "name": "required",
                    "title": {
                      "label": "不能为空",
                      "tip": "[表单校验] 不能为空"
                    },
                    "setter": "BoolSetter",
                    "description": "[表单校验] 不能为空"
                  },
                  {
                    "name": "requiredMessage",
                    "title": {
                      "label": "错误信息",
                      "tip": "[表单校验]为空时自定义错误信息"
                    },
                    "setter": "StringSetter",
                    "description": "required 自定义错误信息"
                  }
                ]
              },
              {
                "type": "group",
                "display": "popup",
                "title": "最大/最小值校验",
                "items": [
                  {
                    "name": "min",
                    "title": {
                      "label": "最小值",
                      "tip": "[表单校验] 最小值"
                    },
                    "setter": "NumberSetter",
                    "description": "[表单校验] 最小值"
                  },
                  {
                    "name": "max",
                    "title": {
                      "label": "最大值",
                      "tip": "[表单校验] 最大值"
                    },
                    "setter": "NumberSetter",
                    "description": "[表单校验] 最大值"
                  },
                  {
                    "name": "minmaxMessage",
                    "title": {
                      "label": "错误信息",
                      "tip": "[表单校验] min/max 自定义错误信息"
                    },
                    "setter": "StringSetter"
                  }
                ]
              },
              {
                "type": "group",
                "display": "popup",
                "title": "最大/最小长度校验",
                "items": [
                  {
                    "name": "minLength",
                    "title": {
                      "label": "最小长度",
                      "tip": "[表单校验] 字符串最小长度 / 数组最小个数"
                    },
                    "setter": "NumberSetter",
                    "description": "[表单校验] 字符串最小长度 / 数组最小个数"
                  },
                  {
                    "name": "maxLength",
                    "title": {
                      "label": "最大长度",
                      "tip": "[表单校验] 字符串最大长度 / 数组最大个数"
                    },
                    "setter": "NumberSetter",
                    "description": "[表单校验] 字符串最大长度 / 数组最大个数"
                  },
                  {
                    "name": "minmaxLengthMessage",
                    "title": {
                      "label": "错误信息",
                      "tip": "[表单校验] minLength/maxLength 自定义错误信息"
                    },
                    "setter": "StringSetter",
                    "description": "minLength/maxLength 自定义错误信息"
                  }
                ]
              },
              {
                "type": "group",
                "display": "popup",
                "title": "长度校验",
                "items": [
                  {
                    "name": "length",
                    "title": {
                      "label": "长度",
                      "tip": "[表单校验] 字符串精确长度 / 数组精确个数"
                    },
                    "setter": "NumberSetter",
                    "description": "[表单校验] 字符串精确长度 / 数组精确个数"
                  },
                  {
                    "name": "lengthMessage",
                    "title": {
                      "label": "错误信息",
                      "tip": "[表单校验] minLength/maxLength 自定义错误信息"
                    },
                    "setter": "StringSetter",
                    "description": "length 自定义错误信息"
                  }
                ]
              },
              {
                "type": "group",
                "display": "popup",
                "title": "正则校验",
                "items": [
                  {
                    "name": "pattern",
                    "title": {
                      "label": "正则",
                      "tip": "[表单校验] 正则校验"
                    },
                    "setter": "StringSetter",
                    "description": "正则校验"
                  },
                  {
                    "name": "patternMessage",
                    "title": {
                      "label": "错误信息",
                      "tip": "[表单校验] pattern 自定义错误信息"
                    },
                    "setter": "StringSetter",
                    "description": "pattern 自定义错误信息"
                  }
                ]
              },
              {
                "type": "group",
                "display": "popup",
                "title": "格式化校验",
                "items": [
                  {
                    "name": "format",
                    "title": {
                      "label": "format",
                      "tip": "[表单校验] 四种常用的 pattern"
                    },
                    "setter": {
                      "componentName": "RadioGroupSetter",
                      "props": {
                        "options": ["number", "email", "url", "tel"]
                      }
                    },
                    "description": "[表单校验] 四种常用的 pattern"
                  },
                  {
                    "name": "formatMessage",
                    "title": {
                      "label": "错误信息",
                      "tip": "[表单校验] format 自定义错误信息"
                    },
                    "setter": "StringSetter",
                    "description": "format 自定义错误信息"
                  }
                ]
              },
              {
                "name": "validator",
                "display": "popup",
                "title": {
                  "label": "自定义校验函数"
                },
                "setter": "FunctionSetter",
                "description": "[表单校验] 自定义校验函数"
              }
            ]
          },
          {
            "type": "group",
            "title": "布局",
            "display": "accordion",
            "items": [
              {
                "name": "labelCol",
                "display": "inline",
                "setter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "span",
                          "description": "span",
                          "setter": "NumberSetter"
                        },
                        {
                          "name": "offset",
                          "description": "offset",
                          "setter": "NumberSetter"
                        }
                      ]
                    }
                  }
                },
                "description": "label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效"
              },
              {
                "name": "wrapperCol",
                "display": "inline",
                "setter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "span",
                          "description": "span",
                          "setter": "NumberSetter"
                        },
                        {
                          "name": "offset",
                          "description": "offset",
                          "setter": "NumberSetter"
                        }
                      ]
                    }
                  }
                },
                "description": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol"
              }
            ]
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "advanced": {
          "callbacks": {
            "onNodeRemove": {
              "type": "JSFunction",
              "value": "(removedNode, currentNode) => {\n        if (!removedNode || !currentNode) {\n          return;\n        }\n        const children = currentNode.children;\n        \n        if (children && children.length === 0) {\n          currentNode.remove();\n        }\n      }"
            }
          }
        }
      },
      "icon": "https://img.alicdn.com/tfs/TB1nYqOuW61gK0jSZFlXXXDKFXa-112-64.png",
      "category": "内容"
    },
    {
      "componentName": "Form.Reset",
      "title": "重置按钮",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Form",
        "main": "",
        "destructuring": true,
        "subName": "Reset"
      },
      "props": [
        {
          "name": "onClick",
          "propType": "func",
          "description": "点击提交后触发"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "children",
          "title": "内容",
          "propType": "string"
        },
        {
          "name": "icon",
          "propType": "string",
          "description": "自定义内联样式"
        },
        {
          "name": "type",
          "title": "类型",
          "propType": {
            "type": "oneOf",
            "value": ["primary", "secondary", "normal"]
          },
          "description": "按钮的类型",
          "defaultValue": "normal"
        },
        {
          "name": "size",
          "title": "尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "按钮的尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "iconSize",
          "title": "Icon 尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl"]
          },
          "defaultValue": "small",
          "description": "按钮中 Icon 的尺寸，用于替代 Icon 的默认大小"
        },
        {
          "name": "ghost",
          "title": "ghost",
          "propType": {
            "type": "oneOf",
            "value": [true, false, "light", "dark"]
          },
          "description": "是否为幽灵按钮",
          "defaultValue": false
        },
        {
          "name": "toDefault",
          "propType": "bool",
          "description": "返回默认值"
        },
        {
          "name": "loading",
          "title": "loading",
          "propType": "bool",
          "description": "设置按钮的载入状态",
          "defaultValue": false
        },
        {
          "name": "text",
          "title": "text",
          "propType": "bool",
          "description": "是否为文本按钮",
          "defaultValue": false
        },
        {
          "name": "warning",
          "title": "warning",
          "propType": "bool",
          "description": "是否为警告按钮",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "title": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "onMouseUp",
          "propType": "func"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "icon",
              "setter": "IconSetter",
              "setValue": {
                "type": "JSFunction",
                "value": "(target, value) => {\n            target.nodes[0].children.import(value && {\"componentName\": \"Icon\", \"props\": {\"type\": value, \"style\": {\"marginRight\": 5}}}, true);\n          }"
              }
            },
            {
              "name": "children",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "文本内容",
                  "en-US": "content"
                },
                "tip": "按钮文本内容"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["StringSetter", "ExpressionSetter"]
                }
              }
            }
          ]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Form.Submit",
      "title": "提交按钮",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Form",
        "main": "",
        "destructuring": true,
        "subName": "Submit"
      },
      "props": [
        {
          "name": "onClick",
          "propType": "func",
          "description": "点击提交后触发\n@param {Object} value 数据\n@param {Object} errors 错误数据\n@param {class} field 实例"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "children",
          "title": "内容",
          "propType": "string"
        },
        {
          "name": "icon",
          "propType": "string",
          "description": "自定义内联样式"
        },
        {
          "name": "type",
          "title": "类型",
          "propType": {
            "type": "oneOf",
            "value": ["primary", "secondary", "normal"]
          },
          "description": "按钮的类型",
          "defaultValue": "normal"
        },
        {
          "name": "size",
          "title": "尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "按钮的尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "iconSize",
          "title": "Icon 尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl"]
          },
          "defaultValue": "small",
          "description": "按钮中 Icon 的尺寸，用于替代 Icon 的默认大小"
        },
        {
          "name": "ghost",
          "title": "ghost",
          "propType": {
            "type": "oneOf",
            "value": [true, false, "light", "dark"]
          },
          "description": "是否为幽灵按钮",
          "defaultValue": false
        },
        {
          "name": "validate",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "是否校验",
              "en-US": "Validate"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: validate | 说明: 是否校验/需要校验的 name 数组",
              "en-US": "prop: validate | description: validate or validate array"
            }
          },
          "propType": {
            "type": "oneOfType",
            "value": [
              "bool",
              {
                "type": "instanceOf",
                "value": "array"
              }
            ]
          },
          "description": "是否校验/需要校验的 name 数组"
        },
        {
          "name": "loading",
          "title": "loading",
          "propType": "bool",
          "description": "设置按钮的载入状态",
          "defaultValue": false
        },
        {
          "name": "text",
          "title": "text",
          "propType": "bool",
          "description": "是否为文本按钮",
          "defaultValue": false
        },
        {
          "name": "warning",
          "title": "warning",
          "propType": "bool",
          "description": "是否为警告按钮",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "title": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "onMouseUp",
          "propType": "func"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "disabled",
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["ExpressionSetter", "BoolSetter"]
                }
              }
            },
            {
              "name": "icon",
              "setter": "IconSetter",
              "extraProps": {
                "defaultValue": "",
                "onChange": {
                  "type": "JSFunction",
                  "value": "(val, field, editor) => {\n  field.nodes[0].children.import(val && {\"componentName\": \"Icon\", \"props\": {\"type\": val, \"style\": {\"marginRight\": 5}}}, true); //field.top.setPropValue('children', [{\"componentName\": \"Icon\", \"props\": {\"type\": val}}, (field.top.getPropValue('children') || []).slice(-1)]);\n}"
                }
              }
            },
            {
              "name": "children",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "文本内容",
                  "en-US": "content"
                },
                "tip": "按钮文本内容"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["StringSetter", "ExpressionSetter"]
                }
              }
            }
          ]
        },
        "advanced": {
          "initials": [
            {
              "name": "htmlType",
              "initial": {
                "type": "JSFunction",
                "value": "() => \"submit\""
              }
            }
          ]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Form",
      "title": "表单容器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Form",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "inline",
          "propType": "bool",
          "description": "内联表单"
        },
        {
          "name": "size",
          "title": {
            "label": "Size",
            "tip": "单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小"
          },
          "propType": {
            "type": "oneOf",
            "value": ["large", "medium", "small"]
          },
          "description": "单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小",
          "defaultValue": "medium"
        },
        {
          "name": "fullWidth",
          "propType": "bool",
          "description": "单个 Item 中表单类组件宽度是否是100%"
        },
        {
          "name": "labelAlign",
          "title": {
            "label": "标签的位置",
            "tip": "上, 左, 内"
          },
          "propType": {
            "type": "oneOf",
            "value": ["top", "left", "inset"]
          },
          "description": "标签的位置\n@enumdesc 上, 左, 内",
          "defaultValue": "left"
        },
        {
          "name": "labelTextAlign",
          "propType": {
            "type": "oneOf",
            "value": ["left", "right"]
          },
          "description": "标签的左右对齐方式\n@enumdesc 左, 右"
        },
        {
          "name": "onSubmit",
          "propType": "func",
          "description": "form内有 `htmlType=\"submit\"` 的元素的时候会触发"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "扩展class"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        },
        {
          "name": "value",
          "propType": {
            "type": "oneOfType",
            "value": ["Json", "JSExpression"]
          },
          "description": "表单数值"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "表单变化回调\n@param {Object} values 表单数据\n@param {Object} item 详细\n@param {String} item.name 变化的组件名\n@param {String} item.value 变化的数据\n@param {Object} item.field field 实例"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "device",
          "propType": {
            "type": "oneOf",
            "value": ["phone", "tablet", "desktop"]
          },
          "description": "预设屏幕宽度",
          "defaultValue": "desktop"
        },
        {
          "name": "responsive",
          "propType": "bool",
          "description": "是否开启内置的响应式布局 （使用ResponsiveGrid）"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否开启预览态"
        },
        {
          "name": "field",
          "propType": "any",
          "description": "field 实例"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": [
          {
            "name": "inline",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "内联表单",
                "en-US": "Inline"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: inline | 说明: 内联表单",
                "en-US": "prop: inline | description: inline form"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "fullWidth",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "宽度占满",
                "en-US": "FullWidth"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: fullWidth | 说明: 单个 Item 中表单类组件宽度是否是100%",
                "en-US": "prop: fullWidth | description: full width"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "isPreview",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "预览态",
                "en-US": "Preview Mode"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: isPreview | 说明: 是否开启预览态",
                "en-US": "prop: isPreview | description: preview mode"
              }
            },
            "setter": "BoolSetter",
            "description": "是否开启预览态"
          },
          {
            "name": "field",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "Field 实例",
                "en-US": "Field"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: field | 说明: 传入 Field 实例",
                "en-US": "prop: field | description: field instance"
              },
              "docUrl": "https://fusion.alibaba-inc.com/pc/component/basic/form#%E5%A4%8D%E6%9D%82%E5%8A%9F%E8%83%BD(Field)"
            },
            "setter": {
              "componentName": "ExpressionSetter"
            }
          },
          {
            "name": "value",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "表单值",
                "en-US": "value"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: value | 说明: 表单值",
                "en-US": "prop: value | description: value instance"
              }
            },
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["JsonSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "size",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "尺寸",
                "en-US": "Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小",
                "en-US": "prop: size | description: size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["large", "medium", "small"]
              }
            },
            "description": "单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小",
            "defaultValue": "medium"
          },
          {
            "name": "labelAlign",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "标签位置",
                "en-US": "Label Align"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: labelAlign | 说明: 标签的位置\n@enumdesc 上, 左, 内",
                "en-US": "prop: labelAlign | description: label align"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["top", "left", "inset"]
              }
            },
            "defaultValue": "left"
          },
          {
            "name": "labelTextAlign",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "标签对齐",
                "en-US": "Text Align"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: labelTextAlign | 说明: 标签的左右对齐方式\n@enumdesc 左, 右",
                "en-US": "prop: labelTextAlign | description: label text align"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["left", "right"]
              }
            },
            "defaultValue": "left"
          },
          {
            "name": "device",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "设备",
                "en-US": "Device"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: device | 说明: 预设屏幕宽度",
                "en-US": "prop: device | description: device"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["phone", "tablet", "desktop"]
              }
            },
            "defaultValue": "desktop"
          }
        ],
        "supports": {
          "style": true,
          "events": ["saveField", "onSubmit", "onChange"]
        },
        "advanced": {
          "callbacks": {
            "onNodeAdd": {
              "type": "JSFunction",
              "value": "(dragment, currentNode) => {\n        \n        if (!dragment || dragment.componentName === \"Form.Item\") {\n          return;\n        }\n        \n        const layoutPNode = currentNode.document.createNode({\n          componentName: \"Form.Item\",\n          title: \"表单项\",\n          props: {\n            label: \"表单项: \"\n          },\n          children: [dragment.schema]\n        });\n        \n        setTimeout(() => {\n          if (!currentNode.getChildren().has(dragment)) {\n            return;\n          }\n          const newNode = currentNode.document.createNode(Object.assign(layoutPNode.schema));\n          currentNode.insertBefore(newNode, dragment, false);\n          dragment.remove(false);\n          newNode.getChildren().get(0).select();\n        }, 1);\n      }"
            }
          }
        }
      },
      "icon": "https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png",
      "category": "内容"
    },
    {
      "componentName": "Group",
      "title": "Group",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Nav",
        "main": "",
        "destructuring": true,
        "subName": "Group"
      },
      "props": [
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标签内容"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "导航项和子导航"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Icon",
      "title": "图标",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Icon",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "type",
          "propType": "string",
          "description": "指定显示哪种图标"
        },
        {
          "name": "size",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "图标尺寸",
              "en-US": "Icon Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: size | 说明: 指定图标大小",
              "en-US": "prop: size | description: icon size"
            }
          },
          "propType": {
            "type": "oneOfType",
            "value": [
              {
                "type": "oneOf",
                "value": ["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl", "inherit"]
              },
              "number"
            ]
          },
          "description": "指定图标大小",
          "defaultValue": "medium"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "type",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "图标类型",
                  "en-US": "Icon"
                },
                "tip": {
                  "type": "i18n",
                  "zh-CN": "属性: type | 说明: 图标类型",
                  "en-US": "prop: type | description: icon type"
                }
              },
              "setter": {
                "componentName": "IconSetter",
                "props": {
                  "hasClear": false
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Image",
      "title": "图片",
      "npm": {
        "package": "@alifd/ali-lowcode-components",
        "version": "latest",
        "exportName": "Image",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "src",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "图片链接",
              "en-US": "Image Address"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: src | 说明: 图片链接",
              "en-US": "prop: src | description: image address"
            }
          },
          "propType": "string",
          "defaultValue": "https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg"
        },
        {
          "name": "title",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标题",
              "en-US": "Title"
            }
          },
          "propType": "string"
        },
        {
          "name": "alt",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "代替文本",
              "en-US": "Alt"
            }
          },
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "icon": "",
      "category": "常用"
    },
    {
      "componentName": "Inner",
      "title": "Inner",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Dialog",
        "main": "",
        "destructuring": true,
        "subName": "Inner"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "title",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "footer",
          "propType": {
            "type": "oneOfType",
            "value": [
              "bool",
              {
                "type": "instanceOf",
                "value": "node"
              }
            ]
          }
        },
        {
          "name": "footerAlign",
          "propType": {
            "type": "oneOf",
            "value": ["left", "center", "right"]
          },
          "defaultValue": "right"
        },
        {
          "name": "footerActions",
          "propType": {
            "type": "instanceOf",
            "value": "array"
          },
          "defaultValue": ["ok", "cancel"]
        },
        {
          "name": "onOk",
          "propType": "func"
        },
        {
          "name": "onCancel",
          "propType": "func"
        },
        {
          "name": "okProps",
          "propType": "object"
        },
        {
          "name": "cancelProps",
          "propType": "object"
        },
        {
          "name": "closeable",
          "propType": "bool",
          "defaultValue": true
        },
        {
          "name": "onClose",
          "propType": "func"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "role",
          "propType": "string",
          "defaultValue": "dialog"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "height",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Input.Group",
      "title": "Input.Group",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Input",
        "main": "",
        "destructuring": true,
        "subName": "Group"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "description": "样式前缀",
          "defaultValue": "next-"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "addonBefore",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "输入框前附加内容"
        },
        {
          "name": "addonBeforeClassName",
          "propType": "string",
          "description": "输入框前附加内容css"
        },
        {
          "name": "addonAfter",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "输入框后附加内容"
        },
        {
          "name": "addonAfterClassName",
          "propType": "string",
          "description": "输入框后额外css"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "description": "rtl"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Input.Password",
      "title": "密码框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Input",
        "main": "",
        "destructuring": true,
        "subName": "Password"
      },
      "props": [
        {
          "name": "name",
          "propType": "string"
        },
        {
          "name": "showToggle",
          "propType": "bool",
          "description": "是否展示切换按钮",
          "defaultValue": true
        },
        {
          "name": "label",
          "propType": "string",
          "title": "标签文案",
          "description": "label"
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "是否出现清除按钮"
        },
        {
          "name": "state",
          "title": "状态",
          "propType": {
            "type": "oneOf",
            "value": ["error", "loading", "success", "warning"]
          },
          "description": "状态\n@enumdesc 错误, 校验中, 成功, 警告"
        },
        {
          "name": "size",
          "title": "尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "尺寸\n@enumdesc 小, 中, 大",
          "defaultValue": "medium"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "maxLength",
          "propType": "number",
          "description": "最大长度"
        },
        {
          "name": "hasLimitHint",
          "propType": "bool",
          "description": "是否展现最大长度样式"
        },
        {
          "name": "cutString",
          "propType": "bool",
          "description": "是否截断超出字符串"
        },
        {
          "name": "readOnly",
          "propType": "bool",
          "description": "是否只读"
        },
        {
          "name": "trim",
          "propType": "bool",
          "description": "onChange返回会自动去除头尾空字符"
        },
        {
          "name": "placeholder",
          "propType": "string",
          "description": "输入提示"
        },
        {
          "name": "hasBorder",
          "propType": "bool",
          "description": "是否有边框"
        },
        {
          "name": "onPressEnter",
          "propType": "func",
          "description": "按下回车的回调"
        },
        {
          "name": "onClear",
          "propType": "func"
        },
        {
          "name": "onChange",
          "propType": "func"
        },
        {
          "name": "onKeyDown",
          "propType": "func"
        },
        {
          "name": "onFocus",
          "propType": "func"
        },
        {
          "name": "onBlur",
          "propType": "func"
        },
        {
          "name": "hint",
          "title": "Icon 水印",
          "propType": "string",
          "description": "水印 (Icon的type类型，和hasClear占用一个地方)"
        },
        {
          "name": "innerBefore",
          "propType": "string",
          "description": "文字前附加内容"
        },
        {
          "name": "innerAfter",
          "propType": "string",
          "description": "文字后附加内容"
        },
        {
          "name": "addonBefore",
          "propType": "string",
          "description": "输入框前附加内容"
        },
        {
          "name": "addonAfter",
          "propType": "string",
          "description": "输入框后附加内容"
        },
        {
          "name": "addonTextBefore",
          "propType": "string",
          "description": "输入框前附加文字"
        },
        {
          "name": "addonTextAfter",
          "propType": "string",
          "description": "输入框后附加文字"
        },
        {
          "name": "autoFocus",
          "propType": "bool",
          "description": "自动聚焦"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "label",
            "setter": "StringSetter",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "标签文本",
                "en-US": "Label"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: label | 说明: 标签文本内容",
                "en-US": "prop: label | description: label content"
              }
            },
            "description": "label"
          },
          {
            "name": "maxLength",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "最大长度",
                "en-US": "MaxLength"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: maxLength | 说明: 最大长度",
                "en-US": "prop: maxLength | description: max length"
              }
            },
            "setter": "NumberSetter",
            "description": "最大长度"
          },
          {
            "name": "placeholder",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入提示",
                "en-US": "Placeholder"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: placeholder | 说明: 输入提示",
                "en-US": "prop: placeholder | description: placeholder"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "state",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "状态",
                "en-US": "State"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: state | 说明: 状态\n@enumdesc 错误, 校验中, 成功, 警告",
                "en-US": "prop: state | description: input state"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["error", "loading", "success", "warning"]
              }
            }
          },
          {
            "name": "size",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "尺寸",
                "en-US": "Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大",
                "en-US": "prop: size | description: size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "showToggle",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示切换",
                "en-US": "Show Togger"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: showToggle | 说明: 是否展示切换按钮",
                "en-US": "prop: showToggle | description: show togger icon"
              }
            },
            "setter": "BoolSetter",
            "defaultValue": true
          },
          {
            "name": "hasClear",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示清除",
                "en-US": "Show Clear"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasClear | 说明: 是否出现清除按钮",
                "en-US": "prop: hasClear | description: show clear icon"
              }
            },
            "setter": "BoolSetter",
            "description": "是否出现清除按钮"
          },
          {
            "name": "disabled",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否禁用",
                "en-US": "Disabled"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: disabled | 说明: 是否被禁用",
                "en-US": "prop: disabled | description: disabled"
              }
            },
            "setter": "BoolSetter",
            "description": "是否禁用"
          },
          {
            "name": "hasLimitHint",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "展示限制",
                "en-US": "ShowLimit"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasLimitHint | 说明: 是否展现最大长度样式",
                "en-US": "prop: hasLimitHint | description: hasLimitHint"
              }
            },
            "setter": "BoolSetter",
            "description": "是否展现最大长度样式"
          },
          {
            "name": "cutString",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否截断",
                "en-US": "Cut Off"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: cutString | 说明: 是否截断超出字符串",
                "en-US": "prop: cutString | description: whether cut off string"
              }
            },
            "setter": "BoolSetter",
            "description": "是否截断超出字符串"
          },
          {
            "name": "readOnly",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否只读",
                "en-US": "ReadOnly"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: readOnly | 说明: 是否只读",
                "en-US": "prop: readOnly | description: ReadOnly"
              }
            },
            "setter": "BoolSetter",
            "description": "是否只读"
          },
          {
            "name": "trim",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否 Trim",
                "en-US": "Trim"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: trim | 说明: onChange返回会自动去除头尾空字符",
                "en-US": "prop: trim | description: whether trim when onChange called"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "hasBorder",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示边框",
                "en-US": "ShowBorder"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasBorder | 说明: 是否有边框",
                "en-US": "prop: hasBorder | description: HasBorder"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "autoFocus",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "自动聚焦",
                "en-US": "Auto Focus"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: autoFocus | 说明: 自动聚焦",
                "en-US": "prop: autoFocus | description: autoFocus"
              }
            },
            "setter": "BoolSetter",
            "description": "自动聚焦"
          },
          {
            "name": "hint",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "Icon 水印",
                "en-US": "IconHint"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hint | 说明: Icon 水印",
                "en-US": "prop: hint | description: Icon hint"
              }
            },
            "setter": {
              "componentName": "IconSetter"
            }
          },
          {
            "name": "innerBefore",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "文字前附加内容",
                "en-US": "Inner Before"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: innerBefore | 说明: 文字前附加内容",
                "en-US": "prop: innerBefore | description: innerBefore"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "innerAfter",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "文字后附加内容",
                "en-US": "Inner After"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: innerAfter | 说明: 文字后附加内容",
                "en-US": "prop: innerAfter | description: innerAfter"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonBefore",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框前附加内容",
                "en-US": "Addon Before"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonBefore | 说明: 输入框前附加内容",
                "en-US": "prop: addonBefore | description: addonBefore"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonAfter",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框后附加内容",
                "en-US": "Addon After"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonAfter | 说明: 输入框后附加内容",
                "en-US": "prop: addonAfter | description: addonAfter"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonTextBefore",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框前附加文字",
                "en-US": "Text Before"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonTextBefore | 说明: 输入框前附加文字",
                "en-US": "prop: addonTextBefore | description: addonTextBefore"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonTextAfter",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框后附加文字",
                "en-US": "Text After"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonTextAfter | 说明: 输入框后附加文字",
                "en-US": "prop: addonTextAfter | description: addonTextAfter"
              }
            },
            "setter": "StringSetter"
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true,
          "events": ["onPressEnter", "onClear", "onChange", "onKeyDown", "onFocus", "onBlur"]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Input.TextArea",
      "title": "多行文本框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Input",
        "main": "",
        "destructuring": true,
        "subName": "TextArea"
      },
      "props": [
        {
          "name": "hasBorder",
          "propType": "bool",
          "description": "是否有边框",
          "defaultValue": true
        },
        {
          "name": "state",
          "propType": {
            "type": "oneOf",
            "value": ["error", "warning"]
          },
          "description": "状态\n@enumdesc 错误"
        },
        {
          "name": "autoHeight",
          "propType": "bool",
          "description": "自动高度 true / {minRows: 2, maxRows: 4}",
          "defaultValue": false
        },
        {
          "name": "rows",
          "propType": "number",
          "description": "多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)",
          "defaultValue": 4
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态",
          "defaultValue": false
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "onClear",
          "propType": "func"
        },
        {
          "name": "onChange",
          "propType": "func"
        },
        {
          "name": "onKeyDown",
          "propType": "func"
        },
        {
          "name": "onFocus",
          "propType": "func"
        },
        {
          "name": "onBlur",
          "propType": "func"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "rows",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "行数",
                "en-US": "Rows"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: rows | 说明: 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)",
                "en-US": "prop: rows | description: row numbers"
              }
            },
            "setter": "NumberSetter",
            "defaultValue": 4
          },
          {
            "name": "maxLength",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "最大长度",
                "en-US": "MaxLength"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: maxLength | 说明: 最大长度",
                "en-US": "prop: maxLength | description: max length"
              }
            },
            "setter": "NumberSetter",
            "description": "最大长度"
          },
          {
            "name": "placeholder",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入提示",
                "en-US": "Placeholder"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: placeholder | 说明: 输入提示",
                "en-US": "prop: placeholder | description: placeholder"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "state",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "状态",
                "en-US": "State"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: state | 说明: 状态\n@enumdesc 错误",
                "en-US": "prop: state | description: input state"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["error", "warning"]
              }
            }
          },
          {
            "name": "autoHeight",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "自动高度",
                "en-US": "Auto Height"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: autoHeight | 说明: 自动高度 true / {minRows: 2, maxRows: 4}",
                "en-US": "prop: autoHeight | description: auto height"
              }
            },
            "setter": "BoolSetter",
            "defaultValue": false
          },
          {
            "name": "isPreview",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "预览态",
                "en-US": "Preview"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: isPreview | 说明: 是否为预览态",
                "en-US": "prop: isPreview | description: preview"
              }
            },
            "setter": "BoolSetter",
            "defaultValue": false
          },
          {
            "name": "disabled",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否禁用",
                "en-US": "Disabled"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: disabled | 说明: 是否被禁用",
                "en-US": "prop: disabled | description: disabled"
              }
            },
            "setter": "BoolSetter",
            "description": "是否禁用"
          },
          {
            "name": "hasLimitHint",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "展示限制",
                "en-US": "ShowLimit"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasLimitHint | 说明: 是否展现最大长度样式",
                "en-US": "prop: hasLimitHint | description: hasLimitHint"
              }
            },
            "setter": "BoolSetter",
            "description": "是否展现最大长度样式"
          },
          {
            "name": "cutString",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否截断",
                "en-US": "Cut Off"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: cutString | 说明: 是否截断超出字符串",
                "en-US": "prop: cutString | description: whether cut off string"
              }
            },
            "setter": "BoolSetter",
            "description": "是否截断超出字符串"
          },
          {
            "name": "readOnly",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否只读",
                "en-US": "ReadOnly"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: readOnly | 说明: 是否只读",
                "en-US": "prop: readOnly | description: ReadOnly"
              }
            },
            "setter": "BoolSetter",
            "description": "是否只读"
          },
          {
            "name": "trim",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否 Trim",
                "en-US": "Trim"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: trim | 说明: onChange返回会自动去除头尾空字符",
                "en-US": "prop: trim | description: whether trim when onChange called"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "hasBorder",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示边框",
                "en-US": "ShowBorder"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasBorder | 说明: 是否有边框",
                "en-US": "prop: hasBorder | description: HasBorder"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "autoFocus",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "自动聚焦",
                "en-US": "Auto Focus"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: autoFocus | 说明: 自动聚焦",
                "en-US": "prop: autoFocus | description: autoFocus"
              }
            },
            "setter": "BoolSetter",
            "description": "自动聚焦"
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true,
          "events": ["onPressEnter", "onClear", "onChange", "onKeyDown", "onFocus", "onBlur"]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Input",
      "title": "输入框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Input",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "label",
          "propType": "string",
          "title": "标签文案",
          "description": "label"
        },
        {
          "name": "id",
          "propType": "string",
          "description": "ID"
        },
        {
          "name": "name",
          "propType": "string"
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "是否出现清除按钮"
        },
        {
          "name": "state",
          "title": "状态",
          "propType": {
            "type": "oneOf",
            "value": ["error", "loading", "success", "warning"]
          },
          "description": "状态\n@enumdesc 错误, 校验中, 成功, 警告"
        },
        {
          "name": "size",
          "title": "尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "尺寸\n@enumdesc 小, 中, 大",
          "defaultValue": "medium"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "maxLength",
          "propType": "number",
          "description": "最大长度"
        },
        {
          "name": "hasLimitHint",
          "propType": "bool",
          "description": "是否展现最大长度样式"
        },
        {
          "name": "cutString",
          "propType": "bool",
          "description": "是否截断超出字符串"
        },
        {
          "name": "readOnly",
          "propType": "bool",
          "description": "是否只读"
        },
        {
          "name": "trim",
          "propType": "bool",
          "description": "onChange返回会自动去除头尾空字符"
        },
        {
          "name": "placeholder",
          "propType": "string",
          "description": "输入提示"
        },
        {
          "name": "hasBorder",
          "propType": "bool",
          "description": "是否有边框"
        },
        {
          "name": "onPressEnter",
          "propType": "func",
          "description": "按下回车的回调"
        },
        {
          "name": "onClear",
          "propType": "func"
        },
        {
          "name": "onChange",
          "propType": "func"
        },
        {
          "name": "onKeyDown",
          "propType": "func"
        },
        {
          "name": "onFocus",
          "propType": "func"
        },
        {
          "name": "onBlur",
          "propType": "func"
        },
        {
          "name": "hint",
          "title": "Icon 水印",
          "propType": "string",
          "description": "水印 (Icon的type类型，和hasClear占用一个地方)"
        },
        {
          "name": "innerBefore",
          "propType": "string",
          "description": "文字前附加内容"
        },
        {
          "name": "innerAfter",
          "propType": "string",
          "description": "文字后附加内容"
        },
        {
          "name": "addonBefore",
          "propType": "string",
          "description": "输入框前附加内容"
        },
        {
          "name": "addonAfter",
          "propType": "string",
          "description": "输入框后附加内容"
        },
        {
          "name": "addonTextBefore",
          "propType": "string",
          "description": "输入框前附加文字"
        },
        {
          "name": "addonTextAfter",
          "propType": "string",
          "description": "输入框后附加文字"
        },
        {
          "name": "autoFocus",
          "propType": "bool",
          "description": "自动聚焦"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "label",
            "setter": "StringSetter",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "标签文本",
                "en-US": "Label"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: label | 说明: 标签文本内容",
                "en-US": "prop: label | description: label content"
              }
            },
            "description": "label"
          },
          {
            "name": "placeholder",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入提示",
                "en-US": "Placeholder"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: placeholder | 说明: 输入提示",
                "en-US": "prop: placeholder | description: placeholder"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "state",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "状态",
                "en-US": "State"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: state | 说明: 状态\n@enumdesc 错误, 校验中, 成功, 警告",
                "en-US": "prop: state | description: input state"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["error", "loading", "success", "warning"]
              }
            }
          },
          {
            "name": "size",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "尺寸",
                "en-US": "Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大",
                "en-US": "prop: size | description: size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "maxLength",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "最大长度",
                "en-US": "MaxLength"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: maxLength | 说明: 最大长度",
                "en-US": "prop: maxLength | description: max length"
              }
            },
            "setter": "NumberSetter",
            "description": "最大长度"
          },
          {
            "name": "hasClear",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示清除",
                "en-US": "Show Clear"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasClear | 说明: 是否出现清除按钮",
                "en-US": "prop: hasClear | description: show clear icon"
              }
            },
            "setter": "BoolSetter",
            "description": "是否出现清除按钮"
          },
          {
            "name": "disabled",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否禁用",
                "en-US": "Disabled"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: disabled | 说明: 是否被禁用",
                "en-US": "prop: disabled | description: disabled"
              }
            },
            "setter": "BoolSetter",
            "description": "是否禁用"
          },
          {
            "name": "hasLimitHint",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "展示限制",
                "en-US": "ShowLimit"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasLimitHint | 说明: 是否展现最大长度样式",
                "en-US": "prop: hasLimitHint | description: hasLimitHint"
              }
            },
            "setter": "BoolSetter",
            "description": "是否展现最大长度样式"
          },
          {
            "name": "cutString",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否截断",
                "en-US": "Cut Off"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: cutString | 说明: 是否截断超出字符串",
                "en-US": "prop: cutString | description: whether cut off string"
              }
            },
            "setter": "BoolSetter",
            "description": "是否截断超出字符串"
          },
          {
            "name": "readOnly",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否只读",
                "en-US": "ReadOnly"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: readOnly | 说明: 是否只读",
                "en-US": "prop: readOnly | description: ReadOnly"
              }
            },
            "setter": "BoolSetter",
            "description": "是否只读"
          },
          {
            "name": "trim",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否 Trim",
                "en-US": "Trim"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: trim | 说明: onChange返回会自动去除头尾空字符",
                "en-US": "prop: trim | description: whether trim when onChange called"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "hasBorder",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "显示边框",
                "en-US": "ShowBorder"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hasBorder | 说明: 是否有边框",
                "en-US": "prop: hasBorder | description: HasBorder"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "autoFocus",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "自动聚焦",
                "en-US": "Auto Focus"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: autoFocus | 说明: 自动聚焦",
                "en-US": "prop: autoFocus | description: autoFocus"
              }
            },
            "setter": "BoolSetter",
            "description": "自动聚焦"
          },
          {
            "name": "hint",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "Icon 水印",
                "en-US": "IconHint"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: hint | 说明: Icon 水印",
                "en-US": "prop: hint | description: Icon hint"
              }
            },
            "setter": {
              "componentName": "IconSetter"
            }
          },
          {
            "name": "innerBefore",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "文字前附加内容",
                "en-US": "Inner Before"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: innerBefore | 说明: 文字前附加内容",
                "en-US": "prop: innerBefore | description: innerBefore"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "innerAfter",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "文字后附加内容",
                "en-US": "Inner After"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: innerAfter | 说明: 文字后附加内容",
                "en-US": "prop: innerAfter | description: innerAfter"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonBefore",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框前附加内容",
                "en-US": "Addon Before"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonBefore | 说明: 输入框前附加内容",
                "en-US": "prop: addonBefore | description: addonBefore"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonAfter",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框后附加内容",
                "en-US": "Addon After"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonAfter | 说明: 输入框后附加内容",
                "en-US": "prop: addonAfter | description: addonAfter"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonTextBefore",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框前附加文字",
                "en-US": "Text Before"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonTextBefore | 说明: 输入框前附加文字",
                "en-US": "prop: addonTextBefore | description: addonTextBefore"
              }
            },
            "setter": "StringSetter"
          },
          {
            "name": "addonTextAfter",
            "display": "block",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "输入框后附加文字",
                "en-US": "Text After"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: addonTextAfter | 说明: 输入框后附加文字",
                "en-US": "prop: addonTextAfter | description: addonTextAfter"
              }
            },
            "setter": "StringSetter"
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true,
          "events": ["onPressEnter", "onClear", "onChange", "onKeyDown", "onFocus", "onBlur"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "title": "折线图",
      "category": "常用图表(试验)",
      "componentName": "LineChart",
      "icon": "https://unpkg.alibaba-inc.com/@ali/vc-bizcharts@1.1.4/src/vc-line/logo.svg",
      "npm": {
        "package": "bizcharts",
        "version": "4.0.14",
        "exportName": "LineChart",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "configure": {
        "props": [
          {
            "name": "title",
            "title": "标题",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "折线图标题",
            "tip": "标题文本",
            "supportVariable": true
          },
          {
            "name": "description",
            "title": "描述",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "折线图描述",
            "tip": "描述文本",
            "supportVariable": true
          },
          {
            "name": "xField",
            "title": "横坐标",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "year",
            "tip": "标题文本",
            "supportVariable": true
          },
          {
            "name": "yField",
            "title": "纵坐标",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "value",
            "tip": "描述文本",
            "supportVariable": true
          },
          {
            "name": "data",
            "title": "图表数据",
            "tip": "配置图表数据",
            "setter": "JsonSetter"
          }
        ],
        "supports": {
          "style": true
        }
      }
    },
    {
      "title": "折线",
      "category": "常用图表(试验)",
      "componentName": "Line",
      "icon": "https://unpkg.alibaba-inc.com/@ali/vc-bizcharts@1.1.4/src/vc-line/logo.svg",
      "npm": {
        "package": "@ant-design/charts",
        "version": "4.0.14",
        "exportName": "Line",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "configure": {
        "props": [
          {
            "name": "title",
            "title": "标题",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "2018年爆款商品A销售趋势",
            "tip": "标题文本",
            "supportVariable": true
          },
          {
            "name": "description",
            "title": "描述",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "一达通进出口业务",
            "tip": "描述文本",
            "supportVariable": true
          },
          {
            "name": "xField",
            "title": "横坐标",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "year",
            "tip": "标题文本",
            "supportVariable": true
          },
          {
            "name": "yField",
            "title": "纵坐标",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "value",
            "tip": "描述文本",
            "supportVariable": true
          },
          {
            "name": "data",
            "title": "图表数据",
            "tip": "配置图表数据",
            "setter": "JsonSetter"
          }
        ],
        "supports": {
          "style": true
        }
      }
    },
    {
      "title": "水位图",
      "category": "常用图表(试验)",
      "componentName": "LiquidChart",
      "icon": "https://unpkg.alibaba-inc.com/@ali/vc-bizcharts@1.1.4/src/vc-LiquidChart/logo.svg",
      "npm": {
        "package": "bizcharts",
        "version": "4.0.14",
        "exportName": "LiquidChart",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "configure": {
        "props": [
          {
            "name": "title",
            "title": "标题",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "水位图标题",
            "tip": "标题文本",
            "supportVariable": true
          },
          {
            "name": "description",
            "title": "描述",
            "display": "inline",
            "setter": "StringSetter",
            "defaultValue": "水位图描述",
            "tip": "描述文本",
            "supportVariable": true
          },
          {
            "name": "dataSource",
            "title": "图表数据",
            "type": "group",
            "display": "block",
            "tip": "配置图表数据",
            "items": [
              {
                "name": "min",
                "title": "最小值",
                "setter": "NumberSetter"
              },
              {
                "name": "max",
                "title": "最大值",
                "setter": "NumberSetter"
              },
              {
                "name": "value",
                "title": "值",
                "setter": "NumberSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true
        }
      }
    },
    {
      "componentName": "List.Item",
      "title": "列表项",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "List",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "title",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          }
        },
        {
          "name": "description",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          }
        },
        {
          "name": "media",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          }
        },
        {
          "name": "extra",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          }
        }
      ],
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "List",
      "title": "列表",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "List",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "header",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          }
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium"]
          }
        },
        {
          "name": "footer",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          }
        },
        {
          "name": "divider",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          }
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Loading",
      "title": "加载",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Loading",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "tip",
          "propType": "string",
          "description": "自定义内容"
        },
        {
          "name": "tipAlign",
          "propType": {
            "type": "oneOf",
            "value": ["right", "bottom"]
          },
          "description": "自定义内容位置",
          "defaultValue": "bottom"
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "loading 状态, 默认 true",
          "defaultValue": true
        },
        {
          "name": "onVisibleChange",
          "propType": "func"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义class"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["large", "medium"]
          },
          "description": "设置动画尺寸\n@description 仅仅对默认动画效果起作用\n@enumdesc 大号, 中号",
          "defaultValue": "large"
        },
        {
          "name": "color",
          "propType": "string",
          "description": "动画颜色"
        },
        {
          "name": "fullScreen",
          "propType": "bool",
          "description": "全屏展示"
        },
        {
          "name": "inline",
          "title": "inline",
          "propType": "bool",
          "description": "should loader be displayed inline",
          "defaultValue": true
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": [
          {
            "name": "tip",
            "title": {
              "label": "自定义内容",
              "tip": ""
            },
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["StringSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "tipAlign",
            "title": {
              "label": "内容位置",
              "tip": "自定义内容位置"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "动画右边",
                    "value": "right"
                  },
                  {
                    "title": "动画下面",
                    "value": "bottom"
                  }
                ]
              }
            }
          },
          {
            "name": "visible",
            "title": {
              "label": "是否显示"
            },
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "size",
            "title": {
              "label": "动画尺寸"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "large",
                    "value": "large"
                  },
                  {
                    "title": "medium",
                    "value": "medium"
                  }
                ]
              }
            }
          },
          {
            "name": "color",
            "title": "动画颜色",
            "setter": {
              "componentName": "ColorSetter"
            }
          },
          {
            "name": "fullScreen",
            "title": "全屏显示",
            "setter": "BoolSetter"
          },
          {
            "name": "inline",
            "title": "行内显示",
            "setter": "BoolSetter"
          }
        ],
        "supports": {
          "style": true,
          "events": ["onVisibleChange"]
        }
      },
      "icon": "",
      "category": "反馈"
    },
    {
      "componentName": "MenuButton",
      "title": "菜单按钮",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "MenuButton",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "label",
          "propType": "string",
          "description": "按钮上的文本内容"
        },
        {
          "name": "autoWidth",
          "propType": "bool",
          "description": "弹层是否与按钮宽度相同",
          "defaultValue": true
        },
        {
          "name": "popupTriggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "弹层触发方式",
          "defaultValue": "click"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器"
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层展开状态"
        },
        {
          "name": "defaultVisible",
          "propType": "bool",
          "description": "弹层默认是否展开"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层在显示和隐藏触发的事件"
        },
        {
          "name": "popupStyle",
          "propType": "object",
          "description": "弹层自定义样式"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹层自定义样式类"
        },
        {
          "name": "popupProps",
          "propType": "object",
          "description": "弹层属性透传"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "defaultSelectedKeys",
          "propType": {
            "type": "arrayOf",
            "value": "string"
          },
          "description": "默认激活的菜单项（用法同 Menu 非受控）",
          "defaultValue": []
        },
        {
          "name": "selectedKeys",
          "propType": {
            "type": "arrayOf",
            "value": "string"
          },
          "description": "激活的菜单项（用法同 Menu 受控）"
        },
        {
          "name": "selectMode",
          "propType": {
            "type": "oneOf",
            "value": ["single", "multiple"]
          },
          "description": "菜单的选择模式，同 Menu"
        },
        {
          "name": "onItemClick",
          "propType": "func",
          "description": "点击菜单项后的回调，同 Menu"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选择菜单后的回调，同 Menu"
        },
        {
          "name": "menuProps",
          "propType": "object",
          "description": "菜单属性透传"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "popupContainer",
              "title": {
                "label": "弹层容器",
                "tip": "指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数()。"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["StringSetter", "FunctionSetter"]
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "常用"
    },
    {
      "componentName": "Menu.Divider",
      "title": "菜单分隔线",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": "Divider"
      },
      "props": [
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": false,
          "nestingRule": {
            "parentWhitelist": ["Menu", "SubMenu", "Menu.Group", "MenuButton"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Menu.Group",
      "title": "菜单组",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": "Group"
      },
      "props": [
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标签内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Menu", "SubMenu", "Menu.Group", "MenuButton"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Menu.Item",
      "title": "菜单项",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "key",
          "propType": "string",
          "description": "菜单项标识符"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "helper",
          "propType": "node",
          "description": "帮助文本"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Menu", "SubMenu", "Menu.Group", "MenuButton"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Menu.PopupItem",
      "title": "自定义弹出内容",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": "PopupItem"
      },
      "props": [
        {
          "name": "key",
          "propType": "string",
          "description": "菜单项标识符"
        },
        {
          "name": "label",
          "propType": "node",
          "description": "标签内容"
        },
        {
          "name": "children",
          "propType": "node",
          "description": "自定义弹层内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Menu", "SubMenu", "Menu.Group", "MenuButton"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Menu",
      "title": "菜单",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "onItemClick",
          "propType": "func",
          "description": "点击菜单项触发的回调函数\n@param {String} key 点击的菜单项的 key 值\n@param {Object} item 点击的菜单项对象\n@param {Object} event 点击的事件对象"
        },
        {
          "name": "defaultOpenAll",
          "propType": "bool",
          "description": "初始展开所有的子菜单，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效，优先级高于 defaultOpenKeys",
          "defaultValue": false
        },
        {
          "name": "onOpen",
          "propType": "func",
          "description": "打开或关闭子菜单触发的回调函数\n@param {String} key 打开的所有子菜单的 key 值\n@param {Object} extra 额外参数\n@param {String} extra.key 当前操作子菜单的 key 值\n@param {Boolean} extra.open 是否是打开"
        },
        {
          "name": "mode",
          "propType": {
            "type": "oneOf",
            "value": ["inline", "popup"]
          },
          "description": "子菜单打开的模式",
          "defaultValue": "inline"
        },
        {
          "name": "triggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "子菜单打开的触发行为",
          "defaultValue": "click"
        },
        {
          "name": "openMode",
          "propType": {
            "type": "oneOf",
            "value": ["single", "multiple"]
          },
          "description": "展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效",
          "defaultValue": "multiple"
        },
        {
          "name": "inlineIndent",
          "propType": "number",
          "description": "内连子菜单缩进距离",
          "defaultValue": 20
        },
        {
          "name": "inlineArrowDirection",
          "propType": {
            "type": "oneOf",
            "value": ["down", "right"]
          },
          "defaultValue": "down"
        },
        {
          "name": "popupAutoWidth",
          "propType": "bool",
          "description": "是否自动让弹层的宽度和菜单项保持一致，如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理",
          "defaultValue": false
        },
        {
          "name": "popupAlign",
          "propType": {
            "type": "oneOf",
            "value": ["follow", "outside"]
          },
          "description": "弹层的对齐方式",
          "defaultValue": "follow"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹出子菜单自定义 className"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选中或取消选中菜单项触发的回调函数\n@param {Array} selectedKeys 选中的所有菜单项的值\n@param {Object} item 选中或取消选中的菜单项\n@param {Object} extra 额外参数\n@param {Boolean} extra.select 是否是选中\n@param {Array} extra.key 菜单项的 key\n@param {Object} extra.label 菜单项的文本\n@param {Array} extra.keyPath 菜单项 key 的路径"
        },
        {
          "name": "selectMode",
          "propType": {
            "type": "oneOf",
            "value": ["single", "multiple"]
          },
          "description": "选中模式，单选还是多选，默认无值，不可选"
        },
        {
          "name": "shallowSelect",
          "propType": "bool",
          "description": "是否只能选择第一层菜单项（不能选择子菜单中的菜单项）",
          "defaultValue": false
        },
        {
          "name": "hasSelectedIcon",
          "propType": "bool",
          "description": "是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分",
          "defaultValue": true
        },
        {
          "name": "labelToggleChecked",
          "propType": "bool",
          "defaultValue": true
        },
        {
          "name": "isSelectIconRight",
          "propType": "bool",
          "description": "是否将选中图标居右，仅当 hasSelectedIcon 为true 时生效。\n注意：SubMenu 上的选中图标一直居左，不受此API控制",
          "defaultValue": false
        },
        {
          "name": "direction",
          "propType": {
            "type": "oneOf",
            "value": ["ver", "hoz"]
          },
          "description": "菜单第一层展示方向",
          "defaultValue": "ver"
        },
        {
          "name": "hozAlign",
          "propType": {
            "type": "oneOf",
            "value": ["left", "right"]
          },
          "description": "横向菜单条 item 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效",
          "defaultValue": "left"
        },
        {
          "name": "hozInLine",
          "propType": "bool",
          "description": "横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示， 仅在 direction='hoz' mode='popup' 时生效",
          "defaultValue": false
        },
        {
          "name": "header",
          "propType": "node",
          "description": "自定义菜单头部"
        },
        {
          "name": "footer",
          "propType": "node",
          "description": "自定义菜单尾部"
        },
        {
          "name": "autoFocus",
          "propType": "bool",
          "description": "是否自动获得焦点",
          "defaultValue": false
        },
        {
          "name": "focusedKey",
          "propType": "string",
          "description": "当前获得焦点的子菜单或菜单项 key 值"
        },
        {
          "name": "focusable",
          "propType": "bool",
          "defaultValue": true
        },
        {
          "name": "onItemFocus",
          "propType": "func"
        },
        {
          "name": "onBlur",
          "propType": "func"
        },
        {
          "name": "embeddable",
          "propType": "bool",
          "description": "是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Menu style={{lineHeight: '100px'}}>` 自定义高度",
          "defaultValue": false
        },
        {
          "name": "onItemKeyDown",
          "propType": "func"
        },
        {
          "name": "expandAnimation",
          "propType": "bool",
          "defaultValue": true
        },
        {
          "name": "itemClassName",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "openKeys",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "arrayOf",
                "value": "string"
              }
            ]
          },
          "description": "当前打开的子菜单的 key 值"
        },
        {
          "name": "defaultOpenKeys",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "arrayOf",
                "value": "string"
              }
            ]
          },
          "description": "初始打开的子菜单的 key 值",
          "defaultValue": []
        },
        {
          "name": "selectedKeys",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "arrayOf",
                "value": "string"
              }
            ]
          },
          "description": "当前选中菜单项的 key 值"
        },
        {
          "name": "defaultSelectedKeys",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "arrayOf",
                "value": "string"
              }
            ]
          },
          "description": "初始选中菜单项的 key 值",
          "defaultValue": []
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "MonthPicker",
      "title": "MonthPicker",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "DatePicker",
        "main": "",
        "destructuring": true,
        "subName": "MonthPicker"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "输入框内置标签"
        },
        {
          "name": "state",
          "propType": {
            "type": "oneOf",
            "value": ["success", "loading", "error"]
          },
          "description": "输入框状态"
        },
        {
          "name": "placeholder",
          "propType": "string",
          "description": "输入提示"
        },
        {
          "name": "defaultVisibleYear",
          "propType": "func",
          "description": "默认展现的年\n@return {MomentObject} 返回包含指定年份的 moment 对象实例"
        },
        {
          "name": "value",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "日期值（受控）moment 对象"
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "初始日期值，moment 对象"
        },
        {
          "name": "format",
          "propType": "string",
          "description": "日期值的格式（用于限定用户输入和展示）",
          "defaultValue": "YYYY-MM"
        },
        {
          "name": "disabledDate",
          "propType": "func",
          "description": "禁用日期函数\n@param {MomentObject} 日期值\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@return {Boolean} 是否禁用"
        },
        {
          "name": "footerRender",
          "propType": "func",
          "description": "自定义面板页脚\n@return {Node} 自定义的面板页脚组件"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "日期值改变时的回调\n@param {MomentObject|String} value 日期值"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "输入框尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "是否显示清空按钮",
          "defaultValue": true
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层显示状态"
        },
        {
          "name": "defaultVisible",
          "propType": "bool",
          "description": "弹层默认是否显示"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层展示状态变化时的回调\n@param {Boolean} visible 弹层是否显示\n@param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "popupTriggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "弹层触发方式",
          "defaultValue": "click"
        },
        {
          "name": "popupAlign",
          "propType": "string",
          "description": "弹层对齐方式, 具体含义见 OverLay文档",
          "defaultValue": "tl tl"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        },
        {
          "name": "popupStyle",
          "propType": "object",
          "description": "弹层自定义样式"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹层自定义样式类"
        },
        {
          "name": "popupProps",
          "propType": "object",
          "description": "弹层其他属性"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "inputProps",
          "propType": "object",
          "description": "输入框其他属性"
        },
        {
          "name": "monthCellRender",
          "propType": "func",
          "description": "自定义月份渲染函数\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@returns {ReactNode}"
        },
        {
          "name": "yearCellRender",
          "propType": "func"
        },
        {
          "name": "dateInputAriaLabel",
          "propType": "string",
          "description": "日期输入框的 aria-label 属性"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {MomentObject} value 月份"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "name",
          "propType": "string"
        },
        {
          "name": "popupComponent",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          }
        },
        {
          "name": "popupContent",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Nav.Item",
      "title": "导航项",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Nav",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "icon",
          "propType": {
            "type": "icon"
          },
          "description": "自定义图标"
        },
        {
          "name": "children",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "导航内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "icon": "",
      "category": "导航"
    },
    {
      "componentName": "Nav",
      "title": "导航",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Nav",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "children",
          "propType": "node",
          "description": "导航项和子导航"
        },
        {
          "name": "type",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "primary", "secondary", "line"]
          },
          "description": "导航类型",
          "defaultValue": "normal"
        },
        {
          "name": "direction",
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "导航布局",
          "defaultValue": "ver"
        },
        {
          "name": "hozAlign",
          "propType": {
            "type": "oneOf",
            "value": ["left", "right"]
          },
          "description": "对齐方向",
          "defaultValue": "left"
        },
        {
          "name": "activeDirection",
          "propType": {
            "type": "oneOf",
            "value": [null, "top", "bottom", "left", "right"]
          },
          "description": "选中条方向"
        },
        {
          "name": "mode",
          "propType": {
            "type": "oneOf",
            "value": ["inline", "popup"]
          },
          "description": "子导航打开的模式",
          "defaultValue": "inline"
        },
        {
          "name": "triggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "子导航打开的触发方式",
          "defaultValue": "click"
        },
        {
          "name": "inlineIndent",
          "propType": "number",
          "description": "内联子导航缩进距离",
          "defaultValue": 20
        },
        {
          "name": "defaultOpenAll",
          "propType": "bool",
          "description": "初始展开所有的子导航",
          "defaultValue": false
        },
        {
          "name": "openMode",
          "propType": {
            "type": "oneOf",
            "value": ["single", "multiple"]
          },
          "description": "内联子导航的展开模式",
          "defaultValue": "multiple"
        },
        {
          "name": "selectedKeys",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "instanceOf",
                "value": "array"
              }
            ]
          },
          "description": "当前选中导航key值"
        },
        {
          "name": "defaultSelectedKeys",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "instanceOf",
                "value": "array"
              }
            ]
          },
          "description": "初始选中导航项的key值"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选中或取消选中导航项触发的回调函数\n@param {Array} selectedKeys 选中的所有导航项的 key\n@param {Object} item 选中或取消选中的导航项\n@param {Object} extra 额外参数\n@param {Boolean} extra.select 是否是选中\n@param {Array} extra.key 导航项的 key\n@param {Object} extra.label 导航项的文本\n@param {Array} extra.keyPath 导航项 key 的路径"
        },
        {
          "name": "popupAlign",
          "propType": {
            "type": "oneOf",
            "value": ["follow", "outside"]
          },
          "description": "弹出子导航的对齐方式（水平导航只支持 follow ）\n@eumdesc Item 顶端对齐, Nav 顶端对齐",
          "defaultValue": "follow"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹出子导航的自定义类名"
        },
        {
          "name": "iconOnly",
          "propType": "bool",
          "description": "是否只显示图标"
        },
        {
          "name": "hasArrow",
          "propType": "bool",
          "description": "是否显示右侧的箭头",
          "defaultValue": true
        },
        {
          "name": "hasTooltip",
          "propType": "bool",
          "description": "是否有ToolTips",
          "defaultValue": false
        },
        {
          "name": "header",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "自定义导航头部"
        },
        {
          "name": "footer",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "自定义导航尾部"
        },
        {
          "name": "embeddable",
          "propType": "bool",
          "description": "开启嵌入式模式",
          "defaultValue": false
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "icon": "",
      "category": "导航"
    },
    {
      "componentName": "NextTable",
      "title": "表格",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "NextTable",
        "version": "1.23.x",
        "exportName": "NextTable",
        "main": "lib/index.js",
        "subName": ""
      },
      "props": [
        {
          "name": "columns",
          "title": "数据列",
          "propType": {
            "type": "arrayOf",
            "value": {
              "type": "shape",
              "value": [
                {
                  "name": "title",
                  "description": "列标题",
                  "propType": "string",
                  "defaultValue": "Title"
                },
                {
                  "name": "dataKey",
                  "description": "列索引",
                  "propType": "string",
                  "defaultValue": "Key"
                },
                {
                  "name": "dataType",
                  "description": "数据类型",
                  "propType": {
                    "type": "oneOf",
                    "value": [
                      "text",
                      "timestamp",
                      "cascadeTimestamp",
                      "employee",
                      "money",
                      "moneyRange"
                    ]
                  },
                  "defaultValue": "Key"
                },
                {
                  "name": "editType",
                  "description": "编辑类型",
                  "propType": {
                    "type": "oneOf",
                    "value": ["select", "text", "radio", "date", "employee"]
                  },
                  "defaultValue": "Key"
                }
              ]
            }
          }
        },
        {
          "name": "data",
          "title": "数据源",
          "propType": {
            "type": "oneOfType",
            "value": ["Json", "JSExpression"]
          }
        },
        {
          "name": "actionTitle",
          "title": "操作列标题",
          "propType": "string"
        },
        {
          "name": "actionColumn",
          "title": "操作列",
          "propType": {
            "type": "arrayOf",
            "value": {
              "type": "shape",
              "value": [
                {
                  "name": "title",
                  "description": "列标题",
                  "propType": "string",
                  "defaultValue": "Title"
                },
                {
                  "name": "callback",
                  "description": "callback",
                  "propType": "func",
                  "defaultValue": {
                    "type": "JSFunction",
                    "value": "(rowData, action, table) => {\n return table.editRow(rowData).then((row) => {\n console.log(row);\n })}"
                  }
                }
              ]
            }
          }
        },
        {
          "name": "customBarItem",
          "isRequired": true,
          "title": "自定义工具栏渲染",
          "propType": "any"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "customBarItem",
            "isRequired": true,
            "title": "自定义工具栏渲染",
            "setter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "name": "render",
                      "title": "整体自定义渲染",
                      "setter": {
                        "componentName": "FunctionSetter",
                        "props": {
                          "supportParams": true
                        }
                      }
                    },
                    {
                      "name": "rightRender",
                      "title": "底部自定义渲染",
                      "setter": {
                        "componentName": "SlotSetter",
                        "initialValue": {
                          "type": "JSSlot",
                          "params": ["value", "index", "record"],
                          "value": []
                        }
                      }
                    },
                    {
                      "name": "bottomRender",
                      "title": "右侧自定义渲染",
                      "setter": {
                        "componentName": "SlotSetter",
                        "initialValue": {
                          "type": "JSSlot",
                          "params": ["value", "index", "record"],
                          "value": []
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "name": "StyleAndTheme",
            "title": "风格和样式",
            "type": "group",
            "extraProps": {
              "display": "entry"
            },
            "items": [
              {
                "name": "theme",
                "title": "主题",
                "setter": {
                  "componentName": "RadioGroupSetter",
                  "props": {
                    "options": [
                      {
                        "title": "zebra",
                        "value": "zebra"
                      },
                      {
                        "title": "split",
                        "value": "split"
                      },
                      {
                        "title": "border",
                        "value": "border"
                      }
                    ]
                  }
                }
              },
              {
                "name": "hasHeader",
                "title": "是否显示表头",
                "setter": "BoolSetter"
              },
              {
                "name": "fixedHeader",
                "title": "是否固定表头",
                "setter": "BoolSetter"
              },
              {
                "name": "stickyHeader",
                "title": "表头是否是sticky",
                "setter": "BoolSetter"
              },
              {
                "name": "setEmptyContent",
                "title": "开启自定义空提示",
                "setter": "BoolSetter"
              },
              {
                "description": "最大高度",
                "name": "maxBodyHeight",
                "setter": "StringSetter"
              }
            ]
          },
          {
            "name": "Selector",
            "title": "行选择器",
            "type": "group",
            "extraProps": {
              "display": "entry"
            },
            "items": [
              {
                "name": "rowSelector",
                "title": "选择器模式",
                "setter": {
                  "componentName": "RadioGroupSetter",
                  "props": {
                    "options": [
                      {
                        "title": "checkboxSelector",
                        "value": "checkboxSelector"
                      },
                      {
                        "title": "radioSelector",
                        "value": "radioSelector"
                      }
                    ]
                  }
                }
              },
              {
                "name": "showRowSelector",
                "title": "是否启用选择模式",
                "setter": "BoolSetter"
              }
            ]
          },
          {
            "name": "Pagination",
            "title": "分页设置",
            "type": "group",
            "extraProps": {
              "display": "entry"
            },
            "items": [
              {
                "name": "isPagination",
                "title": "是否显示分页",
                "setter": "BoolSetter",
                "initialValue": true
              },
              {
                "name": "pagination",
                "title": "分页设置",
                "setter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "paginationPosition",
                          "title": "翻页器显示位置",
                          "setter": {
                            "componentName": "RadioGroupSetter",
                            "props": {
                              "options": [
                                {
                                  "title": "left",
                                  "value": "left"
                                },
                                {
                                  "title": "right",
                                  "value": "right"
                                }
                              ]
                            }
                          }
                        },
                        {
                          "name": "size",
                          "title": "分页组件大小",
                          "setter": {
                            "componentName": "RadioGroupSetter",
                            "props": {
                              "options": [
                                {
                                  "title": "small",
                                  "value": "small"
                                },
                                {
                                  "title": "medium",
                                  "value": "medium"
                                },
                                {
                                  "title": "large",
                                  "value": "large"
                                }
                              ]
                            }
                          }
                        },
                        {
                          "name": "type",
                          "title": "分页组件类型",
                          "setter": {
                            "componentName": "RadioGroupSetter",
                            "props": {
                              "options": [
                                {
                                  "title": "normal",
                                  "value": "normal"
                                },
                                {
                                  "title": "simple",
                                  "value": "simple"
                                },
                                {
                                  "title": "mini",
                                  "value": "mini"
                                }
                              ]
                            }
                          }
                        },
                        {
                          "name": "shape",
                          "title": "前进后退按钮样式",
                          "setter": {
                            "componentName": "SelectSetter",
                            "props": {
                              "options": [
                                {
                                  "title": "normal",
                                  "value": "normal"
                                },
                                {
                                  "title": "arrow-only",
                                  "value": "arrow-only"
                                },
                                {
                                  "title": "arrow-prev-only",
                                  "value": "arrow-prev-only"
                                },
                                {
                                  "title": "no-border",
                                  "value": "no-border"
                                }
                              ]
                            }
                          }
                        },
                        {
                          "name": "pageSizeSelector",
                          "title": "每页显示选择器类型",
                          "setter": "BoolSetter"
                        },
                        {
                          "name": "pageSizeList",
                          "title": "每页显示选择器可选值",
                          "setter": "StringSetter"
                        },
                        {
                          "name": "pageSizePosition",
                          "title": "每页显示选择器在组件中的位置",
                          "setter": {
                            "componentName": "SelectSetter",
                            "props": {
                              "options": [
                                {
                                  "title": "start",
                                  "value": "start"
                                },
                                {
                                  "title": "end",
                                  "value": "end"
                                }
                              ]
                            }
                          }
                        },
                        {
                          "name": "hideOnlyOnePage",
                          "title": "hideOnlyOnePage",
                          "setter": "BoolSetter"
                        },
                        {
                          "name": "showJump",
                          "title": "showJump",
                          "setter": "BoolSetter"
                        },
                        {
                          "name": "pageShowCount",
                          "title": "页码显示的数量",
                          "setter": "NumberSetter"
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "type": "normal",
                    "shape": "arrow-only",
                    "pageSize": 10,
                    "pageSizeSelector": false,
                    "pageSizeList": "5,10,20",
                    "pageSizePosition": "end",
                    "paginationPosition": "right",
                    "hideOnlyOnePage": false,
                    "showJump": true
                  }
                }
              }
            ]
          },
          {
            "name": "ExpandAndTree",
            "title": "可折叠/树形表格",
            "type": "group",
            "extraProps": {
              "display": "entry"
            },
            "items": [
              {
                "name": "hasExpandedRowCtrl",
                "title": "启用折叠",
                "setter": "BoolSetter"
              },
              {
                "name": "isTree",
                "title": "启用树形",
                "setter": "BoolSetter"
              }
            ]
          },
          {
            "name": "TopAction",
            "title": "顶部操作选项",
            "type": "group",
            "extraProps": {
              "display": "entry"
            },
            "items": [
              {
                "name": "showMiniPager",
                "title": "顶部迷你分页器",
                "setter": {
                  "componentName": "BoolSetter"
                }
              },
              {
                "name": "showActionBar",
                "title": "显示操作条",
                "setter": {
                  "componentName": "BoolSetter"
                }
              },
              {
                "name": "showLinkBar",
                "title": "显示外链条",
                "setter": {
                  "componentName": "BoolSetter"
                }
              },
              {
                "name": "showSearch",
                "title": "显示搜索",
                "setter": {
                  "componentName": "BoolSetter"
                }
              },
              {
                "name": "searchBarPlaceholder",
                "title": "搜索 placeholder",
                "setter": "StringSetter"
              },
              {
                "name": "showCustomColumn",
                "title": "显示筛选器",
                "setter": {
                  "componentName": "BoolSetter"
                }
              }
            ]
          },
          {
            "name": "actionBar",
            "title": "操作条",
            "setter": {
              "componentName": "ArraySetter",
              "props": {
                "itemSetter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "title",
                          "description": "标题",
                          "setter": "StringSetter",
                          "initialValue": "Title"
                        },
                        {
                          "name": "callback",
                          "description": "callback",
                          "setter": {
                            "componentName": "FunctionSetter"
                          }
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "title": "Title"
                  }
                }
              }
            }
          },
          {
            "name": "linkBar",
            "title": "外链操作条",
            "setter": {
              "componentName": "ArraySetter",
              "props": {
                "itemSetter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "title",
                          "description": "标题",
                          "setter": "StringSetter",
                          "initialValue": "Title"
                        },
                        {
                          "name": "callback",
                          "description": "callback",
                          "setter": {
                            "componentName": "FunctionSetter"
                          }
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "title": "Title"
                  }
                }
              }
            }
          },
          {
            "name": "columns",
            "title": "数据列",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  "ExpressionSetter",
                  {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "items": [
                              {
                                "name": "title",
                                "description": "列标题",
                                "setter": "StringSetter"
                              },
                              {
                                "name": "dataKey",
                                "description": "列索引",
                                "setter": "StringSetter"
                              },
                              {
                                "description": "宽度",
                                "name": "width",
                                "setter": "StringSetter"
                              },
                              {
                                "name": "dataType",
                                "description": "数据类型",
                                "setter": {
                                  "componentName": "SelectSetter",
                                  "props": {
                                    "options": [
                                      {
                                        "title": "text",
                                        "value": "text"
                                      },
                                      {
                                        "title": "timestamp",
                                        "value": "timestamp"
                                      },
                                      {
                                        "title": "cascadeTimestamp",
                                        "value": "cascadeTimestamp"
                                      },
                                      {
                                        "title": "employee",
                                        "value": "employee"
                                      },
                                      {
                                        "title": "money",
                                        "value": "money"
                                      },
                                      {
                                        "title": "moneyRange",
                                        "value": "moneyRange"
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "name": "editType",
                                "description": "编辑类型",
                                "setter": {
                                  "componentName": "SelectSetter",
                                  "props": {
                                    "options": [
                                      {
                                        "title": "select",
                                        "value": "select"
                                      },
                                      {
                                        "title": "text",
                                        "value": "text"
                                      },
                                      {
                                        "title": "radio",
                                        "value": "radio"
                                      },
                                      {
                                        "title": "date",
                                        "value": "date"
                                      },
                                      {
                                        "title": "employee",
                                        "value": "employee"
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "name": "lock",
                                "description": "锁定位置",
                                "setter": {
                                  "componentName": "RadioGroupSetter",
                                  "props": {
                                    "options": [
                                      {
                                        "title": "左",
                                        "value": "left"
                                      },
                                      {
                                        "title": "右",
                                        "value": "right"
                                      },
                                      {
                                        "title": "无",
                                        "value": ""
                                      }
                                    ]
                                  },
                                  "initialValue": ""
                                }
                              },
                              {
                                "description": "自定义渲染",
                                "name": "render",
                                "setter": {
                                  "componentName": "SlotSetter",
                                  "title": "单元格自定义",
                                  "initialValue": {
                                    "type": "JSSlot",
                                    "params": [""],
                                    "value": [
                                      {
                                        "componentName": "Box"
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "initialValue": {
                          "title": "Title",
                          "dataKey": "Key",
                          "dataType": "text",
                          "editType": "text",
                          "width": 200,
                          "lock": ""
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "name": "data",
            "title": "数据源",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["JsonSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "action",
            "title": "操作列选项",
            "type": "group",
            "extraProps": {
              "display": "entry"
            },
            "items": [
              {
                "name": "actionTitle",
                "title": "操作列标题",
                "setter": "StringSetter"
              },
              {
                "name": "actionWidth",
                "title": "操作列宽度",
                "setter": "NumberSetter"
              },
              {
                "name": "actionType",
                "setter": {
                  "componentName": "RadioGroupSetter",
                  "props": {
                    "options": [
                      {
                        "title": "link",
                        "value": "link"
                      },
                      {
                        "title": "button",
                        "value": "button"
                      }
                    ]
                  }
                }
              },
              {
                "name": "actionFixed",
                "setter": {
                  "componentName": "RadioGroupSetter",
                  "props": {
                    "options": [
                      {
                        "title": "right",
                        "value": "right"
                      },
                      {
                        "title": "none",
                        "value": "none"
                      }
                    ]
                  }
                }
              },
              {
                "name": "actionHidden",
                "setter": "BoolSetter",
                "initialValue": false
              }
            ]
          },
          {
            "name": "actionColumn",
            "title": "操作列",
            "setter": {
              "componentName": "ArraySetter",
              "props": {
                "itemSetter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "title",
                          "description": "列标题",
                          "setter": "StringSetter",
                          "initialValue": "Title"
                        },
                        {
                          "name": "callback",
                          "description": "callback",
                          "setter": {
                            "componentName": "FunctionSetter"
                          }
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "title": "Title",
                    "callback": {
                      "type": "JSFunction",
                      "value": "(rowData, action, table) => {\n return table.editRow(rowData).then((row) => {\n console.log(row);\n })}"
                    }
                  }
                }
              }
            }
          }
        ],
        "supports": {
          "style": true,
          "events": [
            "onFetchData",
            "onSelect",
            "onRowClick",
            "onRowMouseEnter",
            "onRowMouseLeave",
            "onResizeChange",
            "onColumnsChange",
            "onRowOpen",
            "onShowSearch",
            "onHideSearch"
          ]
        }
      },
      "icon": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png",
      "category": "内容"
    },
    {
      "componentName": "Wrapper",
      "title": "备注容器",
      "category": "Others",
      "npm": {
        "package": "@alifd/ali-lowcode-components",
        "version": "latest",
        "exportName": "NoteWrapper",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "note",
          "propType": "string",
          "defaultValue": "这是一个备注"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "isModal": false
        },
        "props": [
          {
            "name": "style",
            "setter": "StyleSetter"
          },
          {
            "name": "note",
            "propType": "string",
            "setter": "StringSetter"
          }
        ]
      },
      "icon": ""
    },
    {
      "componentName": "NumberPicker",
      "title": "数字输入框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "NumberPicker",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["large", "medium"]
          },
          "description": "大小",
          "defaultValue": "medium"
        },
        {
          "name": "type",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "inline"]
          },
          "description": "设置类型",
          "defaultValue": "normal"
        },
        {
          "name": "value",
          "propType": "number",
          "description": "当前值"
        },
        {
          "name": "defaultValue",
          "propType": "number",
          "description": "默认值"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "step",
          "propType": "number",
          "description": "步长",
          "defaultValue": 1
        },
        {
          "name": "precision",
          "propType": "number",
          "description": "保留小数点后位数",
          "defaultValue": 0
        },
        {
          "name": "editable",
          "propType": "bool",
          "description": "用户是否可以输入",
          "defaultValue": true
        },
        {
          "name": "autoFocus",
          "propType": "bool",
          "description": "自动焦点"
        },
        {
          "name": "max",
          "propType": "number",
          "description": "最大值",
          "defaultValue": null
        },
        {
          "name": "min",
          "propType": "number",
          "description": "最小值",
          "defaultValue": null
        },
        {
          "name": "format",
          "propType": "func",
          "description": "格式化当前值"
        },
        {
          "name": "upBtnProps",
          "propType": "object",
          "description": "增加按钮的props"
        },
        {
          "name": "downBtnProps",
          "propType": "object",
          "description": "减少按钮的props"
        },
        {
          "name": "label",
          "propType": "string",
          "description": "内联 label"
        },
        {
          "name": "innerAfter",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "icon"]
          },
          "description": "inner after"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {number} value 评分值"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "数值被改变的事件\n@param {Number} value 数据\n@param {Event} e DOM事件对象"
        },
        {
          "name": "onKeyDown",
          "propType": "func",
          "description": "键盘按下"
        },
        {
          "name": "onFocus",
          "propType": "func",
          "description": "焦点获得"
        },
        {
          "name": "onBlur",
          "propType": "func",
          "description": "焦点失去"
        },
        {
          "name": "onCorrect",
          "propType": "func",
          "description": "数值订正后的回调\n@param {Object} obj {currentValue,oldValue:String}"
        },
        {
          "name": "onDisabled",
          "propType": "func"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义class"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "value",
            "title": "当前值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "size",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "尺寸",
                "en-US": "Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大",
                "en-US": "prop: size | description: size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "type",
            "title": "类型",
            "defaultValue": "normal",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "options": [
                        {
                          "title": "普通",
                          "value": "normal"
                        },
                        {
                          "title": "内联",
                          "value": "inline"
                        }
                      ]
                    }
                  },
                  "ExpressionSetter"
                ]
              }
            }
          },
          {
            "name": "innerAfter",
            "title": "单位",
            "setter": ["StringSetter", "ExpressionSetter"]
          },
          {
            "name": "step",
            "title": "步长",
            "defaultValue": 1,
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "precision",
            "title": "小数位数",
            "defaultValue": 0,
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "max",
            "title": "最大值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "min",
            "title": "最小值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "editable",
            "title": "可以输入",
            "defaultValue": true,
            "setter": ["BoolSetter", "ExpressionSetter"]
          },
          {
            "name": "format",
            "title": "格式化",
            "display": "block",
            "setter": {
              "componentName": "FunctionSetter"
            }
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          },
          {
            "name": "style",
            "setter": {
              "componentName": "StyleSetter"
            }
          }
        ],
        "supports": {
          "events": ["onChange", "onKeyDown", "onFocus", "onBlur", "onCorrect"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Page",
      "title": "页面",
      "props": [
        {
          "name": "style",
          "propType": "object",
          "defaultValue": {
            "padding": 12
          }
        }
      ],
      "configure": {
        "supports": {
          "style": true
        },
        "component": {
          "isContainer": true,
          "disableBehaviors": "*"
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Pagination",
      "title": "翻页器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Pagination",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "type",
          "title": {
            "label": "组件类型",
            "tip": "分页组件类型"
          },
          "propType": {
            "type": "oneOf",
            "value": ["normal", "simple", "mini"]
          },
          "description": "分页组件类型",
          "defaultValue": "normal"
        },
        {
          "name": "shape",
          "title": {
            "label": "按钮样式",
            "tip": "前进后退按钮样式"
          },
          "propType": {
            "type": "oneOf",
            "value": ["normal", "arrow-only", "arrow-prev-only", "no-border"]
          },
          "description": "前进后退按钮样式",
          "defaultValue": "normal"
        },
        {
          "name": "size",
          "title": {
            "label": "尺寸",
            "tip": "分页组件大小"
          },
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "分页组件大小",
          "defaultValue": "medium"
        },
        {
          "name": "current",
          "propType": "number",
          "description": "（受控）当前页码"
        },
        {
          "name": "defaultCurrent",
          "title": {
            "label": "初始页码",
            "tip": "（非受控）初始页码"
          },
          "propType": "number",
          "description": "（非受控）初始页码",
          "defaultValue": 1
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "页码发生改变时的回调函数\n@param {Number} current 改变后的页码数\n@param {Object} e 点击事件对象"
        },
        {
          "name": "total",
          "propType": "number",
          "description": "总记录数",
          "defaultValue": 100
        },
        {
          "name": "totalRender",
          "propType": "func",
          "title": {
            "label": "总数渲染",
            "tip": "总数的渲染函数\n@param {Number} total 总数\n@param {Array} range 当前数据在总数中的区间"
          }
        },
        {
          "name": "pageShowCount",
          "propType": "number",
          "title": {
            "label": "显示页数",
            "tip": "页码显示的数量，更多的使用...代替"
          },
          "defaultValue": 5
        },
        {
          "name": "pageSize",
          "title": {
            "label": "单页记录",
            "tip": "一页中的记录数"
          },
          "propType": "number",
          "description": "一页中的记录数",
          "defaultValue": 10
        },
        {
          "name": "pageSizeSelector",
          "title": {
            "label": "选择器类型",
            "tip": "每页显示选择器类型"
          },
          "propType": {
            "type": "oneOf",
            "value": [false, "filter", "dropdown"]
          },
          "description": "每页显示选择器类型",
          "defaultValue": false
        },
        {
          "name": "pageNumberRender",
          "propType": "func",
          "title": {
            "label": "自定义页码",
            "tip": "自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染\n@param {Number} index 分页的页码，从1开始\n@return {ReactNode} 返回渲染结果"
          }
        },
        {
          "name": "pageSizePosition",
          "title": {
            "label": "选择器位置",
            "tip": "每页显示选择器在组件中的位置"
          },
          "propType": {
            "type": "oneOf",
            "value": ["start", "end"]
          },
          "description": "每页显示选择器在组件中的位置",
          "defaultValue": "start"
        },
        {
          "name": "onPageSizeChange",
          "propType": "func",
          "description": "每页显示记录数量改变时的回调函数\n@param {Number} pageSize 改变后的每页显示记录数"
        },
        {
          "name": "hideOnlyOnePage",
          "propType": "bool",
          "title": {
            "label": "单页隐藏",
            "tip": "当分页数为1时，是否隐藏分页器"
          },
          "defaultValue": false
        },
        {
          "name": "showJump",
          "propType": "bool",
          "title": {
            "label": "显示跳转",
            "tip": "type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域"
          },
          "defaultValue": true
        },
        {
          "name": "link",
          "title": {
            "label": "跳转链接",
            "tip": "设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串"
          },
          "propType": "string",
          "description": "设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "current",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              },
              "title": {
                "label": "当前页面",
                "tip": "（受控）当前页码"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["NumberSetter", "ExpressionSetter"]
                }
              }
            },
            {
              "name": "total",
              "title": {
                "label": "总记录数",
                "tip": "总记录数"
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": ["NumberSetter", "ExpressionSetter"]
                }
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "导航"
    },
    {
      "componentName": "Paragraph",
      "title": "Paragraph",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Typography",
        "main": "",
        "destructuring": true,
        "subName": "Paragraph"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "component",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          },
          "description": "设置标签类型",
          "defaultValue": "p"
        },
        {
          "name": "type",
          "defaultValue": "long"
        },
        {
          "name": "size",
          "defaultValue": "medium"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "title": "饼图",
      "category": "常用图表(试验)",
      "componentName": "PieChart",
      "icon": "https://unpkg.alibaba-inc.com/@ali/vc-bizcharts@1.1.4/src/vc-PieChart/logo.svg",
      "npm": {
        "package": "bizcharts",
        "version": "4.0.14",
        "exportName": "PieChart",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "configure": {
        "props": [
          {
            "name": "angleField",
            "title": "占比字段",
            "tip": "扇形切片大小（弧度）所对应的数据字段名",
            "setter": "StringSetter"
          },
          {
            "name": "colorField",
            "title": "颜色字段",
            "tip": "扇形颜色映射对应的数据字段名",
            "setter": "StringSetter"
          },
          {
            "name": "titleConfig",
            "title": "标题配置",
            "display": "block",
            "type": "group",
            "items": [
              {
                "name": "title.text",
                "title": "标题",
                "setter": "StringSetter"
              },
              {
                "name": "title.visible",
                "title": "是否展示",
                "setter": "BoolSetter"
              }
            ]
          },
          {
            "name": "descriptionConfig",
            "title": "描述配置",
            "display": "block",
            "type": "group",
            "items": [
              {
                "name": "description.text",
                "title": "描述",
                "setter": "StringSetter"
              },
              {
                "name": "description.visible",
                "title": "是否展示",
                "setter": "BoolSetter"
              }
            ]
          },
          {
            "name": "data",
            "title": "图表数据",
            "tip": "配置图表数据",
            "setter": "JsonSetter"
          }
        ],
        "supports": {
          "style": true
        }
      }
    },
    {
      "componentName": "PopupItem",
      "title": "PopupItem",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Nav",
        "main": "",
        "destructuring": true,
        "subName": "PopupItem"
      },
      "props": [
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "icon",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "instanceOf",
                "value": "node"
              }
            ]
          },
          "description": "自定义图标，可以使用 Icon 的 type, 也可以使用组件 `<Icon type=\"icon type\" />`"
        },
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标签内容"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "弹出内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Progress",
      "title": "进度指示器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Progress",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "shape",
          "propType": {
            "type": "oneOf",
            "value": ["circle", "line"]
          },
          "description": "形态",
          "defaultValue": "line"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "percent",
          "title": "百分比",
          "propType": "number",
          "description": "所占百分比",
          "defaultValue": 0
        },
        {
          "name": "state",
          "title": "进度状态",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "success", "error"]
          },
          "description": "进度状态, 显示优先级: color > progressive > state",
          "defaultValue": "normal"
        },
        {
          "name": "progressive",
          "title": {
            "label": "色阶变化",
            "tip": "是否为色彩阶段变化模式, 显示优先级: color > progressive > state"
          },
          "propType": "bool",
          "description": "是否为色彩阶段变化模式, 显示优先级: color > progressive > state",
          "defaultValue": false
        },
        {
          "name": "hasBorder",
          "title": "边框",
          "propType": "bool",
          "description": "是否添加 Border（只适用于 Line Progress)",
          "defaultValue": false
        },
        {
          "name": "textRender",
          "title": {
            "label": "文本渲染",
            "tip": "文本渲染函数\n@param {Number} percent 当前的进度信息\n@param {Object} option 额外的参数\n@property {Boolean} option.rtl 是否在rtl 模式下渲染\n@return {ReactNode} 返回文本节点"
          },
          "propType": "func",
          "description": "文本渲染函数\n@param {Number} percent 当前的进度信息\n@param {Object} option 额外的参数\n@property {Boolean} option.rtl 是否在rtl 模式下渲染\n@return {ReactNode} 返回文本节点"
        },
        {
          "name": "color",
          "propType": "string",
          "description": "进度条颜色, 显示优先级: color > progressive > state"
        },
        {
          "name": "backgroundColor",
          "propType": "string",
          "description": "背景色"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "prefix",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "color",
              "title": {
                "label": "进度条颜色",
                "tip": "color|进度条颜色, 显示优先级: color > progressive > state"
              },
              "setter": {
                "componentName": "ColorSetter"
              }
            },
            {
              "name": "backgroundColor",
              "title": {
                "label": "背景色",
                "tip": "backgroundColor|背景色"
              },
              "setter": {
                "componentName": "ColorSetter"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "反馈"
    },
    {
      "componentName": "RadioItem",
      "title": "单选菜单项",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": "RadioItem"
      },
      "props": [
        {
          "name": "checked",
          "propType": "bool",
          "description": "是否选中",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中或取消选中触发的回调函数\n@param {Boolean} checked 是否选中\n@param {Object} event 选中事件对象"
        },
        {
          "name": "helper",
          "propType": "node",
          "description": "帮助文本"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Menu", "SubMenu", "Menu.Group", "MenuButton"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Radio.Group",
      "title": "单选框组",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Radio",
        "main": "",
        "destructuring": true,
        "subName": "Group"
      },
      "props": [
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "name",
          "propType": "string",
          "description": "name"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["large", "medium", "small"]
          },
          "description": "尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "shape",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "button"]
          },
          "description": "展示形态"
        },
        {
          "name": "value",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "number", "bool"]
          },
          "description": "选中项的值"
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "number", "bool"]
          },
          "description": "默认值"
        },
        {
          "name": "component",
          "propType": "string",
          "description": "设置标签类型",
          "defaultValue": "div"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否被禁用"
        },
        {
          "name": "dataSource",
          "propType": "object",
          "description": "可选项列表"
        },
        {
          "name": "itemDirection",
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "子项目的排列方式",
          "defaultValue": "hoz"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态",
          "defaultValue": false
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {number} value 评分值"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中值改变时的事件\n@param {String/Number} value 选中项的值\n@param {Event} e Dom 事件对象"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "shape",
            "title": "展示形状",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "默认",
                    "value": "normal"
                  },
                  {
                    "title": "按钮",
                    "value": "button"
                  }
                ]
              }
            },
            "defaultValue": "normal"
          },
          {
            "name": "disabled",
            "title": "是否禁用",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "itemDirection",
            "title": "排列方式",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "水平排列",
                    "value": "hoz"
                  },
                  {
                    "title": "垂直排列",
                    "value": "ver"
                  }
                ]
              }
            },
            "defaultValue": "hoz"
          },
          {
            "name": "isPreview",
            "title": "预览态",
            "setter": {
              "componentName": "BoolSetter"
            }
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "defaultValue": "",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["StringSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "dataSource",
            "display": "block",
            "title": "选项",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "items": [
                              {
                                "name": "label",
                                "title": "label",
                                "setter": "StringSetter"
                              },
                              {
                                "name": "value",
                                "title": "value",
                                "setter": "StringSetter"
                              }
                            ]
                          }
                        },
                        "initialValue": {
                          "label": "选项一",
                          "value": "1"
                        }
                      }
                    }
                  },
                  "ExpressionSetter"
                ]
              }
            }
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true,
          "events": ["onChange"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Radio",
      "title": "单选框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Radio",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "id",
          "propType": "string",
          "description": "input元素id"
        },
        {
          "name": "name",
          "propType": "string",
          "description": "name"
        },
        {
          "name": "checked",
          "propType": "bool",
          "description": "是否选中"
        },
        {
          "name": "defaultChecked",
          "propType": "bool",
          "description": "是否默认选中"
        },
        {
          "name": "label",
          "propType": "string",
          "description": "通过属性配置label"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否被禁用"
        },
        {
          "name": "value",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "number", "bool"]
          },
          "description": "value"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态",
          "defaultValue": false
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "状态变化时触发的事件\n@param {Boolean} checked 是否选中\n@param {Event} e Dom 事件对象"
        },
        {
          "name": "onMouseEnter",
          "propType": "func",
          "description": "鼠标进入enter事件\n@param {Event} e Dom 事件对象"
        },
        {
          "name": "onMouseLeave",
          "propType": "func",
          "description": "鼠标离开事件\n@param {Event} e Dom 事件对象"
        }
      ],
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "RangeCalendar",
      "title": "RangeCalendar",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Calendar",
        "main": "",
        "destructuring": true,
        "subName": "RangeCalendar"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "description": "样式前缀",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "defaultStartValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "默认的开始日期"
        },
        {
          "name": "defaultEndValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "默认的结束日期"
        },
        {
          "name": "startValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "开始日期（moment 对象）"
        },
        {
          "name": "endValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "结束日期（moment 对象）"
        },
        {
          "name": "disableChangeMode",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "format",
          "propType": "string",
          "defaultValue": "YYYY-MM-DD"
        },
        {
          "name": "showOtherMonth",
          "propType": "bool",
          "description": "是否显示非本月的日期",
          "defaultValue": false
        },
        {
          "name": "defaultVisibleMonth",
          "propType": "func",
          "description": "模板展示的月份（起始月份）"
        },
        {
          "name": "onVisibleMonthChange",
          "propType": "func",
          "description": "展现的月份变化时的回调\n@param {Object} value 显示的月份 (moment 对象)\n@param {String} reason 触发月份改变原因"
        },
        {
          "name": "disabledDate",
          "propType": "func",
          "description": "不可选择的日期\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@returns {Boolean}"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选择日期单元格时的回调\n@param {Object} value 对应的日期值 (moment 对象)"
        },
        {
          "name": "dateCellRender",
          "propType": "func",
          "description": "自定义日期单元格渲染"
        },
        {
          "name": "monthCellRender",
          "propType": "func",
          "description": "自定义月份渲染函数\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@returns {ReactNode}"
        },
        {
          "name": "yearCellRender",
          "propType": "func"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "startValue",
              "setter": "DateSetter"
            },
            {
              "name": "defaultStartValue",
              "setter": "DateSetter"
            },
            {
              "name": "defaultEndValue",
              "setter": "DateSetter"
            },
            {
              "name": "endValue",
              "setter": "DateSetter"
            }
          ]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "RangePicker",
      "title": "日期区段选择",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "DatePicker",
        "main": "",
        "destructuring": true,
        "subName": "RangePicker"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "type",
          "propType": {
            "type": "oneOf",
            "value": ["date", "month", "year"]
          },
          "description": "日期范围类型",
          "defaultValue": "date"
        },
        {
          "name": "defaultVisibleMonth",
          "propType": "func",
          "description": "默认展示的起始月份\n@return {MomentObject} 返回包含指定月份的 moment 对象实例"
        },
        {
          "name": "onVisibleMonthChange",
          "propType": "func"
        },
        {
          "name": "value",
          "propType": "array",
          "description": "日期范围值数组 [moment, moment]"
        },
        {
          "name": "defaultValue",
          "propType": "array",
          "description": "初始的日期范围值数组 [moment, moment]"
        },
        {
          "name": "format",
          "propType": "string",
          "description": "日期格式",
          "defaultValue": "YYYY-MM-DD"
        },
        {
          "name": "showTime",
          "propType": "bool",
          "description": "是否使用时间控件，支持传入 TimePicker 的属性",
          "defaultValue": false
        },
        {
          "name": "resetTime",
          "propType": "bool",
          "description": "每次选择是否重置时间（仅在 showTime 开启时有效）",
          "defaultValue": false
        },
        {
          "name": "disabledDate",
          "propType": "func",
          "description": "禁用日期函数\n@param {MomentObject} 日期值\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@return {Boolean} 是否禁用"
        },
        {
          "name": "footerRender",
          "propType": "func",
          "description": "自定义面板页脚\n@return {Node} 自定义的面板页脚组件"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "日期范围值改变时的回调 [ MomentObject|String, MomentObject|String ]\n@param {Array<MomentObject|String>} value 日期值"
        },
        {
          "name": "onOk",
          "propType": "func",
          "description": "点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`\n@return {Array} 日期范围"
        },
        {
          "name": "label",
          "propType": "string",
          "description": "输入框内置标签"
        },
        {
          "name": "state",
          "propType": {
            "type": "oneOf",
            "value": ["error", "loading", "success"]
          },
          "description": "输入框状态"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "输入框尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "是否显示清空按钮",
          "defaultValue": true
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层显示状态"
        },
        {
          "name": "defaultVisible",
          "propType": "bool",
          "description": "弹层默认是否显示",
          "defaultValue": false
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层展示状态变化时的回调\n@param {Boolean} visible 弹层是否显示\n@param {String} type 触发弹层显示和隐藏的来源 okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "popupTriggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "弹层触发方式",
          "defaultValue": "click"
        },
        {
          "name": "popupAlign",
          "propType": "string",
          "description": "弹层对齐方式, 具体含义见 OverLay文档",
          "defaultValue": "tl tl"
        },
        {
          "name": "popupContainer",
          "propType": "node",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹层自定义样式类"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "startDateInputAriaLabel",
          "propType": "string",
          "description": "开始日期输入框的 aria-label 属性"
        },
        {
          "name": "startTimeInputAriaLabel",
          "propType": "string",
          "description": "开始时间输入框的 aria-label 属性"
        },
        {
          "name": "endDateInputAriaLabel",
          "propType": "string",
          "description": "结束日期输入框的 aria-label 属性"
        },
        {
          "name": "endTimeInputAriaLabel",
          "propType": "string",
          "description": "结束时间输入框的 aria-label 属性"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "name",
          "propType": "string"
        },
        {
          "name": "popupComponent",
          "propType": "string"
        },
        {
          "name": "popupContent",
          "propType": "node"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "supports": {
          "style": true,
          "events": ["onVisibleMonthChange", "onChange", "onOk", "onVisibleChange"]
        },
        "props": [
          {
            "name": "defaultValue",
            "title": {
              "label": "默认值",
              "tip": "初始的日期范围值数组 [moment, moment]"
            },
            "setter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "name": 0,
                      "title": "开始时间",
                      "setter": "DateSetter"
                    },
                    {
                      "name": 1,
                      "title": "结束时间",
                      "setter": "DateSetter"
                    }
                  ]
                }
              }
            }
          },
          {
            "name": "type",
            "title": "日期类型",
            "setter": {
              "setter": "RadioGroupSetter",
              "props": {
                "options": ["date", "month", "year"]
              }
            },
            "description": "日期范围类型",
            "defaultValue": "date"
          },
          {
            "name": "label",
            "title": "内置标签",
            "setter": "StringSetter",
            "description": "输入框内置标签"
          },
          {
            "name": "state",
            "title": "输入状态",
            "setter": {
              "setter": "RadioGroupSetter",
              "props": {
                "options": ["error", "loading", "success"]
              }
            },
            "description": "输入框状态"
          },
          {
            "name": "size",
            "title": "尺寸",
            "setter": {
              "setter": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "description": "输入框尺寸",
            "defaultValue": "medium"
          },
          {
            "name": "disabled",
            "setter": "BoolSetter",
            "title": "是否禁用"
          },
          {
            "name": "hasClear",
            "setter": "BoolSetter",
            "title": "清空按钮",
            "defaultValue": true
          },
          {
            "name": "defaultVisible",
            "setter": "BoolSetter",
            "title": "显示弹层",
            "defaultValue": false
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ]
      },
      "category": "内容",
      "icon": ""
    },
    {
      "componentName": "Range",
      "title": "区段选择器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Range",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "name",
          "propType": "string",
          "description": "name"
        },
        {
          "name": "value",
          "propType": "number",
          "description": "分值"
        },
        {
          "name": "slider",
          "title": {
            "label": "滑块个数",
            "tip": "滑块个数: 单个, 两个"
          },
          "propType": {
            "type": "oneOf",
            "value": ["single", "double"]
          },
          "description": "滑块个数\n@enumdesc 单个, 两个",
          "defaultValue": "single"
        },
        {
          "name": "min",
          "title": {
            "label": "最小值"
          },
          "propType": "number",
          "description": "最小值",
          "defaultValue": 0
        },
        {
          "name": "max",
          "title": {
            "label": "最大值"
          },
          "propType": "number",
          "description": "最大值",
          "defaultValue": 100
        },
        {
          "name": "step",
          "title": {
            "label": "步长",
            "tip": "步长，取值必须大于 0，并且可被 (max - min) 整除。"
          },
          "propType": "number",
          "description": "步长，取值必须大于 0，并且可被 (max - min) 整除。",
          "defaultValue": 1
        },
        {
          "name": "marksPosition",
          "title": {
            "label": "Marks 位置",
            "tip": "marksPosition|marks显示在上方('above')or下方('below')"
          },
          "propType": {
            "type": "oneOf",
            "value": ["above", "below"]
          },
          "description": "marks显示在上方('above')or下方('below')",
          "defaultValue": "above"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "值为 `true` 时，滑块为禁用状态",
          "defaultValue": false
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "当 Range 的值发生改变后，会触发 onChange 事件，并把改变后的值作为参数传入, 如果设置了value, 要配合此函数做受控使用\n@param {String/number} value"
        },
        {
          "name": "onProcess",
          "propType": "func",
          "description": "滑块拖动的时候触发的事件,不建议在这里setState, 一般情况下不需要用, 滑动时有特殊需求时使用\n@param {String/number} value"
        },
        {
          "name": "hasTip",
          "title": {
            "label": "是否显示 tip",
            "tip": "hasTip"
          },
          "propType": "bool",
          "description": "是否显示 tip",
          "defaultValue": true
        },
        {
          "name": "reverse",
          "title": {
            "label": "选中态反转",
            "tip": "reverse"
          },
          "propType": "bool",
          "description": "选中态反转",
          "defaultValue": false
        },
        {
          "name": "pure",
          "propType": "bool",
          "description": "是否pure render",
          "defaultValue": false
        },
        {
          "name": "fixedWidth",
          "propType": "bool",
          "description": "是否为拖动线段类型,默认slider为double, defaultValue必传且指定区间",
          "defaultValue": false
        },
        {
          "name": "tooltipVisible",
          "propType": "bool",
          "description": "tooltip是否默认展示",
          "defaultValue": false
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态",
          "defaultValue": false
        }
      ],
      "configure": {
        "props": [
          {
            "name": "value",
            "title": "当前值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "min",
            "title": {
              "label": "最小值"
            },
            "setter": "NumberSetter",
            "description": "最小值",
            "defaultValue": 0
          },
          {
            "name": "max",
            "title": {
              "label": "最大值"
            },
            "setter": "NumberSetter",
            "description": "最大值",
            "defaultValue": 100
          },
          {
            "name": "step",
            "title": {
              "label": "步长",
              "tip": "步长，取值必须大于 0，并且可被 (max - min) 整除。"
            },
            "setter": "NumberSetter",
            "description": "步长，取值必须大于 0，并且可被 (max - min) 整除。",
            "defaultValue": 1
          },
          {
            "name": "slider",
            "title": {
              "label": "滑块个数",
              "tip": "滑块个数: 单个, 两个"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["single", "double"]
              }
            },
            "description": "滑块个数\n@enumdesc 单个, 两个",
            "defaultValue": "single"
          },
          {
            "name": "marksPosition",
            "title": {
              "label": "Marks 位置",
              "tip": "marksPosition|marks显示在上方('above')or下方('below')"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["above", "below"]
              }
            },
            "description": "marks显示在上方('above')or下方('below')",
            "defaultValue": "above"
          },
          {
            "name": "disabled",
            "title": "是否禁用",
            "setter": "BoolSetter",
            "description": "值为 `true` 时，滑块为禁用状态",
            "defaultValue": false
          },
          {
            "name": "hasTip",
            "title": {
              "label": "显示 Tip",
              "tip": "hasTip"
            },
            "setter": "BoolSetter",
            "description": "是否显示 tip",
            "defaultValue": true
          },
          {
            "name": "fixedWidth",
            "title": "固定宽度",
            "setter": "BoolSetter",
            "description": "是否为拖动线段类型,默认slider为double, defaultValue必传且指定区间",
            "defaultValue": false
          },
          {
            "name": "tooltipVisible",
            "display": "block",
            "setter": "BoolSetter",
            "title": "tooltip是否默认展示",
            "defaultValue": false
          },
          {
            "name": "reverse",
            "display": "block",
            "title": {
              "label": "选中态反转",
              "tip": "reverse"
            },
            "setter": "BoolSetter",
            "description": "选中态反转",
            "defaultValue": false
          },
          {
            "name": "isPreview",
            "display": "block",
            "setter": "BoolSetter",
            "title": "是否为预览态",
            "defaultValue": false
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ]
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Rating",
      "title": "评分",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Rating",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "name",
          "propType": "string",
          "description": "name"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "defaultValue",
          "propType": "number",
          "description": "默认值",
          "defaultValue": 0
        },
        {
          "name": "value",
          "propType": "number",
          "description": "值"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "count",
          "propType": "number",
          "description": "评分的总数",
          "defaultValue": 5
        },
        {
          "name": "showGrade",
          "propType": "bool",
          "description": "是否显示 grade",
          "defaultValue": false
        },
        {
          "name": "allowHalf",
          "propType": "bool",
          "description": "是否允许半星评分",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态",
          "defaultValue": false
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容"
        },
        {
          "name": "readOnly",
          "propType": "bool",
          "description": "是否为只读态，效果上同 disabeld",
          "defaultValue": false
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "用户点击评分时触发的回调\n@param {String} value 评分值"
        },
        {
          "name": "onHoverChange",
          "propType": "func",
          "description": "用户hover评分时触发的回调\n@param {String} value 评分值"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "value",
            "title": "当前值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "size",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "尺寸",
                "en-US": "Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大",
                "en-US": "prop: size | description: size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "count",
            "title": "评分总数",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "allowHalf",
            "title": "半星评分",
            "setter": ["BoolSetter", "ExpressionSetter"]
          },
          {
            "name": "showGrade",
            "title": "显示分数",
            "setter": ["BoolSetter", "ExpressionSetter"]
          },
          {
            "name": "readAs",
            "title": "评分文案生成方法",
            "display": "block",
            "setter": {
              "componentName": "FunctionSetter"
            }
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          },
          {
            "name": "style",
            "setter": {
              "componentName": "StyleSetter"
            }
          }
        ],
        "supports": {
          "events": ["onChange", "onHoverChange"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "ResponsiveGrid.Cell",
      "title": "布局容器 Cell",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "ResponsiveGrid",
        "main": "",
        "destructuring": true,
        "subName": "Cell"
      },
      "props": [
        {
          "name": "colSpan",
          "propType": "number",
          "description": "横向，占据几列"
        },
        {
          "name": "rowSpan",
          "propType": "number",
          "description": "纵向，占据几行"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "advanced": {
          "getResizingHandlers": {
            "type": "JSFunction",
            "value": "node => {\n      const currentNodeIndex = node.getIndex();\n      const parent = node.getParent();\n      if (!parent) return [];\n      let layout = parent.getPropValue(\"layout\");\n      if (!layout) return [];\n      layout = layout.split(\":\").map(item => parseInt(item, 10));\n      \n      if (currentNodeIndex >= layout.length - 1) {\n        return [];\n      }\n      return [\"e\"];\n    }"
          },
          "callbacks": {
            "onResizeStart": {
              "type": "JSFunction",
              "value": "(e, currentNode) => {\n        const { trigger } = e;\n        let nodeIndex = currentNode.getIndex();\n        let startLayout = currentNode.getParent().getPropValue(\"layout\");\n        startLayout = startLayout.split(\":\").map(item => parseInt(item, 10));\n        let eachWidth = currentNode.getRect().width / startLayout[nodeIndex];\n        \n        currentNode.nodeIndex = nodeIndex;\n        currentNode.startLayout = startLayout;\n        currentNode.eachWidth = eachWidth;\n      }"
            },
            "onResize": {
              "type": "JSFunction",
              "value": "(e, currentNode) => {\n        const { trigger, deltaX, deltaY } = e;\n        const { nodeIndex, startLayout, eachWidth } = currentNode;\n        let moveColumn = Math.round(deltaX / eachWidth);\n        const layout = [...startLayout]; \n        if (moveColumn > 0) {\n          moveColumn = Math.min(moveColumn, layout[nodeIndex + 1] - 1);\n        } else {\n          moveColumn = -Math.min(-moveColumn, layout[nodeIndex] - 1);\n        }\n        layout[nodeIndex] += moveColumn;\n        layout[nodeIndex + 1] -= moveColumn;\n        \n        let nextNode = currentNode\n          .getParent()\n          .getChildren()\n          .filter((c, index) => {\n            return index === nodeIndex + 1;\n          });\n        \n        currentNode.setPropValue(\"colSpan\", layout[nodeIndex]);\n        \n        if (nextNode && nextNode[0]) {\n          nextNode[0].setPropValue(\"colSpan\", layout[nodeIndex + 1]);\n        }\n        \n        currentNode.getParent().setPropValue(\"layout\", layout.join(\":\"));\n      }"
            }
          }
        }
      },
      "icon": "",
      "category": "容器"
    },
    {
      "componentName": "ResponsiveGrid",
      "title": "布局容器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "ResponsiveGrid",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "any"
        },
        {
          "name": "device",
          "propType": {
            "type": "oneOf",
            "value": ["phone", "tablet", "desktop"]
          },
          "description": "设备，用来做自适应，默认为PC",
          "defaultValue": "desktop"
        },
        {
          "name": "columns",
          "propType": "number",
          "description": "分为几列",
          "defaultValue": 12
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": [
          {
            "name": "layout",
            "title": "布局",
            "defaultValue": "6:6",
            "setter": {
              "componentName": "StringSetter"
            },
            "extraProps": {
              "setValue": {
                "type": "JSFunction",
                "value": "setValue(target, value) {\n            \n            let arrValue = value.split(\":\");\n            arrValue = arrValue.filter(item => {\n              return item && item.trim(); \n            });\n            const flag = arrValue.find(item => {\n              return isNaN(Number(item));\n            });\n            if (flag) {\n              return;\n            }\n            const node = target.getNode();\n            node.children.mergeChildren(\n              (child, index) => {\n                child.setPropValue(\"colSpan\", arrValue[index]);\n                return index >= arrValue.length;\n              },\n              children => {\n                let l = children.length;\n                const items = [];\n                while (l++ < arrValue.length) {\n                  items.push({\n                    componentName: \"ResponsiveGrid.Cell\",\n                    props: {\n                      colSpan: arrValue[l - 1] || 1\n                    }\n                  });\n                }\n                return items;\n              },\n              null\n            );\n          }"
              }
            }
          },
          {
            "name": "gap",
            "title": "列间距",
            "defaultValue": 0,
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "NumberSetter",
                    "props": {
                      "defaultValue": 8
                    }
                  },
                  {
                    "componentName": "JsonSetter",
                    "props": {
                      "defaultValue": [8, 4]
                    }
                  },
                  "ExpressionSetter"
                ]
              }
            }
          },
          {
            "name": "dense",
            "title": "紧密模式",
            "defaultValue": false,
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "style",
            "setter": {
              "componentName": "StyleSetter"
            }
          }
        ]
      },
      "icon": "",
      "category": "容器"
    },
    {
      "componentName": "RichText",
      "title": "需求占位",
      "npm": {
        "package": "@alifd/ali-lowcode-components",
        "version": "latest",
        "exportName": "RichText",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "override": [
            {
              "name": "style",
              "propType": "object"
            },
            {
              "name": "maxHeight",
              "title": "最大高度",
              "propType": "number",
              "setter": "NumberSetter",
              "description": "最大高度"
            },
            {
              "name": "content",
              "title": "需求内容",
              "display": "inline",
              "supportVariable": true,
              "setter": {
                "componentName": "EditSetter",
                "props": {
                  "title": "点击编辑需求内容"
                }
              }
            }
          ]
        },
        "advanced": {
          "getResizingHandlers": {
            "type": "JSFunction",
            "value": "() => {\n      return [\"e\"];\n    }"
          },
          "callbacks": {
            "onResizeStart": {
              "type": "JSFunction",
              "value": "(e, currentNode) => {\n        const parent = currentNode.getParent();\n        if (parent) {\n          const parentNode = parent.getDOMNode();\n          if (parentNode) {\n            currentNode.parentRect = parentNode.getBoundingClientRect();\n          }\n        }\n        currentNode.beforeSpan = currentNode.getPropValue(\"colSpan\") || 12;\n        currentNode.startRect = currentNode.getRect();\n      }"
            },
            "onResize": {
              "type": "JSFunction",
              "value": "(e, currentNode) => {\n        const { deltaX } = e;\n        const startWidth = currentNode.startRect\n          ? currentNode.startRect.width\n          : currentNode.beforeSpan * (currentNode.parentRect.width / 12);\n        let width = startWidth + deltaX;\n        if (!currentNode.startRect) {\n          currentNode.startRect = {\n            width\n          };\n        }\n        width = Math.max(0, width); \n        width = Math.min(width, currentNode.parentRect.width); \n        currentNode.getDOMNode().style[\"width\"] = `${Math.round(width)}px`;\n      }"
            },
            "onResizeEnd": {
              "type": "JSFunction",
              "value": "(e, currentNode) => {\n        currentNode.setPropValue(\"style.width\", currentNode.getDOMNode().style[\"width\"]);\n      }"
            }
          }
        }
      },
      "icon": "https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png",
      "category": "常用"
    },
    {
      "componentName": "Search",
      "title": "搜索",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Search",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "configure": {
        "supports": {
          "style": true,
          "events": ["onChange", "onSearch", "onFilterChange"]
        },
        "props": [
          {
            "name": "placeholder",
            "title": "提示文字",
            "setter": "StringSetter",
            "description": "默认提示"
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "setter": "StringSetter",
            "description": "搜索框默认值"
          },
          {
            "name": "searchText",
            "title": "按钮文案",
            "setter": "StringSetter",
            "description": "button 的内容"
          },
          {
            "name": "size",
            "title": {
              "label": "尺寸",
              "tip": "size|'大', '小'"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "large",
                    "value": "large"
                  },
                  {
                    "title": "medium",
                    "value": "medium"
                  }
                ]
              }
            },
            "description": "大小\n@enumdesc '大', '小'",
            "defaultValue": "medium"
          },
          {
            "name": "shape",
            "title": {
              "label": "形状",
              "tip": "shape|形状"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["normal", "simple"]
              }
            },
            "description": "形状",
            "defaultValue": "normal"
          },
          {
            "name": "type",
            "title": {
              "label": "类型",
              "tip": "type|类型 shape=normal: primary/secondary; shape=simple: normal/dark;"
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["primary", "secondary", "normal", "dark"]
              }
            },
            "description": "类型 shape=normal: primary/secondary; shape=simple: normal/dark;",
            "defaultValue": "normal"
          },
          {
            "name": "hasClear",
            "title": "清除按钮",
            "setter": "BoolSetter",
            "description": "是否显示清除按钮",
            "defaultValue": false
          },
          {
            "name": "hasIcon",
            "title": "搜索图标",
            "setter": "BoolSetter",
            "description": "是否显示搜索按钮",
            "defaultValue": true
          },
          {
            "name": "disabled",
            "title": "是否禁用",
            "setter": "BoolSetter",
            "description": "是否禁用",
            "defaultValue": false
          },
          {
            "name": "dataSource",
            "display": "block",
            "title": {
              "label": "搜索框下拉联想列表",
              "tip": "dataSource | 搜索框下拉联想列表"
            },
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["JsonSetter", "ExpressionSetter"]
              }
            }
          },
          {
            "name": "filter",
            "display": "block",
            "title": {
              "label": "选择器数据",
              "tip": "filter|选择器数据"
            },
            "setter": {
              "componentName": "JsonSetter"
            }
          },
          {
            "name": "defaultFilterValue",
            "display": "block",
            "title": "选择器默认值",
            "setter": "StringSetter",
            "description": "选择器默认值"
          }
        ],
        "advanced": {
          "initials": [
            {
              "name": "dataSource",
              "initial": {
                "type": "JSFunction",
                "value": "() => [\n          {\n            label: \"Recent\",\n            value: \"Recent\"\n          },\n          {\n            label: \"dress\",\n            value: \"dress\"\n          },\n          {\n            label: \"sunglasses\",\n            value: \"sunglasses\"\n          },\n          {\n            label: \"t-shirt\",\n            value: \"t-shirt\"\n          }\n        ]"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "导航"
    },
    {
      "componentName": "Select.Option",
      "title": "Select.Option",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Select",
        "main": "",
        "destructuring": true,
        "subName": "Option"
      },
      "props": [
        {
          "name": "value",
          "propType": "string",
          "description": "选项值",
          "defaultValue": "test"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Select",
      "title": "选择器",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Select",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "placeholder",
          "title": {
            "label": "占位提示",
            "tip": "属性: placeholder"
          },
          "defaultValue": "请选择",
          "propType": "string"
        },
        {
          "name": "mode",
          "propType": {
            "type": "oneOf",
            "value": ["single", "multiple", "tag"]
          },
          "description": "选择器模式"
        },
        {
          "name": "hasClear",
          "title": {
            "label": "清除按钮",
            "tip": "属性: hasClear"
          },
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "showSearch",
          "title": {
            "label": "可搜索",
            "tip": "属性: showSearch"
          },
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "dataSource"
        },
        {
          "type": "group",
          "title": "其他配置",
          "display": "block",
          "items": [
            {
              "name": "id",
              "setter": "StringSetter",
              "title": "ID"
            },
            {
              "name": "notFoundContent",
              "title": {
                "label": "空文案",
                "tip": "notFoundContent|弹层内容为空的文案"
              },
              "setter": "StringSetter",
              "description": "弹层内容为空的文案"
            },
            {
              "name": "hasBorder",
              "title": {
                "label": "边框",
                "tip": "是否有边框"
              },
              "propType": "bool",
              "setter": "BoolSetter",
              "description": "是否有边框"
            },
            {
              "name": "autoWidth",
              "title": "下拉等宽",
              "propType": "bool",
              "setter": "BoolSetter"
            },
            {
              "name": "hasArrow",
              "title": "下拉箭头",
              "propType": "bool",
              "setter": "BoolSetter",
              "description": "是否有下拉箭头",
              "defaultValue": true
            }
          ]
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "dataSource",
              "display": "block",
              "title": "选项",
              "tip": {
                "title": "数据格式",
                "url": ""
              },
              "setter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": [
                    {
                      "componentName": "ArraySetter",
                      "props": {
                        "itemSetter": {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "name": "label",
                                  "title": "label",
                                  "setter": "StringSetter"
                                },
                                {
                                  "name": "value",
                                  "title": "value",
                                  "setter": "StringSetter"
                                }
                              ]
                            }
                          },
                          "initialValue": {
                            "title": "Title"
                          }
                        }
                      }
                    },
                    "ExpressionSetter"
                  ]
                }
              }
            },
            {
              "name": "mode",
              "title": {
                "label": "模式",
                "tip": "属性: mode"
              },
              "setter": {
                "componentName": "RadioGroupSetter",
                "props": {
                  "defaultValue": "single",
                  "options": [
                    {
                      "value": "single",
                      "title": "单选"
                    },
                    {
                      "value": "multiple",
                      "title": "多选"
                    },
                    {
                      "value": "tag",
                      "title": "标签"
                    }
                  ]
                }
              }
            }
          ]
        },
        "supports": {
          "style": true,
          "events": [
            {
              "name": "onChange",
              "propType": "func",
              "description": "值发生变化"
            },
            {
              "name": "onVisibleChange",
              "propType": "func",
              "description": "弹层显示隐藏变化"
            },
            {
              "name": "onRemove",
              "propType": "func",
              "description": "Tag 被删除"
            },
            {
              "name": "onSearch",
              "propType": "func",
              "description": "搜索"
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Slider",
      "title": "图片轮播",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Slider",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "className",
          "propType": "any",
          "description": "自定义传入的样式"
        },
        {
          "name": "slidesToShow",
          "title": {
            "label": "图片数量",
            "tip": "slidesToShow|同时展示的图片数量"
          },
          "propType": "number",
          "description": "同时展示的图片数量",
          "defaultValue": 1
        },
        {
          "name": "slidesToScroll",
          "title": {
            "label": "同时滑动的图片数量",
            "tip": "slidesToScroll"
          },
          "propType": "number",
          "description": "同时滑动的图片数量",
          "defaultValue": 1
        },
        {
          "name": "speed",
          "title": {
            "label": "轮播速度",
            "tip": "speed"
          },
          "propType": "number",
          "description": "轮播速度",
          "defaultValue": 600
        },
        {
          "name": "activeIndex",
          "title": {
            "label": "指定轮播图",
            "tip": "activeIndex|跳转到指定的轮播图（受控）"
          },
          "propType": "number",
          "description": "跳转到指定的轮播图（受控）"
        },
        {
          "name": "adaptiveHeight",
          "title": {
            "label": "自适应高度",
            "tip": "adaptiveHeight"
          },
          "propType": "bool",
          "description": "是否使用自适应高度",
          "defaultValue": false
        },
        {
          "name": "animation",
          "title": {
            "label": "动效类型",
            "tip": "animation"
          },
          "propType": {
            "type": "oneOfType",
            "value": ["string", "bool"]
          },
          "description": "动效类型，默认是'slide'",
          "defaultValue": "slide"
        },
        {
          "name": "arrows",
          "title": {
            "label": "箭头",
            "tip": "arrows|是否显示箭头"
          },
          "propType": "bool",
          "description": "是否显示箭头",
          "defaultValue": true
        },
        {
          "name": "arrowSize",
          "title": {
            "label": "箭头大小",
            "tip": "arrowSize|导航箭头大小 可选值: 'medium', 'large'"
          },
          "propType": {
            "type": "oneOf",
            "value": ["medium", "large"]
          },
          "description": "导航箭头大小 可选值: 'medium', 'large'",
          "defaultValue": "medium"
        },
        {
          "name": "arrowPosition",
          "title": {
            "label": "箭头位置",
            "tip": "arrowPosition|导航箭头位置 可选值: 'inner', 'outer'"
          },
          "propType": {
            "type": "oneOf",
            "value": ["inner", "outer"]
          },
          "description": "导航箭头位置 可选值: 'inner', 'outer'",
          "defaultValue": "inner"
        },
        {
          "name": "arrowDirection",
          "title": {
            "label": "箭头方向",
            "tip": "arrowDirection|导航箭头的方向 可选值: 'hoz', 'ver'"
          },
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "导航箭头的方向 可选值: 'hoz', 'ver'",
          "defaultValue": "hoz"
        },
        {
          "name": "autoplay",
          "title": {
            "label": "自动播放",
            "tip": "autoplay"
          },
          "propType": "bool",
          "description": "是否自动播放",
          "defaultValue": false
        },
        {
          "name": "autoplaySpeed",
          "title": {
            "label": "自动播放的速度",
            "tip": "autoplaySpeed, 默认 3000 毫秒"
          },
          "propType": "number",
          "description": "自动播放的速度",
          "defaultValue": 3000
        },
        {
          "name": "nextArrow",
          "propType": "node",
          "description": "向后箭头",
          "defaultValue": null
        },
        {
          "name": "prevArrow",
          "propType": "node",
          "description": "向前箭头",
          "defaultValue": null
        },
        {
          "name": "centerMode",
          "title": {
            "label": "居中模式",
            "tip": "centerMode"
          },
          "propType": "bool",
          "description": "是否启用居中模式",
          "defaultValue": false
        },
        {
          "name": "dots",
          "title": {
            "label": "导航锚点",
            "tip": "dots|是否显示导航锚点"
          },
          "propType": "bool",
          "description": "是否显示导航锚点",
          "defaultValue": true
        },
        {
          "name": "dotsDirection",
          "title": {
            "label": "导航锚点位置",
            "tip": "dotsDirection"
          },
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "导航锚点位置",
          "defaultValue": "hoz"
        },
        {
          "name": "draggable",
          "title": {
            "label": "可拖拽",
            "tip": "draggable"
          },
          "propType": "bool",
          "description": "是否可拖拽",
          "defaultValue": true
        },
        {
          "name": "infinite",
          "title": {
            "label": "无穷循环",
            "tip": "infinite"
          },
          "propType": "bool",
          "description": "是否使用无穷循环模式",
          "defaultValue": true
        },
        {
          "name": "defaultActiveIndex",
          "title": {
            "label": "初始轮播图",
            "tip": "defaultActiveIndex|初始被激活的轮播图"
          },
          "propType": "number",
          "description": "初始被激活的轮播图",
          "defaultValue": 0
        },
        {
          "name": "lazyLoad",
          "title": {
            "label": "懒加载",
            "tip": "lazyLoad|是否启用懒加载"
          },
          "propType": "bool",
          "description": "是否启用懒加载",
          "defaultValue": false
        },
        {
          "name": "slideDirection",
          "title": {
            "label": "轮播方向",
            "tip": "slideDirection"
          },
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "轮播方向",
          "defaultValue": "hoz"
        },
        {
          "name": "triggerType",
          "title": {
            "label": "触发方式",
            "tip": "triggerType|锚点导航触发方式"
          },
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "锚点导航触发方式",
          "defaultValue": "click"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "轮播切换的回调函数\n@param {Number} index 幻灯片的索引"
        },
        {
          "name": "onBeforeChange",
          "propType": "func"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义传入的class",
          "defaultValue": null
        },
        {
          "name": "focusOnSelect",
          "title": {
            "label": "自动居中",
            "tip": "focusOnSelect|多图轮播时，点击选中后自动居中"
          },
          "propType": "bool",
          "description": "多图轮播时，点击选中后自动居中",
          "defaultValue": false
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "rtl",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "prefix",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "SplitButton",
      "title": "分隔按钮",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "SplitButton",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "主按钮的文案"
        },
        {
          "name": "type",
          "title": "按钮类型",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "primary", "secondary"]
          },
          "description": "按钮的类型",
          "defaultValue": "normal"
        },
        {
          "name": "size",
          "title": "按钮尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "按钮组的尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "component",
          "title": "标签类型",
          "propType": {
            "type": "oneOf",
            "value": ["button", "a"]
          },
          "defaultValue": "button",
          "description": "设置标签类型"
        },
        {
          "name": "ghost",
          "title": "幽灵按钮",
          "propType": {
            "type": "oneOf",
            "value": ["light", "dark", false, true]
          },
          "description": "是否为幽灵按钮"
        },
        {
          "name": "defaultSelectedKeys",
          "propType": {
            "type": "instanceOf",
            "value": "array"
          },
          "description": "默认激活的菜单项（用法同 Menu 非受控）",
          "defaultValue": []
        },
        {
          "name": "selectedKeys",
          "propType": {
            "type": "instanceOf",
            "value": "array"
          },
          "description": "激活的菜单项（用法同 Menu 受控）"
        },
        {
          "name": "selectMode",
          "title": "单选多选",
          "propType": {
            "type": "oneOf",
            "value": ["single", "multiple"]
          },
          "defaultValue": "single",
          "description": "菜单的选择模式"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选择菜单项时的回调，参考 Menu"
        },
        {
          "name": "onItemClick",
          "propType": "func",
          "description": "点击菜单项时的回调，参考 Menu"
        },
        {
          "name": "triggerProps",
          "propType": "object",
          "description": "触发按钮的属性（支持 Button 的所有属性透传）"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层显示状态变化时的回调函数\n@param {Boolean} visible 弹层显示状态\n@param {String} type 触发弹层显示或隐藏的来源 menuSelect 表示由menu触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "popupTriggerType",
          "title": "弹层触发",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "弹层的触发方式",
          "defaultValue": "click"
        },
        {
          "name": "popupAlign",
          "title": "弹层对齐",
          "propType": "string",
          "description": "弹层对齐方式, 详情见Overlay align"
        },
        {
          "name": "popupStyle",
          "propType": "object",
          "description": "弹层自定义样式"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹层自定义样式类"
        },
        {
          "name": "popupProps",
          "propType": "object",
          "description": "透传给弹层的属性"
        },
        {
          "name": "autoWidth",
          "title": "自动宽度",
          "propType": "bool",
          "description": "弹层菜单的宽度是否与按钮组一致",
          "defaultValue": true
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层是否显示"
        },
        {
          "name": "defaultVisible",
          "title": "默认显示",
          "defaultValue": true,
          "propType": "bool",
          "description": "弹层默认是否显示"
        },
        {
          "name": "followTrigger",
          "title": "跟随滚动",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "menuProps",
          "propType": "object",
          "description": "透传给 Menu 的属性"
        },
        {
          "name": "leftButtonProps",
          "propType": "object",
          "description": "透传给 左侧按钮 的属性"
        },
        {
          "name": "className",
          "propType": "string"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "prefix",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "defaultSelectedKeys",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "selectedKeys",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "triggerProps",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "leftButtonProps",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "menuProps",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupStyle",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupClassName",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupProps",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "visible",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "label",
              "title": "按钮文案",
              "setter": "StringSetter"
            },
            {
              "name": "ghost",
              "title": "幽灵按钮",
              "setter": {
                "componentName": "RadioGroupSetter",
                "props": {
                  "options": ["light", "dark", false, true]
                }
              },
              "defaultValue": false
            }
          ]
        },
        "advanced": {
          "initials": [
            {
              "name": "label",
              "initial": {
                "type": "JSFunction",
                "value": "() => \"分隔按钮\""
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "常用"
    },
    {
      "componentName": "Step.Item",
      "title": "步骤项",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Step",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "icon",
          "propType": "string",
          "description": "图标"
        },
        {
          "name": "title",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标题"
        },
        {
          "name": "content",
          "title": {
            "label": "内容",
            "tip": "content|内容填充, shape为 arrow 时无效"
          },
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "内容填充, shape为 arrow 时无效"
        },
        {
          "name": "status",
          "title": {
            "label": "状态",
            "tip": "status|步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`"
          },
          "propType": {
            "type": "oneOf",
            "value": ["wait", "process", "finish"]
          },
          "description": "步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`"
        },
        {
          "name": "percent",
          "propType": "number",
          "description": "百分比"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "onClick",
          "propType": "func",
          "description": "点击步骤时的回调\n@param {Number} index 节点索引"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义样式"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "icon",
              "title": {
                "label": "图标",
                "tip": "icon|图标"
              },
              "setter": {
                "componentName": "IconSetter"
              }
            },
            {
              "name": "content",
              "title": {
                "label": "内容",
                "tip": "content|内容"
              },
              "setter": {
                "componentName": "TextAreaSetter"
              }
            },
            {
              "name": "status",
              "title": {
                "label": "状态",
                "tip": "status|状态"
              },
              "setter": {
                "componentName": "RadioGroupSetter",
                "props": {
                  "options": [
                    {
                      "title": "等待",
                      "value": "wait"
                    },
                    {
                      "title": "进行中",
                      "value": "process"
                    },
                    {
                      "title": "结束",
                      "value": "finish"
                    },
                    {
                      "title": "默认",
                      "value": ""
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "category": "null",
      "icon": ""
    },
    {
      "componentName": "Step",
      "title": "步骤条",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Step",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "current",
          "propType": "number",
          "description": "当前步骤",
          "defaultValue": 0
        },
        {
          "name": "direction",
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "展示方向",
          "defaultValue": "hoz"
        },
        {
          "name": "labelPlacement",
          "propType": {
            "type": "oneOf",
            "value": ["hoz", "ver"]
          },
          "description": "横向布局时( direction 为 hoz )的内容排列",
          "defaultValue": "ver"
        },
        {
          "name": "shape",
          "propType": {
            "type": "oneOf",
            "value": ["circle", "arrow", "dot"]
          },
          "description": "类型",
          "defaultValue": "circle"
        },
        {
          "name": "readOnly",
          "propType": "bool",
          "description": "是否只读模式"
        },
        {
          "name": "animation",
          "propType": "bool",
          "description": "是否开启动效",
          "defaultValue": true
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义样式名"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": [
          {
            "name": "items",
            "title": "步骤项",
            "setter": {
              "componentName": "ArraySetter",
              "props": {
                "itemSetter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "icon",
                          "title": "图标",
                          "setter": "IconSetter",
                          "description": "图标"
                        },
                        {
                          "name": "title",
                          "title": "标题",
                          "setter": "StringSetter",
                          "description": "标题"
                        },
                        {
                          "name": "status",
                          "setter": {
                            "componentName": "RadioGroupSetter",
                            "props": {
                              "options": ["wait", "process", "finish"]
                            }
                          },
                          "description": "步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`"
                        },
                        {
                          "name": "content",
                          "title": {
                            "label": "内容",
                            "tip": "content|内容填充, shape为 arrow 时无效"
                          },
                          "setter": "TextAreaSetter",
                          "description": "内容填充, shape为 arrow 时无效"
                        },
                        {
                          "name": "percent",
                          "title": "百分比",
                          "setter": "NumberSetter",
                          "description": "百分比"
                        },
                        {
                          "name": "disabled",
                          "title": "是否禁用",
                          "setter": "BoolSetter",
                          "description": "是否禁用"
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "type": "JSFunction",
                    "value": "() => {\n                return {\n                  primaryKey: String(Math.floor(Math.random() * 10000)),\n                  title: \"StepItem\"\n                };\n              }"
                  }
                }
              }
            },
            "extraProps": {
              "getValue": {
                "type": "JSFunction",
                "value": "getValue(target, fieldValue) {\n            \n            \n            const map = target.getNode().children.map(child => {\n              const primaryKey = child.getPropValue(\"primaryKey\")\n                ? String(child.getPropValue(\"primaryKey\"))\n                : child.id;\n              return {\n                primaryKey: primaryKey,\n                icon: child.getPropValue(\"icon\"),\n                title: child.getPropValue(\"title\"),\n                status: child.getPropValue(\"status\"),\n                content: child.getPropValue(\"content\"),\n                percent: child.getPropValue(\"percent\"),\n                disabled: child.getPropValue(\"disabled\"),\n              };\n            });\n            return map;\n          }"
              },
              "setValue": {
                "type": "JSFunction",
                "value": "setValue(target, value) {\n            const node = target.getNode();\n            const map = {};\n            if (!Array.isArray(value)) {\n              value = [];\n            }\n            value.forEach(item => {\n              const tabitem = Object.assign({}, item);\n              map[item.primaryKey] = tabitem;\n            });\n\n            node.children.mergeChildren(\n              child => {\n                const primaryKey = String(child.getPropValue(\"primaryKey\"));\n                if (Object.hasOwnProperty.call(map, primaryKey)) {\n                  child.setPropValue(\"icon\", map[primaryKey].icon);\n                  child.setPropValue(\"title\", map[primaryKey].title);\n                  child.setPropValue(\"content\", map[primaryKey].content);\n                  child.setPropValue(\"status\", map[primaryKey].status);\n                  child.setPropValue(\"percent\", map[primaryKey].percent);\n                  child.setPropValue(\"disabled\", map[primaryKey].disabled);\n                  delete map[primaryKey];\n                  return false;\n                }\n                return true;\n              },\n              () => {\n                const items = [];\n                for (const primaryKey in map) {\n                  if (Object.hasOwnProperty.call(map, primaryKey)) {\n                    items.push({\n                      componentName: \"Step.Item\",\n                      props: map[primaryKey]\n                    });\n                  }\n                }\n                return items;\n              },\n              (child1, child2) => {\n                const a = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child1.getPropValue(\"primaryKey\"))\n                );\n                const b = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child2.getPropValue(\"primaryKey\"))\n                );\n                return a - b;\n              }\n            );\n          }"
              }
            }
          },
          {
            "name": "current",
            "setter": {
              "type": "JSFunction",
              "value": "() => {\n          const items = this.props.getPropValue('items');\n          return {\n            componentName: \"MixedSetter\",\n            props: {\n              setters: [\n                {\n                  componentName: \"NumberSetter\",\n                  props: {\n                    min: 0,\n                    max: items.length - 1,\n                    defaultValue: 0\n                  }\n                }, \n                \"ExpressionSetter\"\n              ]\n            }\n          };\n        }"
            },
            "title": "当前步骤",
            "defaultValue": 0
          },
          {
            "name": "direction",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["hoz", "ver"]
              }
            },
            "title": "展示方向",
            "defaultValue": "hoz"
          },
          {
            "name": "labelPlacement",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["hoz", "ver"]
              }
            },
            "title": "内容排列",
            "defaultValue": "ver"
          },
          {
            "name": "shape",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["circle", "arrow", "dot"]
              }
            },
            "title": "类型",
            "defaultValue": "circle"
          },
          {
            "name": "readOnly",
            "setter": "BoolSetter",
            "title": "是否只读"
          },
          {
            "name": "animation",
            "setter": "BoolSetter",
            "title": "开启动效",
            "defaultValue": true
          }
        ]
      },
      "icon": "",
      "category": "导航"
    },
    {
      "componentName": "SubMenu",
      "title": "子菜单",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Menu",
        "main": "",
        "destructuring": true,
        "subName": "SubMenu"
      },
      "props": [
        {
          "name": "key",
          "propType": "string",
          "description": "子菜单标识符"
        },
        {
          "name": "label",
          "propType": "node",
          "description": "标签内容"
        },
        {
          "name": "selectable",
          "propType": "bool",
          "description": "是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效",
          "defaultValue": false
        },
        {
          "name": "mode",
          "propType": {
            "type": "oneOf",
            "value": ["inline", "popup"]
          },
          "description": "子菜单打开方式，如果设置会覆盖 Menu 上的同名属性\n@default Menu 的 mode 属性值"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Menu", "SubMenu", "Menu.Group", "MenuButton"]
          }
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "SubNav",
      "title": "SubNav",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Nav",
        "main": "",
        "destructuring": true,
        "subName": "SubNav"
      },
      "props": [
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "icon",
          "propType": {
            "type": "oneOfType",
            "value": [
              "string",
              {
                "type": "instanceOf",
                "value": "node"
              }
            ]
          },
          "description": "自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type=\"your type\" />`"
        },
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "标签内容"
        },
        {
          "name": "selectable",
          "propType": "bool",
          "description": "是否可选",
          "defaultValue": false
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "导航项和子导航"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Switch",
      "title": "开关",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Switch",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "name",
          "propType": "string",
          "description": "name"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内敛样式"
        },
        {
          "name": "checked",
          "propType": "bool",
          "description": "当前状态"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["medium", "small"]
          },
          "description": "尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "checkedChildren",
          "propType": "string",
          "description": "打开时的内容"
        },
        {
          "name": "unCheckedChildren",
          "propType": "string",
          "description": "关闭时的内容"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "开关状态改变是触发此事件\n@param {Boolean} checked 是否为打开状态\n@param {Event} e DOM事件对象"
        },
        {
          "name": "onClick",
          "propType": "func",
          "description": "鼠标点击事件\n@param {Event} e DOM事件对象"
        },
        {
          "name": "onKeyDown",
          "propType": "func",
          "description": "键盘按键事件\n@param {Event} e DOM事件对象"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "checked",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "当前状态",
                "en-US": "Checked"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: checked | 说明: 当前状态",
                "en-US": "prop: checked | description: current status"
              }
            },
            "setter": "BoolSetter"
          },
          {
            "name": "disabled",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "是否禁用",
                "en-US": "Disabled"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: disabled | 说明: 是否被禁用",
                "en-US": "prop: disabled | description: disabled"
              }
            },
            "setter": "BoolSetter",
            "description": "是否禁用",
            "defaultValue": false
          },
          {
            "name": "size",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "尺寸",
                "en-US": "Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 尺寸",
                "en-US": "prop: size | description: size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["medium", "small"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "checkedChildren",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "开启内容",
                "en-US": "Checked Content"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: checkedChildren | 说明: 打开时的内容",
                "en-US": "prop: checkedChildren | description: checked content"
              }
            },
            "setter": "StringSetter",
            "description": "打开时的内容"
          },
          {
            "name": "unCheckedChildren",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "关闭内容",
                "en-US": "UnChecked Content"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: unCheckedChildren | 说明: 关闭时的内容",
                "en-US": "prop: unCheckedChildren | description: unchecked content"
              }
            },
            "setter": "StringSetter"
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "supports": {
          "style": true,
          "events": ["onChange", "onClick", "onKeyDown"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Tab.Item",
      "title": "选项卡Item",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tab",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "isAutoContainer",
          "initialValue": true,
          "defaultValue": true,
          "setter": "BoolSetter",
          "condition": {
            "type": "JSFunction",
            "value": "() => false"
          }
        },
        {
          "name": "title",
          "propType": "string",
          "description": "选项卡标题"
        },
        {
          "name": "closeable",
          "propType": "bool",
          "description": "单个选项卡是否可关闭",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "选项卡是否被禁用"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "parentWhitelist": ["Tab"]
          }
        }
      },
      "icon": "",
      "category": "null"
    },
    {
      "componentName": "Tab.TabPane",
      "title": "Tab.TabPane",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tab",
        "main": "",
        "destructuring": true,
        "subName": "TabPane"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "title",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "选项卡标题"
        },
        {
          "name": "closeable",
          "propType": "bool",
          "description": "单个选项卡是否可关闭",
          "defaultValue": false
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "选项卡是否被禁用"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Tab",
      "title": "选项卡",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tab",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "device",
          "propType": {
            "type": "oneOf",
            "value": ["tablet", "desktop", "phone"]
          }
        },
        {
          "name": "shape",
          "propType": {
            "type": "oneOf",
            "value": ["pure", "wrapped", "text", "capsule"]
          },
          "description": "外观形态",
          "defaultValue": "pure"
        },
        {
          "name": "animation",
          "propType": "bool",
          "description": "是否开启动效",
          "defaultValue": true
        },
        {
          "name": "excessMode",
          "propType": {
            "type": "oneOf",
            "value": ["slide", "dropdown"]
          },
          "description": "选项卡过多时的滑动模式",
          "defaultValue": "slide"
        },
        {
          "name": "tabPosition",
          "propType": {
            "type": "oneOf",
            "value": ["top", "bottom", "left", "right"]
          },
          "description": "导航选项卡的位置，只适用于包裹型（wrapped）选项卡",
          "defaultValue": "top"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium"]
          },
          "description": "尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "triggerType",
          "propType": {
            "type": "oneOf",
            "value": ["hover", "click"]
          },
          "description": "激活选项卡的触发方式",
          "defaultValue": "click"
        },
        {
          "name": "lazyLoad",
          "propType": "bool",
          "description": "是否延迟加载 TabPane 的内容, 默认开启, 即不提前渲染",
          "defaultValue": true
        },
        {
          "name": "unmountInactiveTabs",
          "propType": "bool",
          "description": "是否自动卸载未处于激活状态的选项卡",
          "defaultValue": false
        },
        {
          "name": "navClassName",
          "propType": "string",
          "description": "导航条的自定义样式类"
        },
        {
          "name": "contentClassName",
          "propType": "string",
          "description": "内容区容器的自定义样式类"
        },
        {
          "name": "extra",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "导航栏附加内容"
        },
        {
          "name": "onClick",
          "propType": "func",
          "description": "点击单个选项卡时触发的回调"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选项卡发生切换时的事件回调\n@param {String|Number} key 改变后的 key"
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "选项卡被关闭时的事件回调\n@param {String|Number} key   关闭的选项卡的 key"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": [
          {
            "name": "items",
            "title": "标签项",
            "setter": {
              "componentName": "ArraySetter",
              "props": {
                "itemSetter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "title",
                          "title": "名称",
                          "initialValue": "标签项",
                          "setter": "StringSetter"
                        },
                        {
                          "name": "primaryKey",
                          "title": "项目编号",
                          "condition": {
                            "type": "JSFunction",
                            "value": "() => false"
                          },
                          "initialValue": {
                            "type": "JSFunction",
                            "value": "val => {\n                        if (val) return val;\n                        return String(Math.floor(Math.random() * 10000));\n                      }"
                          },
                          "setter": "StringSetter"
                        },
                        {
                          "name": "closeable",
                          "title": "可关闭",
                          "initialValue": false,
                          "setter": "BoolSetter"
                        },
                        {
                          "name": "disabled",
                          "title": "是否禁用",
                          "initialValue": false,
                          "setter": "BoolSetter"
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "type": "JSFunction",
                    "value": "() => {\n                return {\n                  primaryKey: String(Math.floor(Math.random() * 10000)),\n                  title: \"标签项\",\n                  closeable: false,\n                  disabled: false\n                };\n              }"
                  }
                }
              }
            },
            "extraProps": {
              "getValue": {
                "type": "JSFunction",
                "value": "getValue(target, fieldValue) {\n            \n            \n            const map = target.getNode().children.map(child => {\n              const primaryKey = child.getPropValue(\"primaryKey\")\n                ? String(child.getPropValue(\"primaryKey\"))\n                : child.id;\n              return {\n                primaryKey: primaryKey,\n                title: child.getPropValue(\"title\"),\n                closeable: child.getPropValue(\"closeable\"),\n                disabled: child.getPropValue(\"disabled\")\n              };\n            });\n            return map;\n          }"
              },
              "setValue": {
                "type": "JSFunction",
                "value": "setValue(target, value) {\n            const node = target.getNode();\n            const map = {};\n            if (!Array.isArray(value)) {\n              value = [];\n            }\n            value.forEach(item => {\n              const tabitem = Object.assign({}, item);\n              map[item.primaryKey] = tabitem;\n            });\n\n            node.children.mergeChildren(\n              child => {\n                const primaryKey = String(child.getPropValue(\"primaryKey\"));\n                if (Object.hasOwnProperty.call(map, primaryKey)) {\n                  child.setPropValue(\"title\", map[primaryKey].title);\n                  child.setPropValue(\"closeable\", map[primaryKey].closeable);\n                  child.setPropValue(\"disabled\", map[primaryKey].disabled);\n                  delete map[primaryKey];\n                  return false;\n                }\n                return true;\n              },\n              () => {\n                const items = [];\n                for (const primaryKey in map) {\n                  if (Object.hasOwnProperty.call(map, primaryKey)) {\n                    items.push({\n                      componentName: \"Tab.Item\",\n                      props: map[primaryKey]\n                    });\n                  }\n                }\n                return items;\n              },\n              (child1, child2) => {\n                const a = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child1.getPropValue(\"primaryKey\"))\n                );\n                const b = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child2.getPropValue(\"primaryKey\"))\n                );\n                return a - b;\n              }\n            );\n          }"
              }
            }
          },
          {
            "name": "shape",
            "title": "形态",
            "defaultValue": "pure",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "普通型",
                    "value": "pure"
                  },
                  {
                    "title": "包裹型",
                    "value": "wrapped"
                  },
                  {
                    "title": "文本型",
                    "value": "text"
                  },
                  {
                    "title": "胶囊型",
                    "value": "capsule"
                  }
                ]
              }
            }
          },
          {
            "name": "size",
            "title": "尺寸",
            "defaultValue": "medium",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "小",
                    "value": "small"
                  },
                  {
                    "title": "中",
                    "value": "medium"
                  }
                ]
              }
            }
          },
          {
            "name": "excessMode",
            "title": "选项卡过多时的滑动模式",
            "defaultValue": "slide",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "小",
                    "value": "slide"
                  },
                  {
                    "title": "中",
                    "value": "dropdown"
                  }
                ]
              }
            }
          },
          {
            name:'activeKey',
            setter:"StringSetter"
          },
          {
            "name": "advance",
            "title": "高级",
            "type": "group",
            "extraProps": {
              "display": "accordion"
            },
            "items": [
              {
                "name": "unmountInactiveTabs",
                "title": "切换销毁",
                "defaultValue": false,
                "setter": {
                  "componentName": "BoolSetter"
                }
              },
              {
                "name": "needBadge",
                "title": "开启徽标",
                "defaultValue": false,
                "setter": {
                  "componentName": "BoolSetter"
                }
              },
              {
                "name": "renderBadge",
                "title": "徽标渲染",
                "display": "block",
                "setter": {
                  "componentName": "FunctionSetter"
                },
                "condition": {
                  "type": "JSFunction",
                  "value": "condition(target) {\n              return target.getProps().getPropValue(\"needBadge\") || false;\n            }"
                }
              },
              {
                "name": "tabRender",
                "title": "自定义渲染选项卡",
                "display": "block",
                "setter": {
                  "componentName": "FunctionSetter"
                }
              },
              {
                "name": "extraRender",
                "title": "渲染导航栏附加内容",
                "display": "block",
                "setter": {
                  "componentName": "FunctionSetter"
                }
              }
            ]
          },
          {
            "name": "style",
            "setter": {
              "componentName": "StyleSetter"
            }
          }
        ],
        "supports": {
          "events": ["onClick", "onChange", "onClose"]
        },
        "advanced": {
          "initialChildren": [
            {
              "componentName": "Tab.Item",
              "props": {
                "primaryKey": "item1"
              }
            },
            {
              "componentName": "Tab.Item",
              "props": {
                "primaryKey": "item2"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Table.Column",
      "title": "Table.Column",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Table",
        "main": "",
        "destructuring": true,
        "subName": "Column"
      },
      "props": [
        {
          "name": "title",
          "propType": "string"
        },
        {
          "name": "dataIndex",
          "propType": "string"
        },
        {
          "name": "cell",
          "propType": "func"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "cell",
              "setter": {
                "componentName": "SlotSetter",
                "props": {
                  "supportParams": true
                }
              },
              "extraProps": {
                "display": "block"
              }
            }
          ]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Table",
      "title": "Table",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Table",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string"
        },
        {
          "name": "children",
          "propType": "string"
        },
        {
          "name": "pure",
          "propType": "bool"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "tableLayout",
          "propType": {
            "type": "oneOf",
            "value": ["fixed", "auto"]
          }
        },
        {
          "name": "tableWidth",
          "propType": "number"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium"]
          }
        },
        {
          "name": "dataSource",
          "propType": {
            "type": "arrayOf",
            "value": "object"
          }
        },
        {
          "name": "entireDataSource",
          "propType": "array"
        },
        {
          "name": "onRowClick",
          "propType": "func"
        },
        {
          "name": "onRowMouseEnter",
          "propType": "func"
        },
        {
          "name": "rowProps",
          "propType": "func"
        },
        {
          "name": "cellProps",
          "propType": "func"
        },
        {
          "name": "hasBorder",
          "propType": "bool"
        },
        {
          "name": "hasHeader",
          "propType": "bool"
        },
        {
          "name": "isZebra",
          "propType": "bool"
        },
        {
          "name": "loading",
          "propType": "bool"
        },
        {
          "name": "filterParams",
          "propType": "object"
        },
        {
          "name": "sort",
          "propType": "object"
        },
        {
          "name": "sortIcons",
          "propType": "object"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "components",
          "propType": "object"
        },
        {
          "name": "columns",
          "propType": {
            "type": "arrayOf",
            "value": {
              "type": "shape",
              "value": [
                {
                  "name": "title",
                  "description": "列标题",
                  "propType": "string"
                },
                {
                  "name": "dataIndex",
                  "description": "列名称",
                  "propType": "string"
                }
              ]
            }
          }
        },
        {
          "name": "emptyContent",
          "propType": "node"
        },
        {
          "name": "primaryKey",
          "propType": "string"
        },
        {
          "name": "lockType",
          "propType": {
            "type": "oneOf",
            "value": ["left", "right"]
          }
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "wrapperContent",
          "propType": "any"
        },
        {
          "name": "refs",
          "propType": "object"
        },
        {
          "name": "expandedRowRender",
          "propType": "func"
        },
        {
          "name": "expandedRowIndent",
          "propType": "array"
        },
        {
          "name": "hasExpandedRowCtrl",
          "propType": "bool"
        },
        {
          "name": "getExpandedColProps",
          "propType": "func"
        },
        {
          "name": "openRowKeys",
          "propType": "array"
        },
        {
          "name": "onRowOpen",
          "propType": "func"
        },
        {
          "name": "onExpandedRowClick",
          "propType": "func"
        },
        {
          "name": "fixedHeader",
          "propType": "bool"
        },
        {
          "name": "rowSelection",
          "propType": "object"
        },
        {
          "name": "stickyHeader",
          "propType": "bool"
        },
        {
          "name": "offsetTop",
          "propType": "number"
        },
        {
          "name": "affixProps",
          "propType": "object"
        },
        {
          "name": "indent",
          "propType": "number"
        },
        {
          "name": "isTree",
          "propType": "bool"
        },
        {
          "name": "useVirtual",
          "propType": "bool"
        },
        {
          "name": "onBodyScroll",
          "propType": "func"
        },
        {
          "name": "expandedIndexSimulate",
          "propType": "bool"
        },
        {
          "name": "crossline",
          "propType": "bool"
        },
        {
          "name": "lengths",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "dataSource",
              "setter": "JsonSetter"
            },
            {
              "name": "children",
              "setter": {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "name": "componentName",
                            "title": "子组件",
                            "defaultValue": "Table.Column",
                            "setter": {
                              "componentName": "StringSetter"
                            }
                          },
                          {
                            "name": "props",
                            "title": "props",
                            "setter": {
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "items": [
                                    {
                                      "name": "title",
                                      "setter": {
                                        "componentName": "StringSetter"
                                      }
                                    },
                                    {
                                      "name": "dataIndex",
                                      "setter": {
                                        "componentName": "StringSetter"
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "extraProps": {
                "defaultValue": "",
                "onChange": {
                  "type": "JSFunction",
                  "value": "(val, field, editor) => {\n debugger;\n console.log('val', val);//field.nodes[0].children.import(val && {\"componentName\": \"Table.Column\", \"props\": {\"type\": val, \"style\": {\"marginRight\": 5}}}, true); //field.top.setPropValue('children', [{\"componentName\": \"Icon\", \"props\": {\"type\": val}}, (field.top.getPropValue('children') || []).slice(-1)]);\n}"
                }
              }
            }
          ]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Tag.Closeable",
      "title": "可关闭标签",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tag",
        "main": "",
        "destructuring": true,
        "subName": "Closeable"
      },
      "props": [
        {
          "name": "closeArea",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "关闭区域",
              "en-US": "Close Area"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: closeArea | 说明: closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮",
              "en-US": "prop: closeArea | description: close area"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["tag", "tail"]
          },
          "description": "closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮"
        },
        {
          "name": "size",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标签尺寸",
              "en-US": "Tag Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: size | 说明: 标签的尺寸（large 尺寸为兼容表单场景 large = medium）",
              "en-US": "prop: size | description: tag size"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "标签的尺寸（large 尺寸为兼容表单场景 large = medium）"
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "点击关闭按钮时的回调，返回值 true 则关闭, false 阻止关闭"
        },
        {
          "name": "onClick",
          "propType": "func",
          "description": "点击回调"
        },
        {
          "name": "afterClose",
          "propType": "func",
          "description": "标签关闭后执行的回调"
        },
        {
          "name": "children",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标签文本",
              "en-US": "Content"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: children | 说明: 标签文本内容",
              "en-US": "prop: children | description: tag content"
            }
          },
          "propType": "string",
          "description": "内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {},
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Tag.Selectable",
      "title": "可选中标签",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tag",
        "main": "",
        "destructuring": true,
        "subName": "Selectable"
      },
      "props": [
        {
          "name": "checked",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "是否选中",
              "en-US": "Checked"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: checked | 说明: 标签是否被选中，受控用法",
              "en-US": "prop: checked | description: tag checked"
            }
          },
          "propType": "bool",
          "description": "标签是否被选中，受控用法"
        },
        {
          "name": "defaultChecked",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "默认选中",
              "en-US": "Default Checked"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: defaultChecked | 说明: 标签是否默认被选中，非受控用法",
              "en-US": "prop: defaultChecked | description: tag default checked"
            }
          },
          "propType": "bool",
          "description": "标签是否默认被选中，非受控用法"
        },
        {
          "name": "disabled",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "是否禁用",
              "en-US": "Disabled"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: disabled | 说明: 标签是否被禁用",
              "en-US": "prop: disabled | description: tag disabled"
            }
          },
          "propType": "bool",
          "description": "标签是否被禁用"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中状态变化时触发的事件 Function(checked: Boolean, e: Event) => void"
        },
        {
          "name": "children",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标签文本",
              "en-US": "Content"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: children | 说明: 标签文本内容",
              "en-US": "prop: children | description: tag content"
            }
          },
          "propType": "string",
          "description": "内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {},
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Tag",
      "title": "标签",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tag",
        "main": "",
        "destructuring": true
      },
      "props": [
        {
          "name": "type",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标签类型",
              "en-US": "Tag Type"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: type | 说明: 标签的类型",
              "en-US": "prop: type | description: tag type"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["normal", "primary"]
          },
          "description": "标签的类型"
        },
        {
          "name": "size",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标签尺寸",
              "en-US": "Tag Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: size | 说明: 标签的尺寸（large 尺寸为兼容表单场景 large = medium）",
              "en-US": "prop: size | description: tag size"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "标签的尺寸（large 尺寸为兼容表单场景 large = medium）"
        },
        {
          "name": "color",
          "propType": "string",
          "description": "标签颜色, 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效"
        },
        {
          "name": "animation",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "开启动效",
              "en-US": "Animation"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: animation | 说明: 是否开启动效",
              "en-US": "prop: animation | description: enable animation"
            }
          },
          "propType": "bool",
          "description": "是否开启动效"
        },
        {
          "name": "afterAppear",
          "propType": "func",
          "description": "标签出现动画结束后执行的回调"
        },
        {
          "name": "onClick",
          "propType": "func",
          "description": "点击回调"
        },
        {
          "name": "children",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标签文本",
              "en-US": "Content"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: children | 说明: 标签文本内容",
              "en-US": "prop: children | description: tag content"
            }
          },
          "propType": "string",
          "description": "内容"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "color",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "标签颜色",
                  "en-US": "Tag Color"
                },
                "tip": {
                  "type": "i18n",
                  "zh-CN": "属性: color | 说明: 是否开启动效",
                  "en-US": "prop: color | description: 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效"
                }
              },
              "setter": {
                "componentName": "ColorSetter"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "TimePicker",
      "title": "时间选择框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "TimePicker",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "name",
          "title": {
            "label": "名称",
            "tip": "name|表单相关"
          },
          "propType": "string",
          "description": "name|表单相关"
        },
        {
          "name": "label",
          "propType": "string",
          "description": "按钮的文案"
        },
        {
          "name": "state",
          "propType": {
            "type": "oneOf",
            "value": ["error", "success"]
          },
          "description": "输入框状态"
        },
        {
          "name": "placeholder",
          "propType": "string",
          "description": "输入框提示"
        },
        {
          "name": "value",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "时间值（moment 对象或时间字符串，受控状态使用）"
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "时间初值（moment 对象或时间字符串，非受控状态使用）"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "时间选择框的尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "是否允许清空时间",
          "defaultValue": true
        },
        {
          "name": "format",
          "propType": "string",
          "description": "时间的格式\nhttps://momentjs.com/docs/#/parsing/string-format/",
          "defaultValue": "HH:mm:ss"
        },
        {
          "name": "hourStep",
          "propType": "number",
          "description": "小时选项步长"
        },
        {
          "name": "minuteStep",
          "propType": "number",
          "description": "分钟选项步长"
        },
        {
          "name": "secondStep",
          "propType": "number",
          "description": "秒钟选项步长"
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层是否显示（受控）"
        },
        {
          "name": "defaultVisible",
          "propType": "bool",
          "description": "弹层默认是否显示（非受控）"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "时间值改变时的回调\n@param {Object|String} value 时间对象或时间字符串"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "defaultValue",
            "title": "默认值",
            "setter": ["TimePicker", "ExpressionSetter"]
          },
          {
            "name": "size",
            "title": {
              "label": {
                "type": "i18n",
                "zh-CN": "尺寸",
                "en-US": "Size"
              },
              "tip": {
                "type": "i18n",
                "zh-CN": "属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大",
                "en-US": "prop: size | description: size"
              }
            },
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["small", "medium", "large"]
              }
            },
            "defaultValue": "medium"
          },
          {
            "name": "format",
            "title": "时间格式",
            "defaultValue": "HH:mm:ss",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "options": [
                        {
                          "title": "HH:mm:ss",
                          "value": "HH:mm:ss"
                        },
                        {
                          "title": "HH:mm",
                          "value": "HH:mm"
                        },
                        {
                          "title": "mm:ss",
                          "value": "mm:ss"
                        }
                      ]
                    }
                  },
                  "ExpressionSetter"
                ]
              }
            }
          },
          {
            "name": "hourStep",
            "title": "小时步长",
            "defaultValue": 1,
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "minuteStep",
            "title": "分钟步长",
            "defaultValue": 1,
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "secondStep",
            "title": "秒钟步长",
            "defaultValue": 1,
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "hasClear",
            "title": "清除按钮",
            "defaultValue": true,
            "setter": ["BoolSetter", "ExpressionSetter"]
          },
          {
            "name": "disabledHours",
            "title": "禁用小时函数",
            "display": "block",
            "setter": {
              "componentName": "FunctionSetter"
            }
          },
          {
            "name": "disabledMinutes",
            "title": "禁用分钟函数",
            "display": "block",
            "setter": {
              "componentName": "FunctionSetter"
            }
          },
          {
            "name": "disabledSeconds",
            "title": "禁用秒钟函数",
            "display": "block",
            "setter": {
              "componentName": "FunctionSetter"
            }
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          },
          {
            "name": "style",
            "setter": {
              "componentName": "StyleSetter"
            }
          }
        ],
        "supports": {
          "events": ["onChange", "onVisibleChange"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Timeline.Item",
      "title": "时间轴项",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Timeline",
        "main": "",
        "destructuring": true,
        "subName": "Item"
      },
      "props": [
        {
          "name": "state",
          "propType": {
            "type": "oneOf",
            "value": ["done", "process", "error", "success"]
          },
          "description": "节点状态",
          "defaultValue": "done"
        },
        {
          "name": "icon",
          "propType": "string",
          "description": "图标"
        },
        {
          "name": "dot",
          "propType": "node",
          "description": "自定义时间轴节点"
        },
        {
          "name": "time",
          "propType": "string",
          "description": "格式化后的时间"
        },
        {
          "name": "title",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "标题"
        },
        {
          "name": "timeLeft",
          "propType": "string",
          "description": "左侧时间"
        },
        {
          "name": "content",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "右侧内容"
        },
        {
          "name": "animation",
          "propType": "bool",
          "description": "动画",
          "defaultValue": true
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": false,
          "nestingRule": {
            "parentWhitelist": ["Timeline"]
          }
        },
        "props": [
          {
            "name": "title",
            "setter": "StringSetter",
            "title": "标题"
          },
          {
            "name": "icon",
            "title": "图标",
            "setter": "IconSetter",
            "description": "图标"
          },
          {
            "name": "state",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["done", "process", "error", "success"]
              }
            },
            "title": "节点状态",
            "defaultValue": "done"
          },
          {
            "name": "time",
            "setter": "DateSetter",
            "title": "右侧时间"
          },
          {
            "name": "timeLeft",
            "setter": "DateSetter",
            "title": "左侧时间"
          },
          {
            "name": "content",
            "setter": "TextAreaSetter",
            "title": "右侧内容"
          },
          {
            "name": "animation",
            "setter": "BoolSetter",
            "title": "启用动画",
            "defaultValue": true
          }
        ]
      },
      "icon": "",
      "category": "null"
    },
    {
      "componentName": "Timeline",
      "title": "时间轴",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Timeline",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "fold",
          "propType": {
            "type": "arrayOf",
            "value": {
              "type": "exact",
              "value": [
                {
                  "name": "foldArea",
                  "propType": {
                    "type": "arrayOf",
                    "value": "number"
                  }
                },
                {
                  "name": "foldShow",
                  "propType": "bool"
                }
              ]
            }
          },
          "description": "自定义折叠选项 示例`[{foldArea: [startIndex, endIndex], foldShow: boolean}]`",
          "defaultValue": []
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true,
          "nestingRule": {
            "childWhitelist": ["Timeline.Item"]
          }
        },
        "props": [
          {
            "name": "items",
            "title": "时间轴数据",
            "setter": {
              "componentName": "ArraySetter",
              "props": {
                "itemSetter": {
                  "componentName": "ObjectSetter",
                  "props": {
                    "config": {
                      "items": [
                        {
                          "name": "title",
                          "setter": "StringSetter",
                          "title": "标题"
                        },
                        {
                          "name": "icon",
                          "title": "图标",
                          "setter": "IconSetter",
                          "description": "图标"
                        },
                        {
                          "name": "state",
                          "setter": {
                            "componentName": "RadioGroupSetter",
                            "props": {
                              "options": ["done", "process", "error", "success"]
                            }
                          },
                          "title": "节点状态",
                          "defaultValue": "done"
                        },
                        {
                          "name": "time",
                          "setter": "DateSetter",
                          "title": "右侧时间"
                        },
                        {
                          "name": "timeLeft",
                          "setter": "DateSetter",
                          "title": "左侧时间"
                        },
                        {
                          "name": "content",
                          "setter": "TextAreaSetter",
                          "title": "右侧内容"
                        },
                        {
                          "name": "animation",
                          "setter": "BoolSetter",
                          "title": "启用动画",
                          "defaultValue": true
                        }
                      ]
                    }
                  },
                  "initialValue": {
                    "type": "JSFunction",
                    "value": "() => {\n                return {\n                  primaryKey: String(Math.floor(Math.random() * 10000)),\n                  title: \"TimelineItem\"\n                };\n              }"
                  }
                }
              }
            },
            "extraProps": {
              "getValue": {
                "type": "JSFunction",
                "value": "getValue(target, fieldValue) {\n            \n            \n            const map = target.getNode().children.map(child => {\n              const primaryKey = child.getPropValue(\"primaryKey\")\n                ? String(child.getPropValue(\"primaryKey\"))\n                : child.id;\n              return {\n                primaryKey: primaryKey,\n                icon: child.getPropValue(\"icon\"),\n                title: child.getPropValue(\"title\"),\n                state: child.getPropValue(\"state\"),\n                time: child.getPropValue(\"time\"),\n                timeLeft: child.getPropValue(\"timeLeft\"),\n                content: child.getPropValue(\"content\"),\n                animation: child.getPropValue(\"animation\"),\n              };\n            });\n            return map;\n          }"
              },
              "setValue": {
                "type": "JSFunction",
                "value": "setValue(target, value) {\n            const node = target.getNode();\n            const map = {};\n            if (!Array.isArray(value)) {\n              value = [];\n            }\n            value.forEach(item => {\n              const tabitem = Object.assign({}, item);\n              map[item.primaryKey] = tabitem;\n            });\n\n            node.children.mergeChildren(\n              child => {\n                const primaryKey = String(child.getPropValue(\"primaryKey\"));\n                if (Object.hasOwnProperty.call(map, primaryKey)) {\n                  child.setPropValue(\"icon\", map[primaryKey].icon);\n                  child.setPropValue(\"title\", map[primaryKey].title);\n                  child.setPropValue(\"content\", map[primaryKey].content);\n                  child.setPropValue(\"state\", map[primaryKey].state);\n                  child.setPropValue(\"time\", map[primaryKey].time);\n                  child.setPropValue(\"timeLeft\", map[primaryKey].timeLeft);\n                  child.setPropValue(\"animation\", map[primaryKey].animation);\n                  delete map[primaryKey];\n                  return false;\n                }\n                return true;\n              },\n              () => {\n                const items = [];\n                for (const primaryKey in map) {\n                  if (Object.hasOwnProperty.call(map, primaryKey)) {\n                    items.push({\n                      componentName: \"Timeline.Item\",\n                      props: map[primaryKey]\n                    });\n                  }\n                }\n                return items;\n              },\n              (child1, child2) => {\n                const a = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child1.getPropValue(\"primaryKey\"))\n                );\n                const b = value.findIndex(\n                  item =>\n                    String(item.primaryKey) ===\n                    String(child2.getPropValue(\"primaryKey\"))\n                );\n                return a - b;\n              }\n            );\n          }"
              }
            }
          }
        ]
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Message",
      "title": "面包片",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Message",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "title",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "标题",
              "en-US": "Title"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: title | 说明: 标题",
              "en-US": "prop: title | description: Title"
            }
          },
          "propType": "string",
          "description": "标题",
          "defaultValue": "标题"
        },
        {
          "name": "type",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "类型",
              "en-US": "Type"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: type | 说明: 反馈类型",
              "en-US": "prop: type | description: message type"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["success", "warning", "error", "notice", "help", "loading"]
          },
          "description": "反馈类型",
          "defaultValue": "success"
        },
        {
          "name": "shape",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "形状",
              "en-US": "Shape"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: shape | 说明: 外观",
              "en-US": "prop: shape | description: message shape"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["inline", "addon", "toast"]
          },
          "description": "外观",
          "defaultValue": "inline"
        },
        {
          "name": "size",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "尺寸",
              "en-US": "Size"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: size | 说明: 尺寸",
              "en-US": "prop: size | description: message size"
            }
          },
          "propType": {
            "type": "oneOf",
            "value": ["medium", "large"]
          },
          "description": "尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "children",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "文本",
              "en-US": "Content"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: children | 说明: 文本内容",
              "en-US": "prop: children | description: message content"
            }
          },
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "内容"
        },
        {
          "name": "visible",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "是否显示",
              "en-US": "Visible"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: visible | 说明: 当前是否显示",
              "en-US": "prop: visible | description: visible"
            }
          },
          "propType": "bool",
          "description": "当前是否显示"
        },
        {
          "name": "iconType",
          "propType": "string",
          "description": "显示的图标类型，会覆盖内部设置的IconType"
        },
        {
          "name": "closeable",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "显示 Close",
              "en-US": "Show Close"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: closeable | 说明: 显示关闭按钮",
              "en-US": "prop: closeable | description: show close button"
            }
          },
          "propType": "bool",
          "description": "显示关闭按钮",
          "defaultValue": false
        },
        {
          "name": "onClose",
          "propType": "func",
          "description": "关闭按钮的回调"
        },
        {
          "name": "afterClose",
          "propType": "func",
          "description": "关闭之后调用的函数"
        },
        {
          "name": "animation",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "开启动效",
              "en-US": "Animation"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: animation | 说明: 是否开启动效",
              "en-US": "prop: animation | description: enable animation"
            }
          },
          "propType": "bool",
          "description": "收起动画",
          "defaultValue": true
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "iconType",
              "title": {
                "label": {
                  "type": "i18n",
                  "zh-CN": "图标",
                  "en-US": "Icon"
                },
                "tip": {
                  "type": "i18n",
                  "zh-CN": "属性: iconType | 说明: 显示的图标类型",
                  "en-US": "prop: iconType | description: icon type"
                }
              },
              "setter": {
                "componentName": "IconSetter"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "反馈"
    },
    {
      "componentName": "Tooltip",
      "title": "Tooltip",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Balloon",
        "main": "",
        "destructuring": true,
        "subName": "Tooltip"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "description": "样式类名的品牌前缀",
          "defaultValue": "next-"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义类名"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        },
        {
          "name": "children",
          "propType": "node",
          "description": "tooltip的内容"
        },
        {
          "name": "align",
          "propType": {
            "type": "oneOf",
            "value": ["t", "r", "b", "l", "tl", "tr", "bl", "br", "lt", "lb", "rt", "rb"]
          },
          "description": "弹出层位置\n@enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合",
          "defaultValue": "b"
        },
        {
          "name": "trigger",
          "propType": "node",
          "description": "触发元素"
        },
        {
          "name": "triggerType",
          "propType": {
            "type": "oneOf",
            "value": ["hover", "click"]
          },
          "description": "触发行为\n鼠标悬浮,  鼠标点击('hover', 'click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用triggerType为click的Balloon组件",
          "defaultValue": "hover"
        },
        {
          "name": "popupStyle",
          "propType": "object",
          "description": "弹层组件style，透传给Popup"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹层组件className，透传给Popup"
        },
        {
          "name": "popupProps",
          "propType": "object",
          "description": "弹层组件属性，透传给Popup"
        },
        {
          "name": "pure",
          "propType": "bool",
          "description": "是否pure render"
        },
        {
          "name": "popupContainer",
          "propType": "string",
          "description": "指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "id",
          "propType": "string",
          "description": "弹层id, 传入值才会支持无障碍"
        },
        {
          "name": "delay",
          "propType": "number",
          "description": "如果需要让 Tooltip 内容可被点击，可以设置这个参数，例如 100",
          "defaultValue": 0
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Transfer",
      "title": "穿梭框",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Transfer",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "id",
          "propType": "string",
          "description": "请设置 id 以保证transfer的可访问性"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "mode",
          "propType": {
            "type": "oneOf",
            "value": ["normal", "simple"]
          },
          "description": "移动选项模式",
          "defaultValue": "normal"
        },
        {
          "name": "dataSource",
          "propType": "array",
          "description": "数据源"
        },
        {
          "name": "value",
          "propType": "array",
          "description": "当前值"
        },
        {
          "name": "defaultValue",
          "propType": "array",
          "description": "默认值"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "leftDisabled",
          "propType": "bool",
          "description": "是否禁用左侧面板",
          "defaultValue": false
        },
        {
          "name": "rightDisabled",
          "propType": "bool",
          "description": "是否禁用右侧面板",
          "defaultValue": false
        },
        {
          "name": "itemRender",
          "propType": "func",
          "description": "列表项渲染函数"
        },
        {
          "name": "showSearch",
          "propType": "bool",
          "description": "是否显示搜索框",
          "defaultValue": false
        },
        {
          "name": "filter",
          "propType": "func",
          "description": "自定义搜索函数"
        },
        {
          "name": "searchPlaceholder",
          "propType": "string",
          "description": "搜索框占位符"
        },
        {
          "name": "notFoundContent",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "列表为空显示内容",
          "defaultValue": "Not Found"
        },
        {
          "name": "titles",
          "propType": "array",
          "description": "左右面板标题"
        },
        {
          "name": "operations",
          "propType": "array",
          "description": "向右向左移动按钮显示内容"
        },
        {
          "name": "defaultLeftChecked",
          "propType": "array",
          "description": "左面板默认选中值"
        },
        {
          "name": "defaultRightChecked",
          "propType": "array",
          "description": "右面板默认选中值"
        },
        {
          "name": "listClassName",
          "propType": "string",
          "description": "左右面板列表自定义样式类名"
        },
        {
          "name": "listStyle",
          "propType": "object",
          "description": "左右面板列表自定义样式对象"
        },
        {
          "name": "sortable",
          "propType": "bool",
          "description": "是否允许拖拽排序",
          "defaultValue": false
        },
        {
          "name": "children",
          "propType": "func",
          "description": "接收 children 自定义渲染列表"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "值发生改变的时候触发的回调函数"
        },
        {
          "name": "onSearch",
          "propType": "func",
          "description": "搜索框输入时触发的回调函数"
        },
        {
          "name": "onSort",
          "propType": "func",
          "description": "拖拽排序时触发的回调函数"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "value",
            "title": "当前值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "setter": ["NumberSetter", "ExpressionSetter"]
          },
          {
            "name": "mode",
            "title": "模式",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "options": [
                        {
                          "title": "normal",
                          "value": "normal"
                        },
                        {
                          "title": "simple",
                          "value": "simple"
                        }
                      ]
                    }
                  },
                  "ExpressionSetter"
                ]
              }
            },
            "defaultValue": "simple"
          },
          {
            "name": "showCheckAll",
            "title": "显示全选",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            },
            "defaultValue": true
          },
          {
            "name": "showSearch",
            "title": "搜索框",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            },
            "defaultValue": false
          },
          {
            "name": "searchPlaceholder",
            "title": "搜索框占位符",
            "display": "block",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["StringSetter", "ExpressionSetter"]
              }
            },
            "condition": {
              "type": "JSFunction",
              "value": "condition(target) {\n          return target.getProps().getPropValue(\"showSearch\") || false;\n        }"
            }
          },
          {
            "name": "filter",
            "title": "自定义搜索函数",
            "display": "block",
            "setter": {
              "componentName": "FunctionSetter"
            },
            "condition": {
              "type": "JSFunction",
              "value": "condition(target) {\n          return target.getProps().getPropValue(\"showSearch\") || false;\n        }"
            }
          },
          {
            "name": "sortable",
            "title": "拖拽排序",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": ["BoolSetter", "ExpressionSetter"]
              }
            },
            "defaultValue": false
          },
          {
            "name": "dataSource",
            "title": "数据源",
            "display": "block",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "JsonSetter"
                  },
                  "ExpressionSetter"
                ]
              }
            },
            "defaultValue": [
              {
                "label": "item0",
                "value": "0",
                "disabled": false
              },
              {
                "label": "item1",
                "value": "1",
                "disabled": false
              },
              {
                "label": "item2",
                "value": "2",
                "disabled": true
              }
            ]
          },
          {
            "name": "defaultLeftChecked",
            "title": "左侧面板默认选中值",
            "display": "block",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "JsonSetter"
                  },
                  "ExpressionSetter"
                ]
              }
            },
            "defaultValue": ["1"]
          },
          {
            "name": "defaultRightChecked",
            "title": "右侧面板默认选中值",
            "display": "block",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "JsonSetter"
                  },
                  "ExpressionSetter"
                ]
              }
            },
            "defaultValue": ["1"]
          },
          {
            "name": "titles",
            "title": "面板标题",
            "display": "block",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "JsonSetter"
                  },
                  "ExpressionSetter"
                ]
              }
            },
            "defaultValue": ["TitleLeft", "TitleRight"]
          },
          {
            "name": "notFountContent",
            "title": "无数据时显示内容",
            "display": "block",
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "StringSetter"
                  },
                  "ExpressionSetter"
                ]
              }
            },
            "defaultValue": ["无数据"]
          },
          {
            "name": "itemRender",
            "title": "列表项渲染函数",
            "display": "block",
            "setter": {
              "componentName": "FunctionSetter"
            }
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          },
          {
            "name": "style",
            "setter": {
              "componentName": "StyleSetter"
            }
          }
        ],
        "supports": {
          "events": ["onChange", "onSearch", "onSort"]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "TreeNode",
      "title": "树形控件节点",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tree",
        "main": "",
        "destructuring": true,
        "subName": "Node"
      },
      "props": [
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "树节点"
        },
        {
          "name": "label",
          "propType": {
            "type": "oneOfType",
            "value": ["string", "node"]
          },
          "description": "节点文本内容",
          "defaultValue": "---"
        },
        {
          "name": "selectable",
          "propType": "bool",
          "description": "单独设置是否支持选中，覆盖 Tree 的 selectable"
        },
        {
          "name": "checkable",
          "propType": "bool",
          "description": "单独设置是否出现复选框，覆盖 Tree 的 checkable"
        },
        {
          "name": "editable",
          "propType": "bool",
          "description": "单独设置是否支持编辑，覆盖 Tree 的 editable"
        },
        {
          "name": "draggable",
          "propType": "bool",
          "description": "单独设置是否支持拖拽，覆盖 Tree 的 draggable"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁止节点响应",
          "defaultValue": false
        },
        {
          "name": "checkboxDisabled",
          "propType": "bool",
          "description": "是否禁止勾选节点复选框",
          "defaultValue": false
        },
        {
          "name": "isLeaf",
          "propType": "bool",
          "description": "是否是叶子节点",
          "defaultValue": false
        }
      ],
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "TreeSelect",
      "title": "树型选择控件",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "TreeSelect",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "dataSource",
          "propType": {
            "type": "Json"
          },
          "description": "数据源"
        },
        {
          "name": "size",
          "title": "尺寸",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "选择框大小",
          "defaultValue": "medium"
        },
        {
          "name": "placeholder",
          "title": "占位提示",
          "propType": "string",
          "description": "选择框占位符"
        },
        {
          "name": "label",
          "title": "内联文案",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "自定义内联label"
        },
        {
          "name": "notFoundContent",
          "title": "空提示",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "无数据时显示内容",
          "defaultValue": "Not Found"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用",
          "defaultValue": false
        },
        {
          "name": "hasArrow",
          "title": "下拉箭头",
          "propType": "bool",
          "description": "是否有下拉箭头",
          "defaultValue": true
        },
        {
          "name": "hasBorder",
          "title": "边框",
          "propType": "bool",
          "description": "是否有边框",
          "defaultValue": true
        },
        {
          "name": "hasClear",
          "title": "清空按钮",
          "propType": "bool",
          "description": "是否有清空按钮",
          "defaultValue": false
        },
        {
          "name": "readOnly",
          "propType": "bool",
          "description": "是否只读"
        },
        {
          "name": "autoWidth",
          "propType": "bool",
          "description": "下拉框是否与选择器对齐",
          "defaultValue": true
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "选中值改变时触发的回调函数\n@param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组\n@param {Object|Array} data 选中的数据，包括 value, label, pos, key属性，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点"
        },
        {
          "name": "showSearch",
          "propType": "bool",
          "description": "搜索框",
          "defaultValue": false
        },
        {
          "name": "onSearch",
          "propType": "func",
          "description": "在搜索框中输入时触发的回调函数\n@param {String} keyword 输入的关键字"
        },
        {
          "name": "onSearchClear",
          "propType": "func"
        },
        {
          "name": "multiple",
          "propType": "bool",
          "description": "支持多选",
          "defaultValue": false
        },
        {
          "name": "treeCheckable",
          "propType": "bool",
          "description": "下拉框中的树是否支持勾选节点的复选框",
          "defaultValue": false
        },
        {
          "name": "treeCheckStrictly",
          "propType": "bool",
          "description": "下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）",
          "defaultValue": false
        },
        {
          "name": "treeCheckedStrategy",
          "propType": {
            "type": "oneOf",
            "value": ["all", "parent", "child"]
          },
          "description": "定义选中时回填的方式\n@enumdesc 返回所有选中的节点, 父子节点都选中时只返回父节点, 父子节点都选中时只返回子节点",
          "defaultValue": "parent"
        },
        {
          "name": "treeDefaultExpandAll",
          "propType": "bool",
          "description": "下拉框中的树是否默认展开所有节点",
          "defaultValue": false
        },
        {
          "name": "treeLoadData",
          "propType": "func",
          "description": "下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/component/tree)\n@param {ReactElement} node 被点击展开的节点"
        },
        {
          "name": "treeProps",
          "propType": {
            "type": "Json"
          },
          "description": "透传到 Tree 的属性对象"
        },
        {
          "name": "defaultVisible",
          "title": "初始显示",
          "propType": "bool",
          "description": "初始下拉框是否显示",
          "defaultValue": false
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "当前下拉框是否显示"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "下拉框显示或关闭时触发事件的回调函数\n@param {Boolean} visible 是否显示\n@param {String} type 触发显示关闭的操作类型"
        },
        {
          "name": "popupStyle",
          "propType": {
            "type": "object"
          },
          "description": "下拉框自定义样式对象"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "下拉框样式自定义类名"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "下拉框挂载的容器节点"
        },
        {
          "name": "popupProps",
          "propType": {
            "type": "object"
          },
          "description": "透传到 Popup 的属性对象"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "预览态"
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {Array<data>} value 选择值 { label: , value:}"
        },
        {
          "name": "useVirtual",
          "propType": "bool",
          "description": "是否开启虚拟滚动"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "visible",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "autoWidth",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "useVirtual",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "renderPreview",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "followTrigger",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupStyle",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupClassName",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupContainer",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "popupProps",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "treeCheckable",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "treeCheckStrictly",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "treeCheckedStrategy",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "treeDefaultExpandAll",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "treeLoadData",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "treeProps",
              "condition": {
                "type": "JSFunction",
                "value": "() => false"
              }
            },
            {
              "name": "label",
              "title": "内联文案",
              "setter": {
                "componentName": "StringSetter"
              }
            },
            {
              "name": "dataSource",
              "title": {
                "label": "节点数据",
                "tip": "数据源"
              },
              "setter": "JsonSetter"
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Tree",
      "title": "树形控件",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Tree",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "dataSource",
          "propType": {
            "type": "object"
          },
          "description": "数据源，该属性优先级高于 children"
        },
        {
          "name": "showLine",
          "propType": "bool",
          "description": "是否显示树的线",
          "defaultValue": false
        },
        {
          "name": "selectable",
          "propType": "bool",
          "description": "是否支持选中节点",
          "defaultValue": true
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选中或取消选中节点时触发的回调函数\n@param {Array} selectedKeys 选中节点key的数组\n@param {Object} extra 额外参数\n@param {Array} extra.selectedNodes 选中节点的数组\n@param {Object} extra.node 当前操作的节点\n@param {Boolean} extra.selected 当前操作是否是选中"
        },
        {
          "name": "multiple",
          "propType": "bool",
          "description": "是否支持多选",
          "defaultValue": false
        },
        {
          "name": "checkable",
          "propType": "bool",
          "description": "是否支持勾选节点的复选框",
          "defaultValue": false
        },
        {
          "name": "checkStrictly",
          "propType": "bool",
          "description": "勾选节点复选框是否完全受控（父子节点选中状态不再关联）",
          "defaultValue": false
        },
        {
          "name": "checkedStrategy",
          "propType": {
            "type": "oneOf",
            "value": ["all", "parent", "child"]
          },
          "description": "定义选中时回填的方式\n@enumdesc 返回所有选中的节点, 父子节点都选中时只返回父节点, 父子节点都选中时只返回子节点",
          "defaultValue": "all"
        },
        {
          "name": "onCheck",
          "propType": "func",
          "description": "勾选或取消勾选复选框时触发的回调函数\n@param {Array} checkedKeys 勾选复选框节点key的数组\n@param {Object} extra 额外参数\n@param {Array} extra.checkedNodes 勾选复选框节点的数组\n@param {Array} extra.checkedNodesPositions 包含有勾选复选框节点和其位置的对象的数组\n@param {Array} extra.indeterminateKeys 半选复选框节点 key 的数组\n@param {Object} extra.node 当前操作的节点\n@param {Boolean} extra.checked 当前操作是否是勾选"
        },
        {
          "name": "defaultExpandAll",
          "propType": "bool",
          "description": "是否默认展开所有节点",
          "defaultValue": false
        },
        {
          "name": "autoExpandParent",
          "propType": "bool",
          "description": "是否自动展开父节点，建议受控时设置为false",
          "defaultValue": true
        },
        {
          "name": "onExpand",
          "propType": "func",
          "description": "展开或收起节点时触发的回调函数\n@param {Array} expandedKeys 展开的节点key的数组\n@param {Object} extra 额外参数\n@param {Object} extra.node 当前操作的节点\n@param {Boolean} extra.expanded 当前操作是否是展开"
        },
        {
          "name": "editable",
          "propType": "bool",
          "description": "是否支持编辑节点内容",
          "defaultValue": false
        },
        {
          "name": "onEditFinish",
          "propType": "func",
          "description": "编辑节点内容完成时触发的回调函数\n@param {String} key 编辑节点的 key\n@param {String} label 编辑节点完成时节点的文本\n@param {Object} node 当前编辑的节点"
        },
        {
          "name": "draggable",
          "propType": "bool",
          "description": "是否支持拖拽节点",
          "defaultValue": false
        },
        {
          "name": "onDragStart",
          "propType": "func",
          "description": "开始拖拽节点时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 拖拽的节点"
        },
        {
          "name": "onDragEnter",
          "propType": "func",
          "description": "拖拽节点进入目标节点时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点\n@param {Array} info.expandedKeys 当前展开的节点key的数组"
        },
        {
          "name": "onDragOver",
          "propType": "func",
          "description": "拖拽节点在目标节点上移动的时候触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点"
        },
        {
          "name": "onDragLeave",
          "propType": "func",
          "description": "拖拽节点离开目标节点时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点"
        },
        {
          "name": "onDragEnd",
          "propType": "func",
          "description": "拖拽节点拖拽结束时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点"
        },
        {
          "name": "onDrop",
          "propType": "func",
          "description": "拖拽节点放入目标节点内或前后触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点\n@param {Object} info.dragNode 拖拽的节点\n@param {Array} info.dragNodesKeys 拖拽的节点和其子节点 key 的数组\n@param {Number} info.dropPosition 放置位置，-1代表当前节点前，0代表当前节点里，1代表当前节点后"
        },
        {
          "name": "canDrop",
          "propType": "func",
          "description": "节点是否可被作为拖拽的目标节点"
        },
        {
          "name": "loadData",
          "propType": "func",
          "description": "异步加载数据的函数"
        },
        {
          "name": "filterTreeNode",
          "propType": "func",
          "description": "按需筛选高亮节点"
        },
        {
          "name": "onRightClick",
          "propType": "func",
          "description": "右键点击节点时触发的回调函数"
        },
        {
          "name": "isLabelBlock",
          "propType": "bool",
          "description": "设置节点是否占满剩余空间，一般用于统一在各节点右侧添加元素(借助 flex 实现，暂时只支持 ie10+)",
          "defaultValue": false
        },
        {
          "name": "isNodeBlock",
          "propType": "bool",
          "description": "设置节点是否占满一行",
          "defaultValue": false
        },
        {
          "name": "animation",
          "propType": "bool",
          "description": "是否开启展开收起动画",
          "defaultValue": true
        },
        {
          "name": "focusedKey",
          "propType": "string",
          "description": "当前获得焦点的子菜单或菜单项 key 值"
        },
        {
          "name": "renderChildNodes",
          "propType": "func",
          "description": "渲染子节点"
        },
        {
          "name": "useVirtual",
          "propType": "bool",
          "description": "是否开启虚拟滚动"
        },
        {
          "name": "onItemFocus",
          "propType": "func"
        },
        {
          "name": "onBlur",
          "propType": "func"
        },
        {
          "name": "onItemKeyDown",
          "propType": "func"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        },
        "props": [
          {
            "name": "dataSource",
            "title": "节点数据",
            "setter": "JsonSetter"
          },
          {
            "name": "showLine",
            "title": "显示线",
            "setter": {
              "componentName": "BoolSetter"
            }
          },
          {
            "name": "multiple",
            "title": "支持多选",
            "setter": {
              "componentName": "BoolSetter"
            },
            "description": "是否支持多选",
            "defaultValue": false
          },
          {
            "name": "checkable",
            "title": "复选框",
            "setter": {
              "componentName": "BoolSetter"
            },
            "description": "是否支持勾选节点的复选框",
            "defaultValue": false
          },
          {
            "name": "editable",
            "title": "支持编辑",
            "setter": {
              "componentName": "BoolSetter"
            },
            "defaultValue": false
          },
          {
            "name": "draggable",
            "title": "支持拖拽",
            "setter": {
              "componentName": "BoolSetter"
            },
            "defaultValue": false
          },
          {
            "name": "selectable",
            "title": "支持选中",
            "setter": {
              "componentName": "BoolSetter"
            },
            "defaultValue": false
          },
          {
            "name": "defaultExpandedKeys",
            "display": "block",
            "title": "默认展开的节点",
            "setter": "JsonSetter"
          },
          {
            "name": "defaultSelectedKeys",
            "display": "block",
            "title": "默认选中的节点",
            "setter": "JsonSetter"
          }
        ],
        "supports": {
          "style": true,
          "events": ["onSelect", "onCheck", "onExpand"]
        },
        "advanced": {
          "initials": [
            {
              "name": "showLine",
              "initial": {
                "type": "JSFunction",
                "value": "()=> true"
              }
            },
            {
              "name": "defaultExpandAll",
              "initial": {
                "type": "JSFunction",
                "value": "()=> true"
              }
            },
            {
              "name": "defaultExpandedKeys",
              "initial": {
                "type": "JSFunction",
                "value": "()=> [\"1\"]"
              }
            },
            {
              "name": "defaultSelectedKeys",
              "initial": {
                "type": "JSFunction",
                "value": "()=> [\"2\"]"
              }
            },
            {
              "name": "dataSource",
              "initial": {
                "type": "JSFunction",
                "value": "() => [\n          {\n            label: \"Component\",\n            key: \"1\",\n            children: [\n              {\n                label: \"Form\",\n                key: \"2\",\n                selectable: false,\n                children: [\n                  {\n                    label: \"Input\",\n                    key: \"4\"\n                  },\n                  {\n                    label: \"Select\",\n                    key: \"5\"\n                  }\n                ]\n              },\n              {\n                label: \"Display\",\n                key: \"3\",\n                children: [\n                  {\n                    label: \"Table\",\n                    key: \"6\"\n                  }\n                ]\n              }\n            ]\n          }\n        ]"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Typography.Text",
      "title": "Text",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Typography",
        "main": "",
        "destructuring": true,
        "subName": "Text"
      },
      "props": [
        {
          "name": "children",
          "propType": "string"
        },
        {
          "name": "delete",
          "propType": "bool",
          "description": "添加删除线样式",
          "defaultValue": false
        },
        {
          "name": "mark",
          "propType": "bool",
          "description": "添加标记样式",
          "defaultValue": false
        },
        {
          "name": "underline",
          "propType": "bool",
          "description": "添加下划线样式",
          "defaultValue": false
        },
        {
          "name": "strong",
          "propType": "bool",
          "description": "是否加粗",
          "defaultValue": false
        },
        {
          "name": "code",
          "propType": "bool",
          "description": "添加代码样式",
          "defaultValue": false
        },
        {
          "name": "component",
          "propType": {
            "type": "oneOf",
            "value": ["span", "h1", "h2", "h3", "h4"]
          },
          "description": "设置标签类型",
          "defaultValue": "span"
        },
        {
          "name": "onClick",
          "propType": "func",
          "description": "鼠标点击"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "children",
              "setter": "TextAreaSetter"
            }
          ]
        }
      },
      "category": "基础"
    },
    {
      "componentName": "Typography",
      "title": "Text",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Typography",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "component",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          },
          "description": "设置标签类型",
          "defaultValue": "article"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "children",
          "title": "内容",
          "propType": "string"
        }
      ],
      "configure": {
        "component": {
          "isContainer": true
        }
      },
      "icon": "",
      "category": "常用"
    },
    {
      "componentName": "Upload.Dragger",
      "title": "Upload.Dragger",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Upload",
        "main": "",
        "destructuring": true,
        "subName": "DragUpload"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "description": "样式前缀",
          "defaultValue": "next-"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "shape",
          "propType": "string"
        },
        {
          "name": "onDragOver",
          "propType": "func"
        },
        {
          "name": "onDragLeave",
          "propType": "func"
        },
        {
          "name": "onDrop",
          "propType": "func"
        },
        {
          "name": "limit",
          "propType": "number"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "instanceOf",
            "value": "array"
          }
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "listType",
          "propType": "string"
        },
        {
          "name": "timeout",
          "propType": "number"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Upload.List",
      "title": "Upload.List",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Upload",
        "main": "",
        "destructuring": true,
        "subName": "List"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "locale",
          "propType": "object",
          "description": "多语言"
        },
        {
          "name": "listType",
          "propType": {
            "type": "oneOf",
            "value": ["text", "image", "card"]
          },
          "description": "文件列表，数据格式请参考 文件对象",
          "defaultValue": "text"
        },
        {
          "name": "value",
          "propType": {
            "type": "instanceOf",
            "value": "array"
          },
          "description": "文件列表",
          "defaultValue": []
        },
        {
          "name": "closable",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "onRemove",
          "propType": "func",
          "description": "删除文件回调(支持Promise)"
        },
        {
          "name": "onCancel",
          "propType": "func",
          "description": "取消上传回调(支持Promise)"
        },
        {
          "name": "onImageError",
          "propType": "func",
          "description": "头像加载出错回调"
        },
        {
          "name": "onPreview",
          "propType": "func",
          "description": "listType=card时点击图片回调"
        },
        {
          "name": "extraRender",
          "propType": "func",
          "description": "自定义额外渲染"
        },
        {
          "name": "progressProps",
          "propType": "object",
          "description": "透传给Progress props"
        },
        {
          "name": "children",
          "propType": "node"
        },
        {
          "name": "uploader",
          "propType": "any"
        },
        {
          "name": "useDataURL",
          "propType": "bool",
          "description": "可选参数，是否本地预览"
        },
        {
          "name": "rtl",
          "propType": "bool"
        },
        {
          "name": "isPreview",
          "propType": "bool"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Upload.Selecter",
      "title": "Upload.Selecter",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Upload",
        "main": "",
        "destructuring": true,
        "subName": "Selecter"
      },
      "props": [
        {
          "name": "id",
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用上传功能"
        },
        {
          "name": "multiple",
          "propType": "bool",
          "description": "是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件",
          "defaultValue": false
        },
        {
          "name": "dragable",
          "propType": "bool",
          "description": "是否支持拖拽上传，`ie10+` 支持。"
        },
        {
          "name": "accept",
          "propType": "string",
          "description": "接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "文件选择回调"
        },
        {
          "name": "onDragOver",
          "propType": "func",
          "description": "拖拽经过回调"
        },
        {
          "name": "onDragLeave",
          "propType": "func",
          "description": "拖拽离开回调"
        },
        {
          "name": "onDrop",
          "propType": "func",
          "description": "拖拽完成回调"
        },
        {
          "name": "children",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "name",
          "propType": "string",
          "defaultValue": "file"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "Upload",
      "title": "上传",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "Upload",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "action",
          "propType": "string",
          "description": "上传的地址"
        },
        {
          "name": "value",
          "propType": {
            "type": "Json"
          },
          "description": "文件列表"
        },
        {
          "name": "defaultValue",
          "propType": "object",
          "description": "默认文件列表"
        },
        {
          "name": "shape",
          "propType": {
            "type": "oneOf",
            "value": ["card"]
          },
          "description": "上传按钮形状"
        },
        {
          "name": "listType",
          "propType": {
            "type": "oneOf",
            "value": ["text", "image", "card"]
          },
          "description": "上传列表的样式"
        },
        {
          "name": "name",
          "propType": "string",
          "description": "文件名字段"
        },
        {
          "name": "data",
          "propType": {
            "type": "oneOfType",
            "value": ["object", "func"]
          },
          "description": "上传额外传参"
        },
        {
          "name": "formatter",
          "propType": "func",
          "title": {
            "label": "数据格式化函数",
            "tip": "数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)\n@param {Object} response 返回\n@param {File} file 文件对象"
          }
        },
        {
          "name": "limit",
          "propType": "number",
          "description": "最大文件上传个数",
          "defaultValue": null
        },
        {
          "name": "timeout",
          "propType": "number",
          "description": "设置上传超时,单位ms"
        },
        {
          "name": "dragable",
          "propType": "bool",
          "description": "可选参数，是否支持拖拽上传，`ie10+` 支持。"
        },
        {
          "name": "useDataURL",
          "propType": "bool",
          "description": "可选参数，是否本地预览"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "可选参数，是否禁用上传功能"
        },
        {
          "name": "onSelect",
          "propType": "func",
          "description": "选择文件回调"
        },
        {
          "name": "onProgress",
          "propType": "func",
          "description": "上传中"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "上传文件改变时的状态\n@param {Object} info 文件事件对象"
        },
        {
          "name": "onSuccess",
          "propType": "func",
          "description": "可选参数，上传成功回调函数，参数为请求下响应信息以及文件\n@param {Object} file 文件\n@param {Array<Object>} value 值"
        },
        {
          "name": "afterSelect",
          "propType": "func",
          "description": "可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.\n@param {Object} file\n@returns {Boolean} 返回false会阻止上传,其他则表示正常"
        },
        {
          "name": "onRemove",
          "propType": "func",
          "description": "移除文件回调函数\n@param {Object} file 文件\n@returns {Boolean|Promise} 返回 false、Promise.resolve(false)、 Promise.reject() 将阻止文件删除"
        },
        {
          "name": "onError",
          "propType": "func",
          "description": "可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件\n@param {Object} file 出错的文件\n@param {Array} value 当前值"
        },
        {
          "name": "beforeUpload",
          "propType": "func",
          "title": {
            "label": "开始上传时回调",
            "tip": "可选参数, 详见 [beforeUpload](#beforeUpload)\n@param {Object} file 所有文件\n@param {Object} options 参数\n@returns {Boolean|Object|Promise} 返回值作用见demo"
          }
        },
        {
          "name": "onDrop",
          "propType": "func",
          "description": "放文件"
        },
        {
          "name": "className",
          "propType": "string",
          "description": "自定义class"
        },
        {
          "name": "style",
          "propType": "object",
          "description": "自定义内联样式"
        },
        {
          "name": "autoUpload",
          "propType": "bool",
          "description": "自动上传",
          "defaultValue": true
        },
        {
          "name": "request",
          "propType": "func",
          "description": "自定义上传方法\n@param {Object} option\n@return {Object} object with abort method"
        },
        {
          "name": "progressProps",
          "propType": "object",
          "description": "透传给Progress props"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {number} value 评分值"
        }
      ],
      "configure": {
        "props": [
          {
            "name": "title",
            "title": "标题",
            "setter": "StringSetter"
          },
          {
            "name": "title",
            "title": "标题位置",
            "setter": "StringSetter"
          },
          {
            "name": "defaultValue",
            "title": "默认值",
            "setter": {
              "componentName": "JsonSetter"
            }
          },
          {
            "name": "shape",
            "title": "按钮形状",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": [
                  {
                    "title": "默认",
                    "value": ""
                  },
                  {
                    "title": "卡片",
                    "value": "card"
                  }
                ]
              }
            },
            "description": "上传按钮形状"
          },
          {
            "name": "listType",
            "title": "列表样式",
            "setter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "options": ["text", "image", "card"]
              }
            },
            "defaultValue": "text",
            "description": "上传列表的样式"
          },
          {
            "name": "limit",
            "title": "数量限制",
            "setter": "NumberSetter"
          },
          {
            "name": "disabled",
            "title": "是否禁用",
            "setter": "BoolSetter"
          },
          {
            "type": "group",
            "title": "高级",
            "display": "block",
            "items": [
              {
                "name": "id",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "唯一标识",
                    "en-US": "ID"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: id | 说明: 唯一标识",
                    "en-US": "prop: id | description: switch id"
                  }
                },
                "setter": "StringSetter"
              },
              {
                "name": "name",
                "title": {
                  "label": {
                    "type": "i18n",
                    "zh-CN": "表单标识",
                    "en-US": "Name"
                  },
                  "tip": {
                    "type": "i18n",
                    "zh-CN": "属性: name | 说明: 表单标识",
                    "en-US": "prop: name | description: switch name"
                  }
                },
                "setter": "StringSetter"
              }
            ]
          }
        ],
        "advanced": {
          "initials": [
            {
              "name": "shape",
              "initial": {
                "type": "JSFunction",
                "value": "() => \"card\""
              }
            },
            {
              "name": "defaultValue",
              "initial": {
                "type": "JSFunction",
                "value": "() => []"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "Video",
      "title": "视频",
      "npm": {
        "package": "@alifd/ali-lowcode-components",
        "version": "latest",
        "exportName": "Video",
        "main": "",
        "destructuring": true,
        "subName": ""
      },
      "props": [
        {
          "name": "src",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "视频链接",
              "en-US": "Video Address"
            },
            "tip": {
              "type": "i18n",
              "zh-CN": "属性: src | 说明: 视频链接",
              "en-US": "prop: src | description: Video address"
            }
          },
          "propType": "string",
          "defaultValue": "https://fusion.alicdn.com/fusion-site-2.0/fusion.mp4"
        },
        {
          "name": "autoPlay",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "自动播放",
              "en-US": "autoPlay"
            }
          },
          "propType": "bool",
          "setter": {
            "componentName": "BoolSetter"
          }
        },
        {
          "name": "loop",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "循环播放",
              "en-US": "loop"
            }
          },
          "propType": "bool"
        },
        {
          "name": "muted",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "静音",
              "en-US": "muted"
            }
          },
          "propType": "bool"
        },
        {
          "name": "controls",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "控制条",
              "en-US": "controls"
            }
          },
          "propType": "bool"
        },
        {
          "name": "poster",
          "title": {
            "label": {
              "type": "i18n",
              "zh-CN": "默认图URL",
              "en-US": "poster"
            }
          },
          "propType": "string"
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "configure": {
        "props": {
          "isExtends": true,
          "override": [
            {
              "name": "autoPlay",
              "title": "自动播放",
              "setter": {
                "componentName": "BoolSetter"
              },
              "extraProps": {
                "setValue": {
                  "type": "JSFunction",
                  "value": "(target, value) => {\n              if (value) {\n                target.getNode().setPropValue(\"muted\", true);\n              }\n            }"
                }
              }
            },
            {
              "name": "muted",
              "title": "静音",
              "setter": {
                "componentName": "BoolSetter"
              },
              "condition": {
                "type": "JSFunction",
                "value": "target => {\n            return !target.getProps().getPropValue(\"autoPlay\");\n          }"
              }
            }
          ]
        }
      },
      "icon": "",
      "category": "内容"
    },
    {
      "componentName": "WeekPicker",
      "title": "WeekPicker",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "DatePicker",
        "main": "",
        "destructuring": true,
        "subName": "WeekPicker"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "输入框内置标签"
        },
        {
          "name": "state",
          "propType": {
            "type": "oneOf",
            "value": ["success", "loading", "error"]
          },
          "description": "输入框状态"
        },
        {
          "name": "placeholder",
          "propType": "string",
          "description": "输入提示"
        },
        {
          "name": "defaultVisibleMonth",
          "propType": "func",
          "description": "默认展现的月\n@return {MomentObject} 返回包含指定月份的 moment 对象实例"
        },
        {
          "name": "onVisibleMonthChange",
          "propType": "func"
        },
        {
          "name": "value",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "日期值（受控）moment 对象"
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "初始日期值，moment 对象"
        },
        {
          "name": "format",
          "propType": "string",
          "description": "日期值的格式（用于限定用户输入和展示）",
          "defaultValue": "YYYY-wo"
        },
        {
          "name": "disabledDate",
          "propType": "func",
          "description": "禁用日期函数\n@param {MomentObject} 日期值\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@return {Boolean} 是否禁用"
        },
        {
          "name": "footerRender",
          "propType": "func",
          "description": "自定义面板页脚\n@return {Node} 自定义的面板页脚组件"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "日期值改变时的回调\n@param {MomentObject|String} value 日期值"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "输入框尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "是否显示清空按钮",
          "defaultValue": true
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层显示状态"
        },
        {
          "name": "defaultVisible",
          "propType": "bool",
          "description": "弹层默认是否显示",
          "defaultValue": false
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层展示状态变化时的回调\n@param {Boolean} visible 弹层是否显示\n@param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "popupTriggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "弹层触发方式",
          "defaultValue": "click"
        },
        {
          "name": "popupAlign",
          "propType": "string",
          "description": "弹层对齐方式,具体含义见 OverLay文档",
          "defaultValue": "tl tl"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        },
        {
          "name": "popupStyle",
          "propType": "object",
          "description": "弹层自定义样式"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹层自定义样式类"
        },
        {
          "name": "popupProps",
          "propType": "object",
          "description": "弹层其他属性"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "inputProps",
          "propType": "object",
          "description": "输入框其他属性"
        },
        {
          "name": "dateCellRender",
          "propType": "func",
          "description": "自定义日期渲染函数\n@param {Object} value 日期值（moment对象）\n@returns {ReactNode}"
        },
        {
          "name": "monthCellRender",
          "propType": "func",
          "description": "自定义月份渲染函数\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@returns {ReactNode}"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {MomentObject} value 年份"
        },
        {
          "name": "yearCellRender",
          "propType": "func"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "name",
          "propType": "string"
        },
        {
          "name": "popupComponent",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          }
        },
        {
          "name": "popupContent",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      "componentName": "YearPicker",
      "title": "YearPicker",
      "docUrl": "",
      "screenshot": "",
      "npm": {
        "package": "@alifd/next",
        "version": "1.23.x",
        "exportName": "DatePicker",
        "main": "",
        "destructuring": true,
        "subName": "YearPicker"
      },
      "props": [
        {
          "name": "prefix",
          "propType": "string",
          "defaultValue": "next-"
        },
        {
          "name": "rtl",
          "propType": "bool",
          "defaultValue": false
        },
        {
          "name": "label",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          },
          "description": "输入框内置标签"
        },
        {
          "name": "state",
          "propType": {
            "type": "oneOf",
            "value": ["success", "loading", "error"]
          },
          "description": "输入框状态"
        },
        {
          "name": "placeholder",
          "propType": "string",
          "description": "输入提示"
        },
        {
          "name": "value",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "日期值（受控）moment 对象"
        },
        {
          "name": "defaultValue",
          "propType": {
            "type": "instanceOf",
            "value": "custom"
          },
          "description": "初始日期值，moment 对象"
        },
        {
          "name": "format",
          "propType": "string",
          "description": "日期值的格式（用于限定用户输入和展示）",
          "defaultValue": "YYYY"
        },
        {
          "name": "disabledDate",
          "propType": "func",
          "description": "禁用日期函数\n@param {MomentObject} 日期值\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@return {Boolean} 是否禁用"
        },
        {
          "name": "footerRender",
          "propType": "func",
          "description": "自定义面板页脚\n@return {Node} 自定义的面板页脚组件"
        },
        {
          "name": "onChange",
          "propType": "func",
          "description": "日期值改变时的回调\n@param {MomentObject|String} value 日期值"
        },
        {
          "name": "size",
          "propType": {
            "type": "oneOf",
            "value": ["small", "medium", "large"]
          },
          "description": "输入框尺寸",
          "defaultValue": "medium"
        },
        {
          "name": "disabled",
          "propType": "bool",
          "description": "是否禁用"
        },
        {
          "name": "hasClear",
          "propType": "bool",
          "description": "是否显示清空按钮",
          "defaultValue": true
        },
        {
          "name": "visible",
          "propType": "bool",
          "description": "弹层显示状态"
        },
        {
          "name": "defaultVisible",
          "propType": "bool",
          "description": "弹层默认是否显示"
        },
        {
          "name": "onVisibleChange",
          "propType": "func",
          "description": "弹层展示状态变化时的回调\n@param {Boolean} visible 弹层是否显示\n@param {String} reason 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发"
        },
        {
          "name": "popupTriggerType",
          "propType": {
            "type": "oneOf",
            "value": ["click", "hover"]
          },
          "description": "弹层触发方式",
          "defaultValue": "click"
        },
        {
          "name": "popupAlign",
          "propType": "string",
          "description": "弹层对齐方式, 具体含义见 OverLay文档",
          "defaultValue": "tl tl"
        },
        {
          "name": "popupContainer",
          "propType": "any",
          "description": "弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素"
        },
        {
          "name": "popupStyle",
          "propType": "object",
          "description": "弹层自定义样式"
        },
        {
          "name": "popupClassName",
          "propType": "string",
          "description": "弹层自定义样式类"
        },
        {
          "name": "popupProps",
          "propType": "object",
          "description": "弹层其他属性"
        },
        {
          "name": "followTrigger",
          "propType": "bool",
          "description": "是否跟随滚动"
        },
        {
          "name": "inputProps",
          "propType": "object",
          "description": "输入框其他属性"
        },
        {
          "name": "yearCellRender",
          "propType": "func"
        },
        {
          "name": "dateInputAriaLabel",
          "propType": "string",
          "description": "日期输入框的 aria-label 属性"
        },
        {
          "name": "isPreview",
          "propType": "bool",
          "description": "是否为预览态"
        },
        {
          "name": "renderPreview",
          "propType": "func",
          "description": "预览态模式下渲染的内容\n@param {MomentObject} value 年份"
        },
        {
          "name": "locale",
          "propType": "object"
        },
        {
          "name": "className",
          "propType": "string"
        },
        {
          "name": "name",
          "propType": "string"
        },
        {
          "name": "popupComponent",
          "propType": {
            "type": "instanceOf",
            "value": "elementType"
          }
        },
        {
          "name": "popupContent",
          "propType": {
            "type": "instanceOf",
            "value": "node"
          }
        },
        {
          "name": "style",
          "propType": "object"
        }
      ],
      "category": "基础"
    },
    {
      exportName: 'LowcodeBaseComponentsMeta',
      npm: {
        package: 'lowcode-base-components',
        version: '0.1.0',
      },
      url: '/lowcode-base-components/meta.js',
      urls: {
        default: '/lowcode-base-components/meta.js',
      },
      advancedUrls: {
        default: ['/lowcode-base-components/meta.js'],
      },
    },
    // 这个配置在仓库的lowcode目录下
    // {
    //   "componentName": "ListDetailPage",
    //   "title": "列表详情页签",
    //   "docUrl": "",
    //   "screenshot": "",
    //   "npm": {
    //     "package": "lowcode-base-components",
    //     "version": "1.0.1",
    //     "exportName": "ListDetailPage",
    //     "main": "lib/index.js",
    //     "subName": ""
    //   },
    //   "props":[
    //     {
    //       "name":"title",
    //       "title":"列表标题",
    //       "propType":"string"
    //     },
    //     {
    //       "name":"detailList",
    //       "title":"详情配置",
    //       "propType":{
    //         "type":"oneOfType",
    //         "value":["Json","JSExpression"]
    //       }
    //     },
    //     {
    //       "name": "children",
    //       "title": "列表内容",
    //       "setter": {
    //         "componentName": "SlotSetter",
    //         "initialValue": {
    //           "type": "JSSlot",
    //           "params": ["value", "index", "record"],
    //           "value": []
    //         }
    //       }
    //     },
    //   ],
    //   "configure":{
    //     "props":[
    //       {
    //         name:"title",
    //         title:"列表标题",
    //         "tip": "列表的标题",
    //         setter:"StringSetter"
    //       },
    //       {
    //         "name": "detailList",
    //         "title": "详情配置",
    //         "setter": {
    //           "componentName": "MixedSetter",
    //           "props": {
    //             "setters": ["JsonSetter", "ExpressionSetter"]
    //           }
    //         }
    //       },
    //     ]
    //   }

    // },
    // {
    //   "componentName": "FullIframe",
    //   "title": "全屏框架",
    //   "docUrl": "",
    //   "screenshot": "",
    //   "npm": {
    //     "package": "lowcode-base-components",
    //     "version": "1.0.1",
    //     "exportName": "FullIframe",
    //     "main": "lib/index.js",
    //     "subName": ""
    //   },
    //   "props":[
    //     {
    //       "name":"url",
    //       "title":"列表标题",
    //       "propType":"string"
    //     }
    //   ],
    //   "configure":{
    //     "props":[
    //       {
    //         name:"url",
    //         title:"列表标题",
    //         "tip": "列表的标题",
    //         setter:"StringSetter"
    //       }
    //     ]
    //   }
    // }
  ],
  /**
   * robin 笔记
   * 1、componentList-snippets是配置设置器的
   * 2、快速定位表格的设置器：全局查找 showMiniPager 第二个地方
   */
  "componentList": [   {
    "title":"自定义",
    "icon":"",
    children:[
      {
        "componentName": "FullIframe",
        "library": "BaseComps",
        "title": "全屏框架",
        "icon": "",
        "snippets": [
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
        ]
      },
      // robin 
      {
        "componentName": "ListDetailPage",
        "library": "BaseComps",
        "title": "列表详情页签",
        "icon": "",
        "snippets": [
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
                }
              }
            }
          }
        ]
      }
    ]
  },
    {
      "title": "常用",
      "icon": "",
      "children": [
        {
          "componentName": "Link",
          "library": "Next",
          "title": "链接",
          "icon": "",
          "snippets": [
            {
              "title": "链接",
              "screenshot": "https://img.alicdn.com/tfs/TB15DZVReL2gK0jSZFmXXc7iXXa-200-200.svg",
              "schema": {
                "componentName": "Link",
                "title": "链接",
                "props": {
                  "href": "https://fusion.design",
                  "target": "_blank",
                  "children": "这是一个超链接"
                }
              }
            }
          ]
        },
        {
          "componentName": "Button",
          "library": "Next",
          "title": "按钮",
          "icon": "",
          "snippets": [
            {
              "title": "主要",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png",
              "schema": {
                "componentName": "Button",
                "props": {
                  "prefix": "next-",
                  "type": "primary",
                  "size": "medium",
                  "htmlType": "button",
                  "component": "button",
                  "children": "取消"
                }
              }
            },
            {
              "title": "次要",
              "screenshot": "https://img.alicdn.com/tfs/TB1a.N1uVT7gK0jSZFpXXaTkpXa-112-64.png",
              "schema": {
                "componentName": "Button",
                "props": {
                  "type": "secondary",
                  "size": "medium",
                  "htmlType": "button",
                  "component": "button",
                  "children": "提交"
                }
              }
            },
            {
              "title": "分隔按钮",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_split-button.png",
              "schema": {
                "componentName": "SplitButton",
                "props": {
                  "prefix": "next-",
                  "type": "normal",
                  "size": "medium",
                  "defaultSelectedKeys": [],
                  "autoWidth": true,
                  "popupTriggerType": "click"
                }
              }
            },
            {
              "title": "按钮组",
              "screenshot": "https://img.alicdn.com/tfs/TB1t6dhvV67gK0jSZPfXXahhFXa-310-122.png",
              "schema": {
                "componentName": "Button.Group",
                "props": {},
                "children": [
                  {
                    "componentName": "Button",
                    "props": {
                      "type": "primary",
                      "style": {
                        "margin": "0 5px 0 5px"
                      },
                      "htmlType": "submit",
                      "children": "提交"
                    },
                    "children": [
                      {
                        "componentName": "Icon",
                        "props": {
                          "type": "success"
                        }
                      }
                    ]
                  },
                  {
                    "componentName": "Button",
                    "props": {
                      "type": "normal",
                      "style": {
                        "margin": "0 5px 0 5px"
                      },
                      "htmlType": "reset",
                      "children": "重置"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "componentName": "Image",
          "library": "Next",
          "title": "图片",
          "icon": "",
          "snippets": [
            {
              "title": "图片",
              "screenshot": "https://img.alicdn.com/tfs/TB10nEur.Y1gK0jSZFCXXcwqXXa-234-230.png",
              "schema": {
                "title": "图片",
                "componentName": "Image",
                "props": {
                  "src": "https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg"
                }
              }
            }
          ]
        },

        {
          "componentName": "RichText",
          "library": "Next",
          "title": "需求占位",
          "icon": "",
          "snippets": [
            {
              "title": "需求占位",
              "screenshot": "https://img.alicdn.com/tfs/TB160cKkP39YK4jSZPcXXXrUFXa-112-64.png",
              "schema": {
                "title": "需求占位",
                "componentName": "RichText",
                "props": {
                  "title": "需求占位描述",
                  "content": "<p><span style=\"font-size:30px\">需求标题</span></p><p>你可以在这里描述需求<br/>或者粘贴需求截图</p><p></p>"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "title": "容器",
      "icon": "",
      "children": [
        {
          "componentName": "Balloon",
          "library": "Next",
          "title": "气泡框",
          "icon": "",
          "snippets": [
            {
              "title": "气泡框",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_balloon.png",
              "schema": {
                "componentName": "Balloon",
                "props": {
                  "defaultVisible": true,
                  "prefix": "next-",
                  "size": "medium",
                  "type": "normal",
                  "closable": true,
                  "align": "b",
                  "offset": [0, 0],
                  "triggerType": "hover",
                  "autoFocus": true,
                  "trigger": {
                    "type": "JSSlot",
                    "props": {
                      "title": "触发元素"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "componentName": "Dialog",
          "library": "Next",
          "title": "对话框",
          "icon": "",
          "snippets": [
            {
              "title": "对话框",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_dialog.png",
              "schema": {
                "componentName": "Dialog",
                "props": {
                  "prefix": "next-",
                  "footerAlign": "right",
                  "title": "Title",
                  "footer": true,
                  "footerActions": ["ok", "cancel"],
                  "closeable": "esc,close",
                  "hasMask": true,
                  "align": "cc cc",
                  "minMargin": 40,
                  "isAutoContainer": true,
                  "visible": true
                }
              }
            },
            {
              "title": "隐藏底部",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_dialog.png",
              "schema": {
                "componentName": "Dialog",
                "props": {
                  "prefix": "next-",
                  "footerAlign": "right",
                  "title": "Title",
                  "footer": false,
                  "closeable": "esc,close",
                  "hasMask": true,
                  "align": "cc cc",
                  "minMargin": 40,
                  "isAutoContainer": true,
                  "visible": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Drawer",
          "library": "Next",
          "title": "抽屉",
          "icon": "",
          "snippets": [
            {
              "title": "侧抽屉",
              "screenshot": "https://img.alicdn.com/tfs/TB1o0t4u9f2gK0jSZFPXXXsopXa-112-64.png",
              "schema": {
                "componentName": "Drawer",
                "props": {
                  "prefix": "next-",
                  "triggerType": "click",
                  "closeable": true,
                  "placement": "right",
                  "hasMask": true,
                  "isAutoContainer": true,
                  "visible": true
                }
              }
            },
            {
              "title": "底部抽屉",
              "screenshot": "https://img.alicdn.com/tfs/TB1YOd2u2b2gK0jSZK9XXaEgFXa-112-64.png",
              "schema": {
                "componentName": "Drawer",
                "props": {
                  "prefix": "next-",
                  "triggerType": "click",
                  "closeable": true,
                  "placement": "bottom",
                  "hasMask": true,
                  "isAutoContainer": true,
                  "visible": true
                }
              }
            }
          ]
        },
        // robin lowcodebase

      ]
    },
    {
      "title": "导航",
      "icon": "",
      "children": [
        {
          "componentName": "Breadcrumb",
          "library": "Next",
          "title": "面包屑",
          "icon": "",
          "snippets": [
            {
              "title": "面包屑",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_breadcrumb.png",
              "schema": {
                "componentName": "Breadcrumb",
                "props": {
                  "maxNode": 100,
                  "component": "nav"
                },
                "children": [
                  {
                    "componentName": "Breadcrumb.Item",
                    "props": {
                      "children": "一级",
                      "primaryKey": "breadcrumb-item-1",
                      "target": "_self"
                    }
                  },
                  {
                    "componentName": "Breadcrumb.Item",
                    "props": {
                      "children": "二级",
                      "primaryKey": "breadcrumb-item-2",
                      "target": "_self"
                    }
                  },
                  {
                    "componentName": "Breadcrumb.Item",
                    "props": {
                      "children": "三级",
                      "primaryKey": "breadcrumb-item-3",
                      "target": "_self"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "componentName": "Pagination",
          "library": "Next",
          "title": "翻页器",
          "icon": "",
          "snippets": [
            {
              "title": "翻页器",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_pagination.png",
              "schema": {
                "componentName": "Pagination",
                "props": {
                  "prefix": "next-",
                  "type": "normal",
                  "shape": "normal",
                  "size": "medium",
                  "defaultCurrent": 1,
                  "total": 100,
                  "pageShowCount": 5,
                  "pageSize": 10,
                  "pageSizePosition": "start",
                  "showJump": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Search",
          "library": "Next",
          "title": "搜索",
          "icon": "",
          "snippets": [
            {
              "title": "搜索",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_search.png",
              "schema": {
                "componentName": "Search",
                "props": {
                  "followTrigger": true,
                  "searchText": "搜索",
                  "prefix": "next-",
                  "shape": "normal",
                  "type": "normal",
                  "size": "medium",
                  "hasIcon": true
                }
              }
            },
            {
              "title": "带分类",
              "screenshot": "https://img.alicdn.com/tfs/TB1rRaLu5_1gK0jSZFqXXcpaXXa-112-64.png",
              "schema": {
                "componentName": "Search",
                "props": {
                  "followTrigger": true,
                  "defaultFilterValue": "Products",
                  "filter": [
                    {
                      "label": "Products",
                      "value": "Products"
                    },
                    {
                      "label": "Products1",
                      "value": "Products1"
                    }
                  ],
                  "searchText": "搜索",
                  "prefix": "next-",
                  "shape": "normal",
                  "type": "normal",
                  "size": "medium",
                  "hasIcon": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Step",
          "library": "Next",
          "title": "步骤条",
          "icon": "",
          "snippets": [
            {
              "title": "步骤",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_step.png",
              "schema": {
                "componentName": "Step",
                "props": {
                  "prefix": "next-",
                  "direction": "hoz",
                  "labelPlacement": "ver",
                  "shape": "circle",
                  "animation": true
                },
                "children": [
                  {
                    "componentName": "Step.Item",
                    "props": {
                      "title": "步骤1",
                      "icon": "smile",
                      "content": "内容1",
                      "status": ""
                    }
                  },
                  {
                    "componentName": "Step.Item",
                    "props": {
                      "title": "步骤2",
                      "icon": "smile",
                      "content": "内容2",
                      "status": ""
                    }
                  },
                  {
                    "componentName": "Step.Item",
                    "props": {
                      "title": "步骤3",
                      "icon": "smile",
                      "content": "内容3",
                      "status": ""
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "title": "内容",
      "icon": "",
      "children": [
        {
          "componentName": "Avatar",
          "library": "Next",
          "title": "头像",
          "icon": "",
          "snippets": [
            {
              "title": "头像",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_avatar.png",
              "schema": {
                "componentName": "Avatar",
                "props": {
                  "prefix": "next-",
                  "size": "medium",
                  "shape": "circle",
                  "icon": "smile"
                }
              }
            }
          ]
        },
        {
          "componentName": "Badge",
          "library": "Next",
          "title": "徽标数",
          "icon": "",
          "snippets": [
            {
              "title": "徽标数",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_badge.png",
              "schema": {
                "componentName": "Badge",
                "props": {
                  "prefix": "next-",
                  "showZero": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Balloon.Tooltip",
          "library": "Next",
          "title": "文字提示",
          "icon": "",
          "snippets": [
            {
              "title": "文字提示",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_balloon.png",
              "schema": {
                "componentName": "Balloon.Tooltip",
                "props": {
                  "defaultVisible": true,
                  "prefix": "next-",
                  "size": "medium",
                  "type": "normal",
                  "closable": true,
                  "align": "b",
                  "offset": [0, 0],
                  "triggerType": "hover",
                  "autoFocus": true,
                  "trigger": {
                    "type": "JSSlot",
                    "props": {
                      "title": "触发元素"
                    }
                  },
                  "children": "文字提示信息"
                }
              }
            }
          ]
        },
        {
          "componentName": "Calendar",
          "library": "Next",
          "title": "日历",
          "icon": "",
          "snippets": [
            {
              "screenshot": "https://img.alicdn.com/tfs/TB158yMu4v1gK0jSZFFXXb0sXXa-112-64.png",
              "title": "卡片型",
              "schema": {
                "componentName": "Calendar",
                "props": {
                  "shape": "card"
                }
              }
            },
            {
              "screenshot": "https://img.alicdn.com/tfs/TB1PRmJu7P2gK0jSZPxXXacQpXa-112-64.png",
              "title": "面板型",
              "schema": {
                "componentName": "Calendar",
                "props": {
                  "shape": "panel"
                }
              }
            },
            {
              "screenshot": "https://img.alicdn.com/tfs/TB10JuKu.T1gK0jSZFhXXaAtVXa-112-64.png",
              "title": "全屏型",
              "schema": {
                "componentName": "Calendar",
                "props": {
                  "shape": "fullscreen"
                }
              }
            }
          ]
        },
        {
          "componentName": "Card",
          "library": "Next",
          "title": "卡片",
          "icon": "",
          "snippets": [
            {
              "screenshot": "https://img.alicdn.com/tfs/TB1CHN3u4z1gK0jSZSgXXavwpXa-112-64.png",
              "title": "普通型",
              "schema": {
                "componentName": "Card",
                "props": {
                  "title": "普通型卡片"
                },
                "children": []
              }
            },
            {
              "screenshot": "https://img.alicdn.com/tfs/TB1.Ut6u4D1gK0jSZFKXXcJrVXa-112-64.png",
              "title": "自定义",
              "schema": {
                "componentName": "Card",
                "props": {
                  "title": "自定义卡片",
                  "extra": {
                    "type": "JSSlot"
                  }
                },
                "children": []
              }
            }
          ]
        },
        {
          "componentName": "CascaderSelect",
          "library": "Next",
          "title": "级联选择器",
          "icon": "",
          "snippets": [
            {
              "title": "收起模式",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_cascader-select.png",
              "schema": {
                "componentName": "CascaderSelect",
                "props": {
                  "prefix": "next-",
                  "size": "medium",
                  "hasArrow": true,
                  "hasBorder": true,
                  "expandTriggerType": "click",
                  "resultAutoWidth": true,
                  "notFoundContent": "Not Found",
                  "dataSource": [
                    {
                      "value": "2974",
                      "label": "西安",
                      "children": [
                        {
                          "value": "2975",
                          "label": "西安市"
                        },
                        {
                          "value": "2976",
                          "label": "高陵县"
                        },
                        {
                          "value": "2977",
                          "label": "蓝田县"
                        }
                      ]
                    }
                  ]
                }
              }
            },
            {
              "title": "展开模式",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_cascader.png",
              "schema": {
                "componentName": "Cascader",
                "props": {
                  "prefix": "next-",
                  "expandTriggerType": "click",
                  "dataSource": [
                    {
                      "value": "2974",
                      "label": "西安",
                      "children": [
                        {
                          "value": "2975",
                          "label": "西安市"
                        },
                        {
                          "value": "2976",
                          "label": "高陵县"
                        },
                        {
                          "value": "2977",
                          "label": "蓝田县"
                        }
                      ]
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "componentName": "Checkbox",
          "library": "Next",
          "title": "复选按钮",
          "icon": "",
          "snippets": [
            {
              "title": "复选按钮",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_menu.png",
              "schema": {
                "componentName": "Checkbox",
                "props": {
                  "label": "Check Option"
                }
              }
            },
            {
              "title": "复选按钮组",
              "screenshot": "https://img.alicdn.com/tfs/TB1EJN7uYY1gK0jSZTEXXXDQVXa-112-64.png",
              "schema": {
                "componentName": "CheckboxGroup",
                "props": {
                  "prefix": "next-",
                  "dataSource": [
                    {
                      "label": "选项一",
                      "value": "1"
                    },
                    {
                      "label": "选项二",
                      "value": "2"
                    },
                    {
                      "label": "选项三",
                      "value": "3"
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "componentName": "DatePicker",
          "library": "Next",
          "title": "日期选择框",
          "icon": "",
          "snippets": [
            {
              "title": "日期选择框",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_date-picker.png",
              "schema": {
                "componentName": "DatePicker",
                "props": {
                  "prefix": "next-",
                  "format": "YYYY-MM-DD",
                  "size": "medium",
                  // "value":"a,bc",
                  "hasClear": false,
                  "popupTriggerType": "click",
                  "popupAlign": "tl tl",
                  "followTrigger": true
                }
              }
            },
            {
              "title": "日期区间",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_date-picker.png",
              "schema": {
                "componentName": "RangePicker",
                "props": {
                  "prefix": "next-",
                  "format": "YYYY-MM-DD",
                  "size": "medium",
                  "type": "date",
                  "hasClear": false,
                  "popupTriggerType": "click",
                  "popupAlign": "tl tl",
                  "followTrigger": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Divider",
          "library": "Next",
          "title": "分隔符",
          "icon": "",
          "snippets": [
            {
              "title": "分隔线",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_divider.png",
              "schema": {
                "componentName": "Divider",
                "props": {
                  "prefix": "next-",
                  "direction": "hoz",
                  "orientation": "center",
                  "children": "分隔符"
                }
              }
            }
          ]
        },
        {
          "componentName": "Form",
          "library": "Next",
          "title": "表单容器",
          "icon": "",
          "snippets": [
            {
              "title": "表单容器",
              "screenshot": "https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png",
              "schema": {
                "componentName": "Form",
                "props": {
                  "labelCol": {
                    "span": 2,
                    "labelAlign": "left"
                  },
                  "role": "grid"
                },
                "children": [
                  {
                    "componentName": "Form.Item",
                    "props": {
                      "label": "Email: ",
                      "required": true
                    },
                    "children": [
                      {
                        "componentName": "Input",
                        "props": {
                          "name": "email",
                          "size": "medium",
                          "placeholder": "用户名"
                        }
                      }
                    ]
                  },
                  {
                    "componentName": "Form.Item",
                    "props": {
                      "label": "Password: ",
                      "required": true
                    },
                    "children": [
                      {
                        "componentName": "Input.Password",
                        "props": {
                          "name": "password",
                          "placeholder": "请输入密码",
                          "size": "medium"
                        }
                      }
                    ]
                  },
                  {
                    "componentName": "Form.Item",
                    "props": {
                      "wrapperCol": {
                        "offset": 7
                      }
                    },
                    "children": [
                      {
                        "componentName": "Form.Submit",
                        "props": {
                          "type": "primary",
                          "validate": true,
                          "onClick": {
                            "type": "JSFunction",
                            "value": "(v, e) => { console.log(v, e) }"
                          },
                          "children": "Submit"
                        }
                      },
                      {
                        "componentName": "Form.Reset",
                        "props": {
                          "style": {
                            "marginLeft": 10
                          },
                          "children": "Reset"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "componentName": "Icon",
          "library": "Next",
          "title": "图标",
          "icon": "",
          "snippets": [
            {
              "title": "图标",
              "screenshot": "",
              "schema": {
                "componentName": "Icon",
                "props": {
                  "type": "smile"
                }
              }
            }
          ]
        },
        {
          "componentName": "Input",
          "library": "Next",
          "title": "输入框",
          "icon": "",
          "snippets": [
            {
              "title": "输入框",
              "screenshot": "https://img.alicdn.com/tfs/TB1ysp3u8v0gK0jSZKbXXbK2FXa-112-64.png",
              "schema": {
                "componentName": "Input",
                "props": {
                  "hasBorder": true,
                  "size": "medium",
                  "autoComplete": "off"
                }
              }
            },
            {
              "title": "密码框",
              "screenshot": "https://img.alicdn.com/tfs/TB1ikF3u7P2gK0jSZPxXXacQpXa-112-64.png",
              "schema": {
                "componentName": "Input.Password",
                "props": {
                  "hasBorder": true,
                  "size": "medium",
                  "autoComplete": "off"
                }
              }
            },
            {
              "title": "TextArea",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_input.png",
              "schema": {
                "componentName": "Input.TextArea",
                "props": {
                  "hasBorder": true,
                  "size": "medium",
                  "autoComplete": "off"
                }
              }
            }
          ]
        },
        {
          "componentName": "NextTable",
          "library": "Next",
          "title": "表格",
          "icon": "",
          "snippets": [
            {
              "title": "NextTable",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png",
              "schema": {
                "componentName": "NextTable",
                "title": "表格",
                "props": {
                  "setEmptyContent": true,
                  "emptyContent": {
                    "type": "JSSlot",
                    "title": "EmptyContent",
                    "value": [
                      {
                        "componentName": "Typography.Text",
                        "props": {
                          "children": "No Data"
                        }
                      }
                    ]
                  },
                  // 改为不显示
                  "showMiniPager": false,
                  "showActionBar": false,
                  "actionBar": [
                    // {
                    //   "title": "新增",
                    //   "type": "primary"
                    // },
                    // {
                    //   "title": "编辑"
                    // }
                  ],
                  "columns": [
                    {
                      "dataKey": "name",
                      "width": 200,
                      "align": "center",
                      "title": "姓名",
                      "editType": "text"
                    },
                    {
                      "dataKey": "age",
                      "width": 200,
                      "align": "center",
                      "title": "年龄"
                    },
                    {
                      "dataKey": "role",
                      "width": 200,
                      "align": "center",
                      "title": "职责"
                    }
                  ],
                  "data": [
                    {
                      "name": "王小",
                      "id": "1",
                      "age": 15000,
                      "role": "开发"
                    },
                    {
                      "name": "王中",
                      "id": "2",
                      "age": 25000,
                      "role": "产品"
                    },
                    {
                      "name": "王大",
                      "id": "3",
                      "age": 35000,
                      "role": "设计"
                    }
                  ],
                  "actionTitle": "操作",
                  "actionWidth": 180,
                  "actionType": "link",
                  "actionFixed": "right",
                  "actionHidden": false,
                  "maxWebShownActionCount": 2,
                  "actionColumn": [
                    // 一个查看替换两个按钮
                    {
                      title:'查看'
                    }
                    // {
                    //   "title": "编辑",
                    //   "callback": {
                    //     "type": "JSFunction",
                    //     "value": "(rowData, action, table) => {\n return table.editRow(rowData).then((row) => {\n console.log(row);\n });\n }"
                    //   }
                    // },
                    // {
                    //   "title": "保存",
                    //   "callback": {
                    //     "type": "JSFunction",
                    //     "value": "(rowData, action, table) => { \nreturn table.saveRow(rowData).then((row) => { \nconsole.log(row); \n}); \n}"
                    //   },
                    //   "mode": "EDIT"
                    // }
                  ]
                }
              }
            }
          ]
        },
        {
          "componentName": "NumberPicker",
          "library": "Next",
          "title": "数字输入框",
          "icon": "",
          "snippets": [
            {
              "title": "数字输入框",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_number-picker.png",
              "schema": {
                "componentName": "NumberPicker",
                "props": {
                  "prefix": "next-",
                  "type": "normal",
                  "size": "medium",
                  "step": 1,
                  "editable": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Radio",
          "library": "Next",
          "title": "单选框",
          "icon": "",
          "snippets": [
            {
              "title": "单选按钮",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_radio.png",
              "schema": {
                "componentName": "Radio",
                "props": {
                  "label": "选项一",
                  "value": "1"
                }
              }
            },
            {
              "title": "单选按钮组",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_radio.png",
              "schema": {
                "componentName": "Radio.Group",
                "props": {
                  "dataSource": [
                    {
                      "label": "选项一",
                      "value": "1"
                    },
                    {
                      "label": "选项二",
                      "value": "2"
                    },
                    {
                      "label": "选项三",
                      "value": "3"
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "componentName": "Range",
          "library": "Next",
          "title": "区段选择器",
          "icon": "",
          "snippets": [
            {
              "title": "区段选择器",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_range.png",
              "schema": {
                "componentName": "Range",
                "props": {
                  "prefix": "next-",
                  "slider": "single",
                  "max": 100,
                  "step": 1,
                  "marksPosition": "above",
                  "hasTip": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Rating",
          "library": "Next",
          "title": "评分",
          "icon": "",
          "snippets": [
            {
              "title": "评分",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_rating.png",
              "schema": {
                "componentName": "Rating",
                "props": {
                  "prefix": "next-",
                  "count": 5,
                  "size": "medium"
                }
              }
            }
          ]
        },
        {
          "componentName": "Select",
          "library": "Next",
          "title": "选择器",
          "icon": "",
          "snippets": [
            {
              "title": "选择器",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_select.png",
              "schema": {
                "componentName": "Select",
                "props": {
                  "mode": "single",
                  "hasArrow": true,
                  "cacheValue": true,
                  "dataSource": [
                    {
                      "value": "1",
                      "label": "选项1"
                    },
                    {
                      "value": "2",
                      "label": "选项2"
                    },
                    {
                      "value": "3",
                      "label": "选项3"
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "componentName": "Slider",
          "library": "Next",
          "title": "图片轮播",
          "icon": "",
          "snippets": [
            {
              "title": "图片轮播",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_slider.png",
              "schema": {
                "componentName": "Slider",
                "props": {
                  "prefix": "next-",
                  "animation": "slide",
                  "arrows": true,
                  "arrowSize": "medium",
                  "arrowPosition": "inner",
                  "arrowDirection": "hoz",
                  "autoplaySpeed": 3000,
                  "dots": true,
                  "dotsDirection": "hoz",
                  "draggable": true,
                  "infinite": true,
                  "slide": "div",
                  "slideDirection": "hoz",
                  "slidesToShow": 1,
                  "slidesToScroll": 1,
                  "speed": 600,
                  "triggerType": "click",
                  "centerPadding": "50px",
                  "cssEase": "ease",
                  "edgeFriction": 0.35,
                  "swipe": true,
                  "touchMove": true,
                  "touchThreshold": 5,
                  "useCSS": true,
                  "waitForAnimate": true
                },
                "children": [
                  {
                    "componentName": "Image",
                    "props": {
                      "src": "https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png"
                    }
                  },
                  {
                    "componentName": "Image",
                    "props": {
                      "src": "https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg"
                    }
                  },
                  {
                    "componentName": "Image",
                    "props": {
                      "src": "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg"
                    }
                  },
                  {
                    "componentName": "Image",
                    "props": {
                      "src": "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "componentName": "Switch",
          "library": "Next",
          "title": "开关",
          "icon": "",
          "snippets": [
            {
              "title": "开关组件",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_switch.png",
              "schema": {
                "componentName": "Switch",
                "props": {
                  "prefix": "next-",
                  "size": "medium"
                }
              }
            }
          ]
        },
        {
          "componentName": "Tab",
          "library": "Next",
          "title": "选项卡",
          "icon": "",
          "snippets": [
            {
              "title": "普通型",
              "screenshot": "https://img.alicdn.com/tfs/TB1D0p2u.z1gK0jSZLeXXb9kVXa-112-64.png",
              "schema": {
                "componentName": "Tab",
                "props": {
                  "shape": "pure",
                  "size": "medium",
                  "excessMode": "slide"
                },
                "children": [
                  {
                    "componentName": "Tab.Item",
                    "props": {
                      "title": "标签项1",
                      "primaryKey": "tab-item-1",
                      "isAutoContainer": true
                    }
                  },
                  {
                    "componentName": "Tab.Item",
                    "props": {
                      "title": "标签项2",
                      "primaryKey": "tab-item-2",
                      "isAutoContainer": true
                    }
                  }
                ]
              }
            },
            {
              "title": "胶囊型",
              "screenshot": "https://img.alicdn.com/tfs/TB1C0pZuWL7gK0jSZFBXXXZZpXa-112-64.png",
              "schema": {
                "componentName": "Tab",
                "props": {
                  "shape": "capsule",
                  "size": "medium",
                  "excessMode": "slide"
                },
                "children": [
                  {
                    "componentName": "Tab.Item",
                    "props": {
                      "title": "标签项1",
                      "primaryKey": "tab-item-1",
                      "isAutoContainer": true
                    }
                  },
                  {
                    "componentName": "Tab.Item",
                    "props": {
                      "title": "标签项2",
                      "primaryKey": "tab-item-2",
                      "isAutoContainer": true
                    }
                  }
                ]
              }
            },
            {
              "title": "激活绑定",
              "screenshot": "https://img.alicdn.com/tfs/TB1C0pZuWL7gK0jSZFBXXXZZpXa-112-64.png",
              "schema": {
                "componentName": "Tab",
                "props": {
                  "shape": "capsule",
                  "size": "medium",
                  "excessMode": "slide",
                  "activeKey":""
                },
                "children": [
                  {
                    "componentName": "Tab.Item",
                    "props": {
                      "title": "标签项1",
                      "primaryKey": "tab-item-1",
                      "isAutoContainer": true
                    }
                  },
                  {
                    "componentName": "Tab.Item",
                    "props": {
                      "title": "标签项2",
                      "primaryKey": "tab-item-2",
                      "isAutoContainer": true
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "componentName": "Tag",
          "library": "Next",
          "title": "标签",
          "icon": "",
          "snippets": [
            {
              "title": "标签",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png",
              "schema": {
                "componentName": "Tag",
                "props": {
                  "prefix": "next-",
                  "type": "normal",
                  "size": "medium",
                  "animation": false,
                  "children": "Tag"
                }
              }
            },
            {
              "title": "可关闭标签",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png",
              "schema": {
                "componentName": "Tag.Closeable",
                "props": {
                  "prefix": "next-",
                  "closeArea": "tail",
                  "size": "medium",
                  "children": "Tag"
                }
              }
            },
            {
              "title": "可选中标签",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png",
              "schema": {
                "componentName": "Tag.Selectable",
                "props": {
                  "prefix": "next-",
                  "children": "Tag"
                }
              }
            }
          ]
        },
        {
          "componentName": "TimePicker",
          "library": "Next",
          "title": "时间选择框",
          "icon": "",
          "snippets": [
            {
              "title": "时间选择框",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_time-picker.png",
              "schema": {
                "componentName": "TimePicker",
                "props": {
                  "prefix": "next-",
                  "size": "medium",
                  "hasClear": true,
                  "format": "HH:mm:ss",
                  "popupAlign": "tl tl",
                  "popupTriggerType": "click"
                }
              }
            }
          ]
        },
        {
          "componentName": "Timeline",
          "library": "Next",
          "title": "时间轴",
          "icon": "",
          "snippets": [
            {
              "title": "时间轴",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_timeline.png",
              "schema": {
                "componentName": "Timeline",
                "props": {
                  "prefix": "next-",
                  "fold": [],
                  "animation": true
                },
                "children": [
                  {
                    "componentName": "Timeline.Item",
                    "props": {
                      "state": "process",
                      "title": "12344"
                    }
                  },
                  {
                    "componentName": "Timeline.Item",
                    "props": {
                      "title": "Ship"
                    }
                  },
                  {
                    "componentName": "Timeline.Item",
                    "props": {
                      "title": "Order"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "componentName": "Transfer",
          "library": "Next",
          "title": "穿梭框",
          "icon": "",
          "snippets": [
            {
              "title": "穿梭框",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_transfer.png",
              "schema": {
                "componentName": "Transfer",
                "props": {
                  "prefix": "next-",
                  "mode": "normal",
                  "notFoundContent": "Not Found"
                }
              }
            }
          ]
        },
        {
          "componentName": "TreeSelect",
          "library": "Next",
          "title": "树型选择控件",
          "icon": "",
          "snippets": [
            {
              "title": "树型选择控件",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tree-select.png",
              "schema": {
                "componentName": "TreeSelect",
                "props": {
                  "prefix": "next-",
                  "size": "medium",
                  "hasArrow": true,
                  "hasBorder": true,
                  "autoWidth": true,
                  "notFoundContent": "Not Found",
                  "treeCheckedStrategy": "parent"
                }
              }
            },
            {
              "title": "树形控件",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tree.png",
              "schema": {
                "componentName": "Tree",
                "props": {
                  "prefix": "next-",
                  "selectable": true,
                  "checkedStrategy": "all",
                  "autoExpandParent": true,
                  "animation": true,
                  "focusable": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Upload",
          "library": "Next",
          "title": "上传",
          "icon": "",
          "snippets": [
            {
              "title": "上传组件",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_upload.png",
              "schema": {
                "componentName": "Upload",
                "props": {
                  "prefix": "next-",
                  "closable": true,
                  "autoUpload": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Video",
          "library": "Next",
          "title": "视频",
          "icon": "",
          "snippets": [
            {
              "title": "视频",
              "screenshot": "https://img.alicdn.com/imgextra/i3/O1CN01KPVpSS1FaPsvoag2F_!!6000000000503-55-tps-200-200.svg",
              "schema": {
                "title": "视频",
                "componentName": "Video",
                "props": {
                  "src": "https://fusion.alicdn.com/images/page-1.mp4",
                  "controls": true,
                  "style": {
                    "width": "600px"
                  }
                }
              }
            }
          ]
        },
      
      ]
    },
 
    {
      "title": "Feedback 反馈",
      "icon": "",
      "children": []
    },
    {
      "title": "反馈",
      "icon": "",
      "children": [
        {
          "componentName": "Message",
          "library": "Next",
          "title": "提示",
          "icon": "",
          "snippets": [
            {
              "title": "提示",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_message.png",
              "schema": {
                "componentName": "Message",
                "props": {
                  "title": "Alert",
                  "type": "warning",
                  "shape": "inline",
                  "size": "medium",
                  "visible": true,
                  "animation": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Loading",
          "library": "Next",
          "title": "加载",
          "icon": "",
          "snippets": [
            {
              "title": "加载",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_loading.png",
              "schema": {
                "componentName": "Loading",
                "props": {
                  "color": "red",
                  "prefix": "next-",
                  "tipAlign": "bottom",
                  "visible": true,
                  "size": "large",
                  "inline": true
                }
              }
            }
          ]
        },
        {
          "componentName": "Progress",
          "library": "Next",
          "title": "进度指示器",
          "icon": "",
          "snippets": [
            {
              "title": "进度指示器",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_progress.png",
              "schema": {
                "componentName": "Progress",
                "props": {
                  "prefix": "next-",
                  "shape": "line",
                  "size": "medium",
                  "state": "normal",
                  "color": "blue",
                  "percent": 30
                }
              }
            }
          ]
        },
        {
          "componentName": "Message",
          "library": "Next",
          "title": "面包片",
          "icon": "",
          "snippets": [
            {
              "title": "面包片",
              "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_message.png",
              "schema": {
                "componentName": "Message",
                "props": {
                  "title": "Toast",
                  "type": "success",
                  "shape": "toast",
                  "size": "medium",
                  "visible": true,
                  "animation": true
                }
              }
            }
          ]
        }
      ]
    },
    {
      "title": "基础",
      "icon": "",
      "children": []
    },
    {
      "title": "常用图表(试验)",
      "icon": "",
      "children": [
        {
          "componentName": "ColumnChart",
          "library": "Next",
          "title": "柱状图",
          "icon": "",
          "snippets": [
            {
              "title": "柱状图",
              "componentName": "ColumnChart",
              "screenshot": "https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*C554SqAGfuMAAAAAAAAAAABkARQnAQ",
              "schema": {
                "title": "柱状图",
                "componentName": "ColumnChart",
                "props": {
                  "title": "基础柱状图",
                  "isMaterial": true,
                  "autoFit": true,
                  "padding": "auto",
                  "xField": "type",
                  "yField": "sales",
                  "meta": {
                    "type": {
                      "alias": "类别"
                    },
                    "sales": {
                      "alias": "销售额(万)"
                    }
                  },
                  "data": [
                    {
                      "type": "家具家电",
                      "sales": 38
                    },
                    {
                      "type": "粮油副食",
                      "sales": 52
                    },
                    {
                      "type": "生鲜水果",
                      "sales": 61
                    },
                    {
                      "type": "美容洗护",
                      "sales": 145
                    },
                    {
                      "type": "母婴用品",
                      "sales": 48
                    },
                    {
                      "type": "进口食品",
                      "sales": 38
                    },
                    {
                      "type": "食品饮料",
                      "sales": 38
                    },
                    {
                      "type": "家庭清洁",
                      "sales": 38
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "componentName": "LineChart",
          "library": "Next",
          "title": "折线图",
          "icon": "",
          "snippets": [
            {
              "title": "折线图",
              "componentName": "LineChart",
              "screenshot": "https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*YMGnQoh_jSAAAAAAAAAAAABkARQnAQ",
              "schema": {
                "title": "折线图",
                "componentName": "LineChart",
                "props": {
                  "title": "折线图标题",
                  "isMaterial": true,
                  "description": "折线图描述",
                  "xField": "year",
                  "yField": "value",
                  "renderer": "svg",
                  "data": [
                    {
                      "year": "1991",
                      "value": 3
                    },
                    {
                      "year": "1992",
                      "value": 4
                    },
                    {
                      "year": "1993",
                      "value": 3.5
                    },
                    {
                      "year": "1994",
                      "value": 5
                    },
                    {
                      "year": "1995",
                      "value": 4.9
                    },
                    {
                      "year": "1996",
                      "value": 6
                    },
                    {
                      "year": "1997",
                      "value": 7
                    },
                    {
                      "year": "1998",
                      "value": 9
                    },
                    {
                      "year": "1999",
                      "value": 13
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "componentName": "LiquidChart",
          "library": "Next",
          "title": "水位图",
          "icon": "",
          "snippets": [
            {
              "title": "水位图",
              "screenshot": "https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*DKvMTrrWdAQAAAAAAAAAAABkARQnAQ",
              "schema": {
                "title": "水位图",
                "category": "常用图表(试验)",
                "componentName": "LiquidChart",
                "props": {
                  "title": "水位图标题",
                  "description": "水位图描述",
                  "isMaterial": true,
                  "outline": {
                    "border": 2,
                    "distance": 6
                  },
                  "min": 0,
                  "max": 100,
                  "value": 49
                }
              }
            }
          ]
        },
        {
          "componentName": "PieChart",
          "library": "Next",
          "title": "饼图",
          "icon": "",
          "snippets": [
            {
              "title": "饼图",
              "componentName": "PieChart",
              "screenshot": "https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*93XzToUe1OQAAAAAAAAAAABkARQnAQ",
              "schema": {
                "title": "饼图",
                "componentName": "PieChart",
                "props": {
                  "isMaterial": true,
                  "title": {
                    "visible": true,
                    "text": "基础饼图"
                  },
                  "description": {
                    "visible": true,
                    "text": "基础饼图描述"
                  },
                  "meta": {
                    "type": {
                      "alias": "类别"
                    },
                    "sales": {
                      "alias": "销售额(万)"
                    }
                  },
                  "angleField": "value",
                  "colorField": "type",
                  "data": [
                    {
                      "type": "分类一",
                      "value": 27
                    },
                    {
                      "type": "分类二",
                      "value": 25
                    },
                    {
                      "type": "分类三",
                      "value": 18
                    },
                    {
                      "type": "分类四",
                      "value": 15
                    },
                    {
                      "type": "分类五",
                      "value": 10
                    },
                    {
                      "type": "其它",
                      "value": 5
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "title": "Others",
      "icon": "",
      "children": []
    },
    {
      "title": "null",
      "icon": "",
      "children": []
    }
  ]
}
