const { override, addPostcssPlugins, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
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
  (config, env) => {
    return config;
  })
