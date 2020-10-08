const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5001/entid-9c711/us-central1/server',
      changeOrigin: false,
    })
  );
};
