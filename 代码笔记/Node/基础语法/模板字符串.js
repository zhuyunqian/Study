var userInfo = {
    id: 1,
    name: 'andy',
    email: 'gogery@163.com'
}

// 需求：希望把对象拼接为字符串： the userId is xxx, my name is xxx, my email is xxx;

/*var tmpl = 'the userId is '
    + userInfo.id + ', my name is '
    + userInfo.name + ', my email is '
    + userInfo.email;

console.log(tmpl);*/


var es5tpl = 'the userId is xxx, my name is xxx, my email is xxx';


// es6 提供一个语法表示一个字符串，使用的标识符是 反引号；
// 以前定义字符串使用的： '' ""
// 1. 允许换行 2. 允许在模板字符串里面直接使用变量
var infos = 'lorem';

var tmpl = `the userId is ${userInfo.id}, 

my name is ${userInfo.name},

string is ${infos}
 
 my email is ${userInfo.email}`;
// `` 反引号 数字键 1旁边的键，需要是 shift  + `
console.log(tmpl);