const {
    removeModuleScopePlugin,
    override,
    babelInclude,
    addWebpackAlias,
    addBundleVisualizer,
  } = require('customize-cra');
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  
  function keepHtmlComments() {
    return (config) => {
      config.plugins.forEach((plugin) => {
        if (plugin instanceof HtmlWebpackPlugin) {
          plugin.options.minify.removeComments = false;
          plugin.options.version = process.env.BUILD_VERSION;
          plugin.options.date = new Date().toISOString();
        }
      });
  
      return config;
    };
  }
  
  module.exports = override(
    removeModuleScopePlugin(),
    babelInclude([path.resolve('src'), path.resolve('shared')]),
    addWebpackAlias({ shared: path.resolve('shared') }),
    addBundleVisualizer({}, true),
    keepHtmlComments()
  );
  