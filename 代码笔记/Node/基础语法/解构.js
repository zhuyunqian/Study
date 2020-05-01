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

let arr1 = [10, 20, 30];

let [a, b, c] = arr1;

console.log(a);  //10
console.log(b);  //20
console.log(c);  //30

// 部分解构
let [d] = arr1;
console.log(d);  //10

let [ , ,f] = arr1;
console.log(f);  //30


// 复合解构
let arr2 = [1, 2, [10, 20, 30]];
let [ j, k, [x, y, z]] = arr2;
console.log(j);  //1
console.log(k);  //2
console.log(x);  //10
console.log(y);  //20
console.log(z);  //30

j=10;
console.log(j)
console.log(arr2)

// 字符串解构 -- 可解构 ， 不可用选择方法修改

let string1 = "xyz";

let [a,b,c] = string1;
console.log(a);  //x
console.log(b);  //y
console.log(c);  //z


string1[1] = "Y";
console.log(string1);  // xyz    无法修改
console.log(string1[1]);  // y