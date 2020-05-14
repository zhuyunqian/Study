/*

批量修改文件名

1- 获取到需要批量的文件名
2- 进行判断，是否符合需求
3- 遍历修改

*/
const fs = require('fs');

let changename = fs.readdirSync(__dirname);

changename.forEach(item =>{
    if(item.endsWith('.js')){
        fs.renameSync(item,`[addname]${item}`);
    }
})