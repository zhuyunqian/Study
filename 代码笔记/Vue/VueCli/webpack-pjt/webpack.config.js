/*
优化，如果多个需要运行脚本，需要优化，进行专门的文件，用来配置脚本

webpack.config.js -- webpack配置的地方

独立的webpack脚本配置文件完成，需要修改脚本package.json脚本
"start":"webpack --config webpack.config.js"

 */

/*
HtmlWebpackPlugin
优化，路径引入，重新生成模板引入热更新的打包js文件，引入到index.html
引入
使用

*/


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //整个项目的入口文件  --  entry
  entry: path.join(__dirname, './index.js'),
  //输出文件对象
  output: {
      //输出文件路径
    path: path.join(__dirname, './dist'),
    //输出的文件名称
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        //路径加入index.html
      template: path.join(__dirname, './index.html'),  //生成模板
      //最终生成文件
      filename: 'index.html'
    })
  ],
  //其他模块都引入这个module内
  module: {
      //规则
    rules: [{
        //后缀为.css的所有文件  -- 正则
      test: /.css$/,
      //使用模块/依赖 - 引入路径 ， css处理模块
      use: ['style-loader', 'css-loader']

      //css-loader - webpack把.css文件当成是模块去处理
      //style-loader - 把js中的引入的css文件引入html文件
      //处理顺序 【】 - 从右往左
    }]
  }
}