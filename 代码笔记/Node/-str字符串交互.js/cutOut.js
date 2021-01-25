//截取
function cutOut() {
    const readline = require('readline');
    var rl5 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl5.on("line", (mes5) => {
        var args = mes5.split(" ");
        var newarr = "";
        var l = args[0].length; //后续使用 l 作为第一个字符串的长度
        if (mes5 == ".exit") {
            process.exit();

            //如果不为数字或者小于等于零,或者大于该字符串长度,给出提示
        } else if (args[1] > l || args[2] > l || args[1] <= 0 || args[2] <= 0) {
            console.log('你输入的数字超限.')
        } else if (isNaN(args[1]) || isNaN(args[2])) {
            console.log('请输入数字');
        } else {

            //格式正确,进入数据处理
            for (let i = args[1]; i < args[2] - 1; i++) {
                newarr += args[0][i];
            }
            console.log('截取的内容是:' + newarr + '\n' + '输入.exit退出');
        }

    });
}



//接口
module.exports = {
    cutOut
}



//没有完整测试,一定不完美
//最后修改时间:2019年12月26日
//作者:兰鹏飞