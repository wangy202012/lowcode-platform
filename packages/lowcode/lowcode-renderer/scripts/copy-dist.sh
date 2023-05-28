# 执行目录放在项目根目录下，不要放在scripts目录下
# 删除目标文件夹
rm -rf ../../lowcode-docker/static/renderer
# 创建目标文件夹
mkdir -p ../../lowcode-docker/static/renderer
# 复制
cp -r ./build/* ../../lowcode-docker/static/renderer
