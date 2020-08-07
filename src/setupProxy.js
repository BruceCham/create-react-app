const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: "http://localhost:5000/",
    })
  );
  app.use(
    proxy("/webapi/cicp/store", {
      target: "http://test-plat.xueersibook.com",
      pathRewrite: {
        "^/webapi/cicp/store": "",
      },
      changeOrigin: true,
      logLevel: "error",
    })
  );
};
