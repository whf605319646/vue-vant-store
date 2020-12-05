module.exports = {
  baseUrl: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://yapi.baidu.com/mock/18999',
        // target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/img': {
        target: 'http://127.0.0.1:80',
        changeOrigin: true
      }
    }
  }
};
