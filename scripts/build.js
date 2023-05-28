const path = require('path')
const fs = require('fs')
const dotEnv = require("dotenv");
 
const child_process = require('child_process')
const baseDir = path.resolve('.')
const outDir = path.resolve(baseDir,'./lc-out')
const envPath = path.resolve(baseDir,'scripts/env')
const outTar = path.resolve(baseDir,'./lc-out.tar.gz')
const designIndexPath = path.resolve(outDir,'./lowcode/lowcode-egg/app/view/index.nj')

const envConfig = dotEnv.parse(fs.readFileSync(path.resolve(baseDir,'scripts/env')))
// 填写目标服务器的ip或者域名
const TARGET_IP = "localhost"

child_process.execSync(`source ${envPath}`);

// 1、删除构建产物
child_process.execSync(`rm -rf ${outDir}`);
child_process.execSync(`rm -rf ${outTar}`);
child_process.execSync(`mkdir ${outDir}`);
child_process.execSync(`mkdir ${path.resolve(outDir,'./lowcode')}`);

// 2、复制到out文件夹
child_process.execSync(`cp -r ${path.resolve(baseDir,'./packages/lowcode-docker')} ${path.resolve(outDir,'./lowcode-docker')}`)






child_process.execSync(`rsync -av --exclude=node_modules --exclude=config/config.local.js   --exclude=logs  --exclude=run ${path.resolve(baseDir,'./packages/lowcode/lowcode-egg')} ${path.resolve(outDir,'./lowcode')}`)
child_process.execSync(`cp  ${path.resolve(baseDir,'./scripts/out-pkg.json')}  ${path.resolve(baseDir,'./lc-out/package.json')} `)

// .env文件和docker-compose.yml在一起
child_process.execSync(`cp -r ${path.resolve(baseDir,'./scripts/env')} ${path.resolve(outDir,'./lowcode-docker/.env')}`)
// 3、置换ip sed -i '' 's/a/A/' abc.txt 



// 4 修改design的配置

let str = fs.readFileSync(designIndexPath,'utf-8')

if(envConfig._LOWCODE_APP_NAME_) {
    str = str.replace(/统一搭建平台/g,envConfig._LOWCODE_APP_NAME_)
}

 


fs.writeFileSync(designIndexPath,str)
 
console.log('修改后的文件:',str)
console.log(envConfig)

 
// 4、压缩
child_process.execSync('tar -zcvf lc-out.tar.gz lc-out')