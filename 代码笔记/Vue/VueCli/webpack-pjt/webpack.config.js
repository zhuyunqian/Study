/*
优化，如果多个需要运行脚本，需要优化，进行专门的文件，用来配置脚本

webpack.config.js -- webpack配置的地方

独立的webpack脚本配置文件完成，需要修改脚本package.json脚本
"start":"webpack --config webpack.config.js"

 */


const path = require('path');

module.exports = {
    //整个项目的入口文件  --  entry
  entry: path.join(__dirname, './index.js'),
  //输出文件对象
  output: {
      //输出文件路径
    path: path.join(__dirname, './dist'),
    //输出的文件名称
    filename: 'bundle.js'
  }
}