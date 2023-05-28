import Hello from "../pages/hello";
import App from "../pages/app";
import Mocks from "../pages/mocks";
import Design from '../pages/design'
import Upload from '../pages/upload'
import Logs from '../pages/logs'
import Logs2 from '../pages/logs/index2'

export default [
  { Component: Hello, path: "/", label: "欢迎页" },
  { Component: App, path: "/app", label: "应用列表" },
  { Component: Upload, path: "/upload", label: "资源上传"  },
  { Component: Mocks, path: "/mocks", label: "Mock数据"  },
  // { Component: Logs, path: "/logs", label: "日志记录"  },
  { Component: Logs2, path: "/logs", label: "日志记录"  },
  { Component: Design, path: "/design", label: "应用编排",hidden:true },
];
