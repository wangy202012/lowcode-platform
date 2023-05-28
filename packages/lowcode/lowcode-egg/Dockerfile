FROM node:14.21.3
# egg项目在容器中的目录
WORKDIR /workspace
# 镜像中只保留node_modules，作为缓存;项目文件则挂载
COPY package.json /workspace/package.json
# RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
CMD ["npm", "run","dev"]