FROM node:14.21.3
# vue项目在容器中的目录
WORKDIR /app
# 项目文件挂载过来
COPY package.json /app/package.json
RUN npm install
CMD ["npm","run","build"]