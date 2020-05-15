/*

读取文件

写入文件

这里方法为异步，需要写入内部，多个写入，则为回调地狱
操作之间是存在依赖性的，上一步依赖下一步的成功执行。但是操作又是通过异步api完成，则我们只能在回调函数里面编写，那么这个时候就会出现回调嵌套回调

通过promise解决

同步 sync
异步 async

*/
const fs = require('fs');
const path = require('path');

let feilsname1 = path.join(__dirname,'files','1.txt');
let feilsname2 = path.join(__dirname,'files','2.txt')
let feilsname3 = path.join(__dirname,'files','3.txt')
let feilsname4 = path.join(__dirname,'files','data.txt');

fs.readFile(feilsname1,(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    let name1 = data;

    fs.readFile(feilsname2,(error,data)=>{
        if(error){
            console.log(error);
            return;
        }
        let name2 = data;
        
        fs.readFile(feilsname3,(error,data)=>{
            if(error){
                console.log(error);
                return;
            }
            let name3 = data;
        
            let str = name1+name2+name3;
            //console.log(str)

            fs.writeFile(feilsname4,str,'utf-8',(error,data)=>{
                if(error){
                    console.log(error)
                    return
                }
                // 写入成功，data为undefined
                console.log(data)
            })
            
        })
        
    })
    
})