// 引入模块一般在最顶部
const path = require('path');

// 当前文件的绝对路径，不包括文件名
console.log(__dirname)
// 当前文件的绝对路径，包括文件名
console.log(__filename)

// 获取指定文件后缀名（扩展名 ）
let extname = path.extname(__filename);  // .js
console.log(extname)

// 获取指定文件名字
let basename = path.basename(__filename);  // path.js
console.log(basename)

// 获取指定文件路径
let dirname = path.dirname(__filename);  // path.js
console.log(dirname)

// 获取指定文件相关信息以上 -- 获取到一个对象
let parse = path.parse(__filename);  // path.js
console.log(parse)

let pathAdd = path.join(__dirname,'path.js')
console.log(pathAdd);


