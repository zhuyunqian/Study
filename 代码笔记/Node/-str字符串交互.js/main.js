//交互式字符串处理

//任务要求
//1.字符串长度
//2.用指定字符分割字符串成数组
//3.通过指定字符合并数组为字符串
//4.字符串搜索
//5.截取字符串
//禁止使用系统内置函数,只能用判断循环完成.


//预处理:
//导入readline模块和fs文件读取模块
const readline = require('readline');
var fs = require('fs');

//导文件
var length = require('./length.js'); //字符长度
var cutApart = require('./cutApart.js'); //分割
var cutOut = require('./cutOut.js'); //截取
var merge = require('./merge.js'); //合并
var search = require('./search多字符搜索.js'); //搜索


//创建readline接口
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


//处理交互内容
//功能列表:
console.log('\n---------------');
console.log('1 字符串长度');
console.log('2 输入字符分割一个字符串为数组');
console.log('3 通过指定字符合并数组为字符串');
console.log('4 字符串搜索');
console.log('5 截取字符串')
console.log('---------------');
console.log('输入功能对应的数字以进入该功能,或者输入.exit退出程序\n')


//对输入输出进行处理:
rl.on("line", (mes) => {
	if (mes == ".exit") {
		process.exit();
	} else {
		var args = mes.split(" ");
		switch (args[0]) {
			case '1': //长度
				console.log('输入字符串:');
				console.log('-----------')
				rl.close();
				length.length();
				break;
			case '2': //分割
				console.log('必读:输入一个字符串,并指定一个字符,以空格隔开:')
				console.log('----------------------------------------------')
				rl.close();
				cutApart.cutApart();
				break;
			case '3': //合并
				console.log('必读:输入一个数组,并指定一个字符,以空格隔开:');
				console.log('-------------------------------------------')
				rl.close();
				merge.merge();
				break;
			case '4': //搜索
				console.log('必读:输入一个字符串,并指定一个字符串,以空格隔开:')
				console.log('-----------------------------------------------')
				rl.close();
				search.search();
				break;
			case '5': //截取
				console.log('必读:输入一个字符串,并指定两个下标数字值,以空格隔开:');
				console.log('--------------------------------------------------')
				rl.close();
				cutOut.cutOut();
				break;
			default:
				console.log('请输入1-5之间的数字,进入特定功能.')
		}
	}
});



//没有全面测试,一定不完美
//最后修改时间:2019年12月27日
//作者:兰鹏飞