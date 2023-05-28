# 设置环境变量，在根目录下执行
source ./.env
if [ ! -d "${_LOWCODE_DATA_ROOT_}/es_data" ]; then
    mkdir -p ${_LOWCODE_DATA_ROOT_}/es_data
    chmod 777 ${_LOWCODE_DATA_ROOT_}/es_data
fi


if [ ! -d "${_LOWCODE_DATA_ROOT_}/mysql_data" ]; then
    mkdir -p ${_LOWCODE_DATA_ROOT_}/mysql_data
    chmod 777 ${_LOWCODE_DATA_ROOT_}/mysql_data
fi

if [ ! -d "${_LOWCODE_DATA_ROOT_}/files" ]; then
    mkdir -p ${_LOWCODE_DATA_ROOT_}/files
    chmod 777 ${_LOWCODE_DATA_ROOT_}/files
fi