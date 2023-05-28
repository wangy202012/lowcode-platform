# 当前工作目录为根目录
source ./scripts/env
cd ./packages/lowcode/lowcode-passport;
mvn clean package;
# docker tag lowcode-passport:0.0.1-SNAPSHOT robin2017/lowcode-passport:0.0.1-SNAPSHOT;
docker tag lowcode-passport:0.0.1-SNAPSHOT ${_LOWCODE_DOCKER_NAME_}/lowcode-passport:0.0.1-SNAPSHOT;
docker push ${_LOWCODE_DOCKER_NAME_}/lowcode-passport:0.0.1-SNAPSHOT;