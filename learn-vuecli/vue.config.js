// 这个配置修改后，需要重启服务
module.exports = {
  devServer: {
    proxy: {
      '/sugrec': {
        target: 'https://www.baidu.com',
        changeOrigin: true
      }
    }
  }
}
