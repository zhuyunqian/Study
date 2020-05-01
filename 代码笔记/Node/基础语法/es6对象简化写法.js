/*var name = 'andy';
var age = 12;

var userInfo = {
    id: 1,
    name: name,
    age: age
}

console.log(userInfo);*/

let id = 12;
let name = 'andy';
let age = 12;

let fn = function(){
    console.log(`my name is ${this.name}` );
}

// es6 写法
let userInfo = {
    id,
    // 如果我们的变量的名称和属性的名称一致，则可以直接只写变量名
    name, // name: name
    age,
    fn // 如果我们的函数的名称和属性的名称一致，直接写函数名即可
}

console.log(userInfo);
userInfo.fn();