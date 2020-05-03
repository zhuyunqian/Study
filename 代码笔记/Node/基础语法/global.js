/*

1 - 全局对象和方法  --  global.属性/方法 = ‘’
2 - this ！==  global  this = 当前文件/模块

*/

// 1. nodejs 里面没有 window全局对象，但是存在一个 gloabal 全局对象。之前使用 console. setTimeout 这些全局的函数都是 global 上面的属性

// console.log(window);   // 报错 ReferenceError: window is not defined
// console.log(global);


// 2. nodejs 里面声明的变量，并不会被挂载带 global 全局对象
let b = 20;
console.log(global.b);  //undefined


// 3. 可以向global添加成员，使其在任何地方都可用
global.a = 10;
console.log(a); //10

// 4. 在nodejs执行js文件的过程中，里面也存在 this ，但是这个 this 和 global 并不是相等。
console.log(global === this);  //false
// 实际上，在 nodejs 里面的this代表的当前这个 js模块（暂且认为 this 代表当前这个js文件）