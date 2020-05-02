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

