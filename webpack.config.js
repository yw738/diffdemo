const path = require('path')

module.exports = {
    // 入口
    entry: './src/index.js',
    output: {
        // 虚拟打包路径
        publicPath: 'xuni',
        filename: 'bundle.js',
    },
    devServer: {
        port: 8080,
        // 静态资源文件夹
        contentBase: 'www'
    }
}