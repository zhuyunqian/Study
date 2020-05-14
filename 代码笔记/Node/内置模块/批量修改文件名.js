/*

批量修改文件名

1- 获取到需要批量的文件名
2- 进行判断，是否符合需求
3- 遍历修改

*/
const fs = require('fs');

let addname = "[addname]";

let changename = fs.readdirSync(__dirname);

changename.forEach(item =>{
    if(item.endsWith('.js')){
        fs.renameSync(item,`[addname]${item}`);
        // 截取字符串 - 从添加的名字的长度开始0-6 就是7
        fs.renameSync(item,item.substring(addname.length))
    }
})