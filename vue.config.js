// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   {
//     test: /\.(mp4)(\?.*)?$/,
//     loader: 'file-loader',
//     options: { name: urlHash.parse('video/[name].[ext]'), limit: 10000 },
//   }, ```
// })
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 处理 MP4 文件
    config.module
      .rule('mp4')
      .test(/\.(mp4)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'video/[name].[ext]',
        limit: 10000
      })
      .end()
  }
})
