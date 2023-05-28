// 使用简化版本，1秒内design页面渲染完成，不需要浏览器插件
export default {
  packages: [
    {
      package: 'moment',
      version: '2.24.0',
      urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
      library: 'moment',
    },
    {
      package: 'lodash',
      library: '_',
      urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
    },
    {
      package: 'iconfont-icons',
      urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
    },
    {
      package: '@ant-design/icons',
      version: '4.7.0',
      urls: ['//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js'],
      library: 'icons',
    },
    {
      package: 'antd',
      version: '4.19.5',
      urls: [
        '//g.alicdn.com/code/lib/antd/4.19.4/antd.min.js',
        '//g.alicdn.com/code/lib/antd/4.19.4/antd.min.css',
      ],
      library: 'antd',
    },
    {
      title: 'fusion组件库',
      package: '@alifd/next',
      version: '1.24.14',
      urls: [
        'https://g.alicdn.com/code/lib/alifd__next/1.24.14/next.min.css',
        'https://g.alicdn.com/code/lib/alifd__next/1.24.14/next-with-locales.min.js',
      ],
      library: 'Next',
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

    // {
    //   "package": "@alilc/antd-lowcode-materials",
    //   "version": "1.2.1",
    //   "library": "AntdLowcode",
    //   "urls": [
    //     "/antd-lowcode-materials/render/view.js",
    //     "/antd-lowcode-materials/render/view.css"
    //   ],
    //   "editUrls": [
    //     "/antd-lowcode-materials/view.js",
    //     "/antd-lowcode-materials/view.css"
    //   ],
    //   "advancedUrls": {
    //     "default": [
    //       "/antd-lowcode-materials/render/view.js",
    //       "/antd-lowcode-materials/render/view.css"
    //     ]
    //   },
    //   "advancedEditUrls": {}
    // },
    {
      "package": "@alifd/fusion-ui",
      "version": "2.0.2",
      "library": "AlifdFusionUi",
      "urls": [
        "/fusion-ui/render/view.js",
        "/fusion-ui/render/view.css"
      ],
      "editUrls": [
        "/fusion-ui/view.js",
        "/fusion-ui/view.css"
      ],
      "advancedUrls": {
        "default": [
          "/fusion-ui/render/view.js",
          "/fusion-ui/render/view.css"
        ]
      },
      "advancedEditUrls": {}
    },
    {
      package: '@alilc/lowcode-materials',
      version: '1.1.0',
      library: 'AlilcLowcodeMaterials',
      urls: [
        '/fusion-lowcode-materials/render/view.js',
        '/fusion-lowcode-materials/render/view.css',
      ],
      editUrls: [
        '/fusion-lowcode-materials/view.js',
        '/fusion-lowcode-materials/view.css',
      ],
      advancedUrls: {
        default:[
          '/fusion-lowcode-materials/render/view.js',
          '/fusion-lowcode-materials/render/view.css',
        ],
      },
      advancedEditUrls: {},
    },
    // 自定义的组件库
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
      package: 'lowcode-chart-components',
      version: '1.0.0',
      library: 'ChartComps',
      urls: [
        '/lowcode-chart-components/render/view.js',
        '/lowcode-chart-components/render/view.css',
      ],
      editUrls: ['/lowcode-chart-components/view.js', '/lowcode-chart-components/view.css'],
      advancedUrls: {
        default: [
          '/lowcode-chart-components/render/view.js',
          '/lowcode-chart-components/render/view.css',
        ],
      },
      advancedEditUrls: {},
    },
  ],
  components: [
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
    // {
    //   "exportName": "AlilcAntdLowcodeMaterialsMeta",
    //   "npm": {
    //     "package": "@alilc/antd-lowcode-materials",
    //     "version": "1.2.1"
    //   },
    //   "url": "/antd-lowcode-materials/meta.js",
    //   "urls": {
    //     "default":  "/antd-lowcode-materials/meta.js",
    //   },
    //   "advancedUrls": {
    //     "default": [
    //       "/antd-lowcode-materials/meta.js",
    //     ]
    //   }
    // },
    {
      exportName: 'AlilcLowcodeMaterialsMeta',
      npm: {
        package: '@alilc/lowcode-materials',
        version: '1.1.0',
      },
      url: '/fusion-lowcode-materials/meta.js',
      urls: {
        default:
          '/fusion-lowcode-materials/meta.js',
        design:
          '/fusion-lowcode-materials/meta.design.js',
      },
      advancedUrls: {
        default: [
          '/fusion-lowcode-materials/meta.js',
        ],
        design: [
          '/fusion-lowcode-materials/meta.design.js',
        ],
      },
    },
    {
      "exportName": "AlifdFusionUiMeta",
      "npm": {
        "package": "@alifd/fusion-ui",
        "version": "2.0.2"
      },
      "url": "/fusion-ui/meta.js",
      "urls": {
        "default":"/fusion-ui/meta.js",
        "design": "/fusion-ui/meta.design.js"
      },
      "advancedUrls": {
        "default": [
          "/fusion-ui/meta.js",
        ],
        "design": [
          "/fusion-ui/meta.design.js"
        ]
      }
    },
    // 自定义的组件库
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
    {
      exportName: 'LowcodeChartComponentsMeta',
      npm: {
        package: 'lowcode-chart-components',
        version: '1.0.0',
      },
      url: '/lowcode-chart-components/meta.js',
      urls: {
        default: '/lowcode-chart-components/meta.js',
      },
      advancedUrls: {
        default: ['/lowcode-chart-components/meta.js'],
      },
    },
  ],
  sort: {
    groupList: ['精选组件', '原子组件'],
    categoryList: ['通用', '导航', '信息输入', '信息展示', '信息反馈'],
  },
  groupList: ['精选组件', '原子组件'],
  ignoreComponents: {},
};
