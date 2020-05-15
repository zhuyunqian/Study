/*

读取文件

写入文件


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