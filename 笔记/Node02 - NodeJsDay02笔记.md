## 一、ES6中函数形参的默认值

```JS
// ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法
function func(x){
    x = x || 1;
    console.log(x);
}
func();
```

```JS
// ES6 做法，代码简洁易阅读
function func(x = 1){ // 注意当 x 为 undefined 时 x 赋值为 1
    console.log(x);
}
func();

function fun(name = 'nodejs', age = 12){
    console.log(name, age);
}
fun();   // 'nodejs', 12
fun("xiaoming", 15);    //"xiaoming", 15
```

## 二、函数参数的解构赋值

```js
function func({name, age}){       //{name, age} = obj     解构
    console.log(name, age);
}

let obj = {
    name:"nodejs",
    age:"11",
    email:"nodejs@163.com",
};
func(obj);     // 输出结果： nodejs 11


// 注意：
// func(); //相当于传了一个null   {name, age}=null 就会报错
// func({});  //不会报错，输出：undefined undefined
```

## 三、解构赋值指定参数的默认值

```js
function func2({name, age} = {}){   //防止不传实参时候的报错
    console.log(name, age);
}
func2();   //undefined undefined
```

```js
function func2({name="nodejs", age=11} = {}){    //指定默认值
    console.log(name, age);
}
func2();  //nodejs 11
```

## 四、rest 参数/剩余参数

用于获取函数的多余参数，这样就不需要使用 arguments 对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

```js
function func( a, b ,...rest){  // 把剩余的参数都交给rest
    console.log(rest);
}

func(10, 20, 30, 50, 60);



function func2(...rest){   //rest 接收所有参数作为一个数组
    console.log(rest);
}
func2(60, 70, 80, 90);

//注意：  ...符号在函数形参中使用时，则是剩余参数，其他地方不这么叫（后面说）
```

## 五、扩展运算符

```js
// 1、基本理解
let arr1 = [10, 20, 30];

function func(a, b, c){
    console.log(a,b,c)
}

func(...arr1);  //等效于：func(10,20,30);     输出结果10 20 30

// 2、合并数组
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
```

## 六、箭头函数（重点）

ES6 允许使用 “箭头”（=>）简化函数的定义。

```JS
// function func(){
//     console.log("hello");
// }

// 以上代码使用箭头函数书写为：
var func = () => {
    console.log("hello");
};

func();
```

```js
//  注意点：
//  1、形参个数如果为1个，可以省略小括号不写;
//  2、如果函数体里面只有一个语句，可以省略大括号不写, 并且他会默认返回 => 符号后面的数据。
//  3、如果函数体有多个语句，则不能省略大括号。
//  4、如果函数体只有一个语句，且返回一个对象，建议是，不要写简写的方式。
```

例子：

```js
// 无参数无返回
let func11 = () => console.log('func11');
func11();

// 无参数有返回

let func22 = () => 'func22';
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
```

注意：如果return的是单一个对象，则需要加上大括号和return，例如：

```js
// let func55 = x => {a:10, b:20};    //报错
let func66 = x => {
    return {a:10, b:20}
};
```

## 七、箭头函数中的this

箭头函数没有自己的作用域，即箭头函数 this 指向其外层作用域

```js
function People(name,age){
    this.name=name;
    this.age=age;
    this.say = function () {
        // console.log(this.name);
        setTimeout(function () {
            console.log(this.name);
        },1000);
    }
}
var p1 = new People("zhangsan", 15);
p1.say();  // undefined


function People2(name,age){
    this.name=name;
    this.age=age;
    this.say = function(){
        // console.log(this.name);
        setTimeout(()=>{
            console.log(this.name);
        },1000);
    }
}
var p2 = new People2("lisi", 15);
p2.say();  //lisi




//但如果创建的是字面量对象，不适合书写箭头函数
let obj1 = {
    name:"nodejs",
    age:"11",
    say:()=>{
        console.log(this.name);   //this不指向obj
};
obj1.say();  // undefined
```

在dom操作中使用箭头函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .box{
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div id="odiv" class="box"></div>
    <script>
        var obj = document.getElementById("odiv");
        obj.onclick = function(){
            
            // setTimeout(function(){
            //     this.style.width="300px"   //修改不了
            // },1000);


            setTimeout(()=>{
                this.style.width="300px"   //修改成功
            },1000);
        }
    </script>
</body>
</html>
```

## 八、面向对象(重点)

一般面向对象的语言里面，都有类，实例对象这些概念。我们通过实例化类，得到实例对象。

类：定义一个 类，需要使用 class 关键字，但是es5里面，使用构造函数（首字母大写）来实现的。

继承：一般使用 extends 关键字来进行继承，但是在es5里面，也是没有extends继承，而是使用的prototype原型继承完成的。

ES6之前的写法：

```js
// 用函数定义类
function Animal(name){
    this.name = name;
}
// 给类的实例定义方法
Animal.prototype.showName = function(){
    console.log(this.name);
}
// 给类定义静态方法
Animal.eat = function(){
    console.log('进食');
}

// 根据函数实例化对象
var a = new Animal("Tom");
// 调用对象的方法
a.showName();
// 调用类的静态方法
Animal.eat();
```

ES6的写法：   （掌握）

```js
class Animal{

    // 定义构造函数
    constructor(name){
        // console.log("constructor");
        this.name = name
    }

    // 定义一个方法
    showName(){
        console.log(this.name);
    }

    //定义静态方法
    static eat(){
        console.log("吃---");
    }
}

let obj = new Animal("Tom");

obj.showName();
Animal.eat();
```

## 九、关于继承

ES6之前的写法（仅做了解）

```js
function Animal(name){
    this.name = name;
}
Animal.prototype.showName = function(){
    console.log(this.name);
}
Animal.eat = function(){
    console.log('进食');
}

// 定义子类
function Mouse(name, color){ 
    // 子类继承父类的属性 需要将 this 指向父类中的 name
    Animal.call(this, name);  
    this.color = color;
}
// 子类继承父类的方法
Mouse.prototype = new Animal(); 
// 给子类实例添加新方法 
Mouse.prototype.showInfo = function(){
    console.log(this.name, this.color);
}

var m = new Mouse('Jerry', 'gray');
m.showName();
m.showInfo();
Animal.eat();
```

ES6的写法：（掌握）

```js
class Animal{

    // 定义构造函数
    constructor(name){
        // console.log("constructor");
        this.name = name;
    }

    // 定义一个方法
    showName(){
        console.log(this.name);
    }

    //定义静态方法
    static eat(){
        console.log("吃---");
    }
}

class Cat extends Animal{

}

let cat1 = new Cat("Tom");

cat1.showName();
Cat.eat();
```

继承中的子类constructor的写法：

在ES6中使用继承时，constructor中必须调用super()方法,其本质是在调用父类的constructor方法。通过这样的方式来达到属性继承的效果

```js
class Animal{

    // 定义构造函数
    constructor(name){
        console.log("constructor");
        this.name = name;
        this.age = 0;
        this.color = "white";
    }

    // 定义一个方法
    showName(){
        console.log(this.name);
    }

    //定义静态方法
    static eat(){
        console.log("吃---");
    }
}

class Cat extends Animal{
    //注意：在ES6中使用继承时，constructor中必须调用super()方法,其本质是在调用父类的constructor方法。通过这样的方式来达到属性继承的效果
    constructor(name){
        super(name);
        // console.log("constructor");
        this.color = "yellow";
    }
    
    
    //定义Cat类特有的方法
    catchMouse(){
        console.log("抓老鼠");
    }
    //重写父类方法
    showName(){
        console.log(this.name, "喵喵");
    }
}

let cat1 = new Cat("Tom");
console.log(cat1.color);
console.log(cat1.age);
console.log(cat1.name);
cat1.catchMouse();
cat1.showName();
```

## 十、静态属性和静态方法

Math.max(10, 20 30, 16)   把构造函数当成普通对象来调用某个方法，这个方法叫静态方法，如果是属性，我们就称它为静态属性。

定义静态方法，再类中通过加static关键字来定义。

关于静态属性，目前暂时没有关键字来定义，想要实现的话就在定义完类之后直接在类上添加属性，获取的时候通过类名来获取这个属性。

```js
class Animal{

    // 定义构造函数
    constructor(name){
        // console.log("constructor");
        this.name = name
    }

    // 定义一个方法
    showName(){
        console.log(this.name);
    }

    //定义静态方法，再类中通过加static关键字来定义
    static eat(){
        console.log("吃---");
    }
}

let obj = new Animal("Tom");

obj.showName();
Animal.eat();
// 关于静态属性，目前暂时没有关键字来定义，想要实现的话就在定义完类之后直接在类上添加属性，获取的时候通过类名来获取这个属性
Animal.type = "动物";
console.log(Animal.type);
```



## 十一、全局对象

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

后面看到所有的全局变量，例如 console，setTimeout 和 process 是 global 变量的成员。我们甚至可以向全局变量添加成员，使其在任何地方都可用。

```js
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
```

process对象(仅做了解)

```
console.log(process.argv); // 返回一个数组，前两个值是 node 命令所在位置，被执行 JS 文件的路径，若你执行命令时还有带有参数，依次会填充到此数组中也打印出来。（使用 nodejs 开发命令行的应用，需要获取 命令行的参数，才用得上）

console.log(process.arch); // 打印系统位数 x64
```


