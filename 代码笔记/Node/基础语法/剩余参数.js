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