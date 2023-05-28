# docker相关

## es数据
### 创建索引
```
curl -XPUT http://aliyun:19200/application_content
```

### 创建文档
```
curl -XPUT http://aliyun:19200/application_content/_doc/100200   -H "Content-Type:application/json" -d '{"content":"小米手机"}'
```
### 查看文档

```
curl -GET http://aliyun:19200/application_content/_doc/100200
```

## 前端产物复制

```
scp -i ~/.ssh/tencent_id_rsa -r /Users/luobin3/workspace/githubSpace/lowcode-workspace/demos/lowcode/lowcode-design/build/* root@43.137.18.227:/root/lowcode-workspace/demos/lowcode-docker/static/design


```


## springboot构建
```
mvn package
```
![picture 1](../../images/96a44cc029712ba73041da2b1767d01d6f1820b8ce8b33267b2b02f3b45dfb17.png)  


