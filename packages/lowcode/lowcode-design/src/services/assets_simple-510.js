export default {
  "packages": [
    {
      "package": "moment",
      "version": "2.24.0",
      "urls": [
        "https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"
      ],
      "library": "moment"
    },
    {
      "package": "lodash",
      "library": "_",
      "urls": [
        "https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"
      ]
    },
    {
      "title": "fusion组件库",
      "package": "@alifd/next",
      "version": "1.26.4",
      "urls": [
        "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next.min.css",
        "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next-with-locales.min.js"
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
      "package": "@alilc/lowcode-materials",
      "version": "1.0.7",
      "library": "AlilcLowcodeMaterials",
      "urls": [
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.7/dist/AlilcLowcodeMaterials.js",
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.7/dist/AlilcLowcodeMaterials.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.7/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.7/build/lowcode/view.css"
      ]
    },
    {
      "package": "@alifd/layout",
      "version": "2.0.7",
      "library": "AlifdLayout",
      "urls": [
        "https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/dist/AlifdLayout.js",
        "https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/dist/AlifdLayout.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/view.css"
      ]
    },
    {
      "package": "@alifd/fusion-ui",
      "version": "2.0.0",
      "library": "AlifdFusionUi",
      "urls": [
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.0/dist/AlifdFusionUi.js",
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.0/dist/AlifdFusionUi.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.0/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.0/build/lowcode/view.css"
      ]
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
  ],
  "components": [
    {
      "exportName": "AlilcLowcodeMaterialsMeta",
      "npm": {
        "package": "@alilc/lowcode-materials"
      },
      "url": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.7/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.7/build/lowcode/meta.js",
        "design": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.7/build/lowcode/meta.design.js"
      }
    },
    {
      "exportName": "AlifdLayoutMeta",
      "npm": {
        "package": "@alifd/layout",
        "version": "2.0.7"
      },
      "url": "https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alifd/layout@2.0.7/build/lowcode/meta.js"
      }
    },
    {
      "exportName": "AlifdFusionUiMeta",
      "npm": {
        "package": "@alifd/fusion-ui"
      },
      "url": "https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.0/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.0/build/lowcode/meta.js",
        "design": "https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.0/build/lowcode/meta.design.js"
      }
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
  ],
  "sort": {
    "groupList": [
      "精选组件",
      "原子组件",
      "低代码组件"
    ],
    "categoryList": [
      "基础元素",
      "布局容器类",
      "表格类",
      "表单详情类",
      "帮助类",
      "对话框类",
      "业务类",
      "通用",
      "引导",
      "信息输入",
      "信息展示",
      "信息反馈"
    ]
  },
  "groupList": [
    "精选组件",
    "原子组件",
    "低代码组件"
  ],
  "ignoreComponents": {}
}
