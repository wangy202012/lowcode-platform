# 执行目录放在项目根目录下，不要放在scripts目录下
# 主要复制三个文件


# 删除目标文件 render-view.js / render-view.css / view.js / view.css / meta.js
TARGET_PATH=../../lowcode-docker/static/lowcode-base-components
rm -rf $TARGET_PATH
# 创建目标文件夹
mkdir -p $TARGET_PATH
mkdir -p $TARGET_PATH/render
# 复制
cp -r ./build/lowcode/meta.js $TARGET_PATH
cp -r ./build/lowcode/view.js $TARGET_PATH
cp -r ./build/lowcode/view.css $TARGET_PATH

cp -r ./build/lowcode/render/default/view.js $TARGET_PATH/render/
cp -r ./build/lowcode/render/default/view.css $TARGET_PATH/render/
