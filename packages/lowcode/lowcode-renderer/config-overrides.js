const webpack = require("webpack");
module.exports = function override(config, env) {
  // 打包的css/js资源都加上前缀
  config.output.publicPath = '/renderer'
  config.plugins.push(
    new webpack.DefinePlugin({
      VERSION_PLACEHOLDER: JSON.stringify("1.1.4"),
    })
  );
  return config;
};
