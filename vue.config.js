module.exports = {
  outputDir: './dist',
  assetsDir: './assets/',
  publicPath: './',
  indexPath: './index.html',
  devServer: {
    host: 'localhost', // 主机
    port: 8888, // 端口
    https: false, // 不启用https
    open: true, // 自动打开浏览器
    // hotOnly: true, // 热更新
  },
}
