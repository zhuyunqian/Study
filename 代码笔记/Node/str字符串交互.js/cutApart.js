//分割方法:
function cutApart() {
	const readline = require('readline'); //导入模块
	var rl2 = readline.createInterface({ //创建接口
		input: process.stdin,
		output: process.stdout
	});

	//开启监听,并对用户输入的数据进行传入数组的处理
	rl2.on("line", (mes2) => {
		var newarr = []; //声明一个新数组,用来接收分割后的值
		var args = mes2.split(" ");
		var str = "";
		var tmp = 0; //用来记录指定字符在指定字符串中出现的次数,如果为0,                               则没有出现,给出提示
		var l = args[0].length;
		if (mes2 == ".exit") {
			process.exit();
		} else {

			//将数据分割

			for (let i = 0; i < l; i++) {
				if (args[0][i] != args[1]) {
					str += args[0][i];
					if (i == l - 1) {
						newarr[newarr.length] = str;
					}
				} else {
					newarr[newarr.length] = str;
					str = "";
					tmp += 1;
				}
			}

			if (tmp != 0) {
				console.log(newarr);
				//如果tmp=0,说明没有进行分割,给出提示
			} else {
				console.log('你输入的字符不在字符串里.')
			}
			console.log('-------------------------------------------')
			console.log('如果继续使用,请按格式输入.或者输入.exit退出.');
		}
	});
}




//对外接口
module.exports = {
	cutApart
}



//没有完整测试,一定不完美
//最后修改2019年12月27日
//作者:兰鹏飞