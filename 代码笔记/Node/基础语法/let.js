// 1、var声明的变量有解析，造成 逻辑混乱，可以先使用，后声明
console.log(a);
var a = 10;

// 2、var可以重复定义同一个变量，逻辑错误，第二次应该是修改变量，而不是定义
var a = 10;
var a = 30;
console.log(a);

// 3、var用在for循环条件中，造成for 循环的污染的问题
for(var i=0; i<10; i++){
    console.log(i);
}
console.log("=====================");
console.log(i);

// 4、var 声明的变量没有块级作用域（ES5中的作用域：全局和局部）
{
    var b = 200;
}
console.log(b);

// 因为出现以上问题，造成环境污染，所以出现了let定义变量，同时也是let的优点
/*

1、let声明的变量没有预解析，不会有变量提升，提升报错

2、let不可以重复定义同一个变量

3、let用在for循环条件中，不会造成for 循环的污染的问题,外部不可以访问

4、let声明的变量有块级作用域（ES6中的作用域：全局和局部还有块级作用域）

 */

 console.log(c)
 let c = 10;