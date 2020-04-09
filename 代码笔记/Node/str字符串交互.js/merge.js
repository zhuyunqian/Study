//合并方法:
function merge() {
    const readline = require('readline'); //导入模块	
    var rl3 = readline.createInterface({ //创建接口
        input: process.stdin,
        output: process.stdout
    });

    //开启监听,并对用户输入的数据进行传入数组的处理
    rl3.on("line", (mes3) => {
        var args = mes3.split(" ");
        var str = ""; //用来接收合并后的结果
        if (mes3 == ".exit") {
            process.exit();
        } else {

            var num = mes3.replace(/[^0-9a-z]+/ig, ""); //利用正则从输入的字符串中取到数字和字母

            //将数据合并
            for (var i = 0; i < num.length; i++) {
                if (i < num.length - 1) {
                    str += num[i] + args[1];
                } else {
                    str += num[i];
                }
            }
            console.log(str);
            console.log('-------------------------------------------')
            console.log('如果继续使用,请按格式输入.或者输入.exit退出');
        }
    });
}


module.exports = {
    merge
}



//没有完整测试,一定不完美
//最后修改:2019年12月26日
//作者:兰鹏飞