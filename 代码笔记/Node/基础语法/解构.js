// 对象结构

let obj = {
    name: "nodejs",
    age:11,
    email:"nodejs@163.com"
};

// 取出所有属性并赋值：
// let name  = obj.name;
// let age  = obj.age;
// let email  = obj.email;

// 现在只需要(等效于上面的写法):  -- 完全解构
//let {name, email, age} = obj;  //{ }中的变量名和obj的属性名一致    完全解构

// 部分解构
//let {name} = obj;     // 部分解构  ==  let name = obj.name

//解构之后重命名   
let {name:itsName} = obj;    //解构之后重命名为itsName  把name属性的值赋值给itsName,后期修改obj.name ,itsname并不会修改,两个值不会互相影响
console.log(itsName)
obj.name="11111"
itsName = '22222'
console.log(obj.name)
console.log(itsName)


/*

大括号里面的变量名，只能是对象里面的属性名
大括号内的的变量名可以任意排序
可以获取部分属性即部分解构



*/
