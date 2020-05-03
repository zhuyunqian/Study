/*
es6方法

1- 继承类extends 父类  -- class Cat extends Animal  -- 方法和属性一起继承
2- 添加修改属性  --  super(继承属性) -- 这里相当于调用父亲的constructor方法，继承了父亲的属性，添加自己的属性了
constructor(name){
    super(name);
    // console.log("constructor");
    this.color = "yellow";
}
3- 父类方法修改  -- 直接重写即可

*/

class Animal{  // 名称 父类 基类

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

class Cat extends Animal{   // cat名称  子类  派生类
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