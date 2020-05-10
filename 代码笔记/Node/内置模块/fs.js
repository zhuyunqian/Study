/*
fs模块 -- 作用文件操作

同步读取 -- readFileSync -- 文件读取完毕，才会执行后面的代码 -- 排队机制，同步阻塞
读取出计算机认识的buffer格式 
-- toString() 转化为字符串
-- fs.readFileSync(filePath,'utf-8')  ，注明要求utf-8格式


异步读取 -- readFile -- 文件读取完毕，有个回调函数执行
fs.readFile(filePath,'utf-8',(error,data)=>{})
error -- 读取成功为null 否则为object
data -- 读取成功为读取信息data 否则为undefined
*/

// 同步读取 -- readFileSync
const fs = require('fs');
const path = require('path');
// let filePath = path.join(__dirname,'readfs.js')
let filePath = path.join(__dirname,'readfs.txt')

// let readmes = fs.readFileSync(filePath,'utf-8')
// console.log(readmes)
// console.log('----------')
// console.log(readmes.toString())


// 异步读取 -- readFile
fs.readFile(filePath,'utf-8',(error,data)=>{
    // 重点回调函数的执行
    if(error){
        console.log(error)
        return;
    }
    console.log(data)
})

//  异步写入 -- fs.writeFile（写入路径，'写入内容'，'写入格式'，(error,data)=>{}）
fs.writeFile(filePath,'重新写入文件123','utf-8',(error,data)=>{
	//console.log(error)
	if(error){
		console.log(error)
		return
	}
	console.log('data'+'写完啦')
})
console.log('end') //异步-所以先执行end
