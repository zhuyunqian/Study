/*

es5面向对象 - 实例对象

*/

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



// es6方法
/*

1 - 实例属性和实例方法都是给实例对象去调用的
2 - 每一个实例对象在内存中是独立的，拥有自己的属性和方法和内存，互不干扰
3 - 实例一个对象并传参  --  创建了一个新对象  - 调用constructor方法，并传入参数  --  对象指向给dog标识符
4 - 静态方法通过类名调用
5 - 静态属性定义 -- 类外面定义  --  类名.属性名 = 值

*/
class Animal{

    // 定义构造函数
    constructor(name){
        // - 实力化对象 - 即调用 - 属性在这里传参并定义
        // console.log("constructor");
        this.name = name;
    }

    // 定义一个方法 - 实例方法
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