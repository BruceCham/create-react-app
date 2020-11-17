const {
  override,
  addPostcssPlugins,
  disableEsLint,
  addWebpackPlugin,
  addDecoratorsLegacy,
  overrideDevServer,
} = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const removeHtmlWebpackPlugin = () => {
  return (config) => {
    config.plugins = config.plugins.filter(
      p => p.constructor.name !== "HtmlWebpackPlugin"
    );
    return config;
  }
}
const addProxy = () => (config) => {
  config.proxy = {
      '/webapi/cicp/store': {
          target: 'http://dev-plat.xueersibook.com',
          changeOrigin: true,
          logLevel: 'error',
          pathRewrite: {
            '^/webapi/cicp/store': '',
          },
      },
  };
  // config.port = 3000;

  return config;
}

module.exports = {
  webpack: override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    // disable eslint in webpack
    disableEsLint(),

    // 提取公用 cdn
    // addWebpackExternals({
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    // }),

    // 替换默认 html 插件
    removeHtmlWebpackPlugin(),
    addWebpackPlugin(new HtmlWebpackPlugin(Object.assign(
      {}, {
        filename: 'index.html',
        title: 'create react app',
        inject: true,
        template: process.env.NODE_ENV === 'production' ? 'public/index.html' : 'public/dev.html'
      }, undefined
    ))),

    // px2rem
    addPostcssPlugins([require('postcss-pxtorem')({
      rootValue: 100,
      unitPrecision: 5,
      mediaQuery: false,
      minPixelValue: 0,
      propList: [
        '*background*', '*padding*', '*margin*',
        'letter-spacing', '*width', '*height',
        'left', 'right', 'top', 'bottom', 'font*',
        'border-radius',
      ],
    }),]),
  ),
  devServer: overrideDevServer(
      addProxy()
  )
}
