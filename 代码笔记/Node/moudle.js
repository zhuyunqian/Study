// 模块化管理
const path = require ('path');
const fs = require ('fs');

console.log(__dirname)
console.log(__filename)
let name = path.dirname(__filename)
console.log(name)

let pathname = path.basename(__filename)
console.log(pathname)

// 同步读取文件
let pathDir = path.join(__dirname, pathname);
// console.log(pathDir)
// console.log(123)
// let txt = fs.readFileSync(pathDir, "utf-8");
// console.log(txt)

// 异步读取文件
fs.readFile(pathDir,"utf-8",(error,data)=>{
    if(error){
        console.log(error)
        return;
    }
    if(data){
        console.log(0);
        console.log(data)
        return
    }
})