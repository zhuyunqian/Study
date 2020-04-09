//搜索:
function search() {
	const readline = require('readline');
	var rl4 = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl4.on("line", (mes4) => {
		var args = mes4.split(" ");
		var arr = [];
		var sum = 0;
		if (mes4 == ".exit") {
			process.exit();
		} else { //每达到第二次输入内容的长度,重置数组,比较内容相等否
			for (let i = 0; i < args[0].length; i++) { //i控制第一次输入的每一个字符
				for (let j = 0; j < args[1].length; j++) {
					arr += args[0][i + j];
					if (arr.length == args[1].length && arr == args[1]) {
						sum += 1;
						arr = [];
					} else if (arr.length == args[1].length && arr != args[1]) {
						arr = [];
					}
				}
			}
		}

		if (sum != 0) {
			console.log('你输入的字符串出现了:' + sum + '次.')
		} else {
			console.log('没有你想要的字符串.')
		}
		console.log('-------------------------------------------');
		console.log('如果继续使用,请按格式输入.或者输入.exit退出.');


	});
}



module.exports = {
	search
}


//并没有全面测试,对aaaaaaaa aa搜索有问题
//对内存消耗很大,很多没有用的值,因时间原因,暂且搁置
//最后修改时间:2019年12月26日
//作者: 兰鹏飞