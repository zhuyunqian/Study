function func( a, b ,...rest){  // 把剩余的参数都交给rest
    console.log(rest);
}

func(10, 20, 30, 50, 60);



function func2(...rest){   //rest 接收所有参数作为一个数组
    console.log(rest);
}
func2(60, 70, 80, 90);


// ...  三点运算符  ， 在形参中叫做剩余参数
//注意：  ...符号在函数形参中使用时，则是剩余参数，其他地方不这么叫（后面说）

console.log('-----------------------------------')

// 扩展运算符

// 1、基本理解
let arr1 = [10, 20, 30];

function func(a, b, c){
    console.log(a,b,c)
}

func(...arr1);  //等效于：func(10,20,30);     输出结果10 20 30  -- 拆散数组


// 2、合并数组  --  拆散合并
let arr2 = [40, 50, 60];
let newArr = [...arr1,...arr2];  // 等效于 [ 10, 20, 30, 40, 50, 60 ]
console.log(newArr);    //[ 10, 20, 30, 40, 50, 60 ]

// 3、合并对象
let obj1 = {
    name:"nodejs",
    age:"11",
};
let obj2 = {
    email:"nodejs@163.com",
};
let newObj = {...obj1,...obj2}; // 等效于{ name: 'nodejs', age: '11', email: 'nodejs@163.com' }
console.log(newObj);    //{ name: 'nodejs', age: '11', email: 'nodejs@163.com' }

// 4、es6中另一个合并对象的方法
let newObj2 = Object.assign({},obj1,obj2);  // 把第二个及第二个以上的参数都合并到第1个上面去。
console.log(newObj2);   //{ name: 'nodejs', age: '11', email: 'nodejs@163.com' }


/*
这是cmmon.js模块规范 ， 
1- 引入需要使用require ， 不能省略./
2- 导出需要哪一个常量名接收，尽量常量名和导出名一致
3-  

导出数据的两种方式
1- exports.导出名字 = 导出内容
2- module.exports={ 导出内容 }
3- 只可以存在一个，两个同时写，默认第二个

*/ 

// exports - 收集导出 ， 默认是一个对象
exports.newObj2 = newObj2

// 自定义模块导出
module.exports = {
    newObj2,
    obj1,
}