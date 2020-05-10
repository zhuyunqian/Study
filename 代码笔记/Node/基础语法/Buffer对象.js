/*
buf1 = 新的buffer对象，输入buffer 96 97 98

console.log(得出61,62,63)

要输出为计算机认识的语言  97等为16进制，得出61  6*16+1

这里计算机通过高低电来分析出自己用户想要展示的内容 高1 低0
所以计算机又有了 2进制  10进制 16进制等

*/

//创建buffer对象  Buffer.from
let buf1 =  Buffer.from([0,1,2])
console.log(buf1)

// 转化buffer对象为字符串形式  .toString()
let buf2 =  Buffer.from([99,97,98])
console.log(buf2)
console.log(buf2.toString()) //转换成字符串形式，即是 ab

let buf3 = Buffer.from("nodejs123")
console.log(buf3)

// 创建指定字符长度的buffter对象 Buffer.alloc
let buf4 = Buffer.alloc(10); //创建一个可以存储10个字符的buffer对象
console.log(buf4)
buf4.write('agc'); //写入3个字符，其余为00空
console.log(buf4) 