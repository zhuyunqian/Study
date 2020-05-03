/*

类似内置对象一样  例子： Math.max() 对象的max方法

1- 静态属性定义  --  对象.属性名称 = ""   ==  对象外部定义
2- 静态方法定义  --  static 方法名称(){}

*/


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
// 定义静态属性
// 关于静态属性，目前暂时没有关键字来定义，想要实现的话就在定义完类之后直接在类上添加属性，获取的时候通过类名来获取这个属性
Animal.type = "动物";
console.log(Animal.type);