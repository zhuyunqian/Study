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

// let p1 = readFilePromise(filePath1,'utf-8')
// let p2 = readFilePromise(filePath2,'utf-8')
// let p3 = readFilePromise(filePath3,'utf-8')

async function func(){

    //内部错误捕捉
    try{
        let data1 = await readFilePromise(filePath1, "utf-8");  // 1. await（跟promise对象） 可直接获取数据(即获得reslove返回的值)  必须基于async写法
        let data2 = await readFilePromise(filePath2, "utf-8");  // 2. await为异步 ， 异步同步执行 异步1，异步2，异步3
        let data3 = await readFilePromise(filePath3, "utf-8");  // 3. await后跟一个基本数据类型，会对这个基本数据类型进行包装，成为一个promise对象
                                                         // await 123 ==== new Promise((resolve,reject)=>{resolve(123)})
        console.log(data1 +data2 +data3)
    
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("finally")
    }

}

//外部错误捕捉
func().catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('finally')
})

// 多个promise对象同时执行
// Promise.all([p1,p2,p3]).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     //一旦又一个报错，执行这里的方法
//     console.log(error)
// }).finally(()=>{
//     console.log(0)
// })

// Promise.race([p1,p2,p3]).then((data)=>{
//     // reace里的promise成功一个即可执行.then方法
//     console.log(data)
// })

// readFilePromise(filePath1).then((data)=>{
//     // 成功执行
//     str1+=data;
//     return readFilePromise(filePath2)
// }).catch((error)=>{
//     //异步失败执行
//     console.log(error)
// }).finally(()=>{
//     console.log('不管错误正确，都会执行')
// }).then((data)=>{
//     str1+=data;
//     return readFilePromise(filePath3);
// }).then((data)=>{
//     str1+=data;
//     console.log(str1);
// });