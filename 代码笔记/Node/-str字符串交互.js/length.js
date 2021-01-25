//长度方法:
function length() {
    const readline = require('readline'); //导入模块
    var rl1 = readline.createInterface({ //创建接口
        input: process.stdin,
        output: process.stdout
    });


    //开始监听,并对用户输入的数据进行传入数组的处理.
    rl1.on("line", (mes1) => {
        for (var i = 0;; i++) {

            //判断长度
            if (mes1[i] == undefined) {
                console.log('你的字符串长度为:' + i);
                console.log('----------------------------------------')
                console.log('继续查找长度?请写字符串.或者.exit退出')
                break;
            } else if (mes1 == ".exit") {
                process.exit();
            }
        }
    });
}

//对外接口
module.exports = {
    length
}



//没有全面测试,一定不完美
//最后修改2019年12月25日
//作者:兰鹏飞
