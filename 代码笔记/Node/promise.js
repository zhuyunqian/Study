const fs = require("fs");
const path = require("path");
const util = require("util")

let filePath1 = path.join(__dirname, "testPro", "1.txt");
let filePath2 = path.join(__dirname, "testPro", "2.txt");
let filePath3 = path.join(__dirname, "testPro", "3.txt");
// util.promisify -- 返回一个promise对象 有限error优先，对象 （error,data）=>{}
let readFilePromise = util.promisify(fs.readFile)

// function readFilePromise(filePath){
//     return new Promise((resolve, reject)=>{

//         fs.readFile(filePath,"utf-8",(error1, data1)=>{
//             if(error1){
//                 //失败的时候做的事情
//                 reject(error1);
//             }
//             //请求成功 -- resolve
//             resolve(data1)
//         })
//     });
// }

let str1 = "";

readFilePromise(filePath1).then((data)=>{
    // 成功执行
    str1+=data;
    return readFilePromise(filePath2)
}).catch((error)=>{
    //异步失败执行
    console.log(error)
}).finally(()=>{
    console.log('不管错误正确，都会执行')
}).then((data)=>{
    str1+=data;
    return readFilePromise(filePath3);
}).then((data)=>{
    str1+=data;
    console.log(str1);
});