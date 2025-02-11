const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // ...
  app.use(
    "/myapi",
    createProxyMiddleware({
      target: "http://172.19.80.10:31003/mediinfo-vela-zhikong",
      changeOrigin: true,
      pathRewrite: {
        "^/myapi": "",
      },
    })
  );
};

/**
 * HTTP 代理配置
 * 详见 https://cli.vuejs.org/zh/config/#devserver-proxy
 * @type {import('webpack-dev-server').ProxyConfigMap}
 */
const proxyOptions = {
  // 代理目标
  target: "http://172.19.80.10:31003",
  // target: 'http://172.16.114.208:46094',
  // 修改请求头的 Origin 为 target 值
  changeOrigin: true,
  pathRewrite: {},
};
