// 箭头函数  --  其实就是简化函数

// function func(){
//     console.log("hello");
// }

// 以上代码使用箭头函数书写为：
var func = () => {
    console.log("hello");
};

func();

//  注意点：
//  1、形参个数如果为1个，且不带默认值，可以省略小括号不写; x =>{console.log(x)} 
//  2、如果函数体里面只有一个语句，可以省略大括号不写, 并且他会默认返回 => 符号后面的数据。  ()=>console.log(123)
//  3、如果函数体有多个语句，则不能省略大括号。  a => {if(a>10){a=1}}
//  4、如果函数体只有一个语句，且返回一个对象，建议是，不要写简写的方式。  function(){return false}  --  建议

console.log('--------')

// 无参数无返回
let func11 = () => console.log('func11');
func11();
let res = func11(20);
console.log(res)  // undefined


// 无参数有返回

let func22 = () => 'func22';  // 这种形式没有{}，相当于 return 箭头后面的值
console.log(func22());

// 有参数无返回
let func33 = x => console.log('func33', x);
func33(2);

// 有参数有返回
let func44 = (x, y) => {
    let sum = x + y; 
    return sum + 'func44';
};
console.log(func44(1, 2));

//return 对象的方法

// let func55 = x => {a:10, b:20};    //报错
let func66 = x => {
    return {a:10, b:20}
};