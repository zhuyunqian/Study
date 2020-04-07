const readline = require('readline');

//构造interface方法
const rl = readline.createInterface({

    //每一个interface构造方法都有可读流和可写流
    input:process.stdin,  //可读流
    output:process.stdout //可写流

})


//监听line事件，获取process.stdin的逐行可读流
rl.on('line',(input)=>{

    console.log(`${input}`)

})
