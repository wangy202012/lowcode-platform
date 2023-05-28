"use strict";
const Controller = require("egg").Controller;
const fs = require("fs");
const child_process = require("child_process");
const axios = require("axios");

const getTargetPath = (hostname) => {
  return hostname === "localhost"
    ? // 开发时，本地电脑路径
      "/Users/luobin3/_nginx_local_"
    : // 部署时，容器中路径
      "/root/_nginx_local_";
};
const userlist = [
  {
    id: "1",
    name: "张三",
  },
  {
    id: "2",
    name: "李四",
  },
  {
    id: "3",
    name: "王五",
  },
];

const cheerio = require("cheerio");

const getVersionUtil = (pkgName) => {
  return axios
    .get(`https://www.npmjs.com/package/${pkgName}?activeTab=versions`)
    .then((rst) => {
      const str = rst.data;
      const $ = cheerio.load(str);
      const ul = $("#tabpanel-versions>div>ul")[1];
      const children = ul.children.slice(1);
      return children.map((item) => item.children[0].attribs.title);
    });
};

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const localBaseDesignUrl = ctx.request.headers._lowcode_base_design_;
    const localBasePkgUrl = ctx.request.headers._lowcode_base_pkg_;
    const hostname = app.config.HOST;
    // 本地开发时从headers中获取

    ctx.body = await ctx.renderView("index.nj", {
      hostname,
      baseDesignUrl: localBaseDesignUrl || ctx.app.config._lowcode_base_design_,
      basePkgUrl: localBasePkgUrl || ctx.app.config._lowcode_base_pkg_,
    });
  }

  async list() {
    const { ctx } = this;
    const body = ctx.request.body;
    console.log("post request body:", body);
    ctx.body = {
      code: 200,
      data: [
        {
          id: "1",
          name: "张三",
        },
      ],
      msg: "操作成功",
    };
  }

  async uploadFile() {
    const { params, request } = this.ctx;
    // @ts-ignore
    const type = params.type || "public";
    // 获取文件(第一个)
    const file = request.files[0];
    const { filepath,filename } = file;
    const pos = filepath.lastIndexOf("/");
    const newFilename = filepath.substring(pos + 1);
    child_process.execSync(
      `cp ${filepath} ${getTargetPath(this.ctx.request.hostname)}/`
    );
    this.ctx.body = {
      success: true,
      data: {
        name:filename,
        path:`/files/${newFilename}`
      },
    };
  }

  // http://localhost:7001/api/getLowcodeAntdVersion/rb-lowcode-materials
  async getVersion() {
    const { ctx } = this;
    const { pkgName } = ctx.params;
    const list = await getVersionUtil(pkgName);
    ctx.body = {
      code: 200,
      data: list,
      msg: "操作成功",
    };
  }

  async add() {
    const { ctx } = this;
    const body = ctx.request.body;
    console.log("post request body:", body);
    ctx.body = {
      code: 200,
      data: [
        {
          id: "1",
          name: "张三",
        },
      ],
      msg: "操作成功",
    };
  }
  async findByParamId() {
    const { ctx } = this;
    const { userId } = ctx.params;
    const result = userlist.find((v) => v.id === userId);
    ctx.body = {
      code: 200,
      data: result,
      msg: "操作成功",
    };
  }

  async findByQueryId() {
    const { ctx } = this;
    const { userId } = ctx.query;
    const result = userlist.find((v) => v.id === userId);
    ctx.body = {
      code: 200,
      data: result,
      msg: "操作成功",
    };
  }

  async getCode() {
    const { ctx } = this;
    ctx.status = 500;
    ctx.body = {
      code: 200,
      data: true,
      msg: "操作成功",
    };
  }

  async testCors() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: "操作成功",
    };
  }

  async testMysql() {
    const { ctx } = this;
    const rst = await ctx.app.mysql.query("select * from hello_egg");
    ctx.body = {
      code: 200,
      data: rst,
      msg: "操作成功",
    };
  }

  async testPost() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: "post操作成功",
    };
  }

  async mockTableData() {
    const { ctx } = this;
    const { date } = ctx.query;

    console.log("post request date:", date);
    if (date) {
      mockTableData1.forEach((item) => (item.address = date));
    }

    ctx.body = {
      code: 200,
      data: mockTableData1,
      msg: "操作成功",
    };
  }
}

const mockTableData1 = [
  {
    id: "1",
    name: "aaa",
    age: 30,
    address: "西湖区湖底公园1号",
  },
  {
    id: "2",
    name: "bbb",
    age: 28,
    address: "滨江区网商路699号",
  },
];

module.exports = HomeController;
