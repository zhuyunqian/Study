/*
es5 - 继承父类的方法 

1- 继承属性  -- Animal.call(this, name);   -- this指向了父亲类
2- 继承方法  -- Mouse.prototype = new Animal(); 
3- 添加新方法  --  Mouse.prototype.方法 = function;
4- 添加新属性  --  call后  this.color = color;

*/

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
子类继承父类的方法
Mouse.prototype = new Animal(); 
给子类实例添加新方法 
Mouse.prototype.showInfo = function(){
    console.log(this.name, this.color);
}

var m = new Mouse('Jerry', 'gray');
console.log(m.name , m.color)
//m.showName();
// m.showInfo();
// Animal.eat();