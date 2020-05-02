function People(name,age){
    this.name=name;
    this.age=age;
    this.say = function () {
        // console.log(this.name);
        setTimeout(function () {  // 这里的function有自己的作用域
            // 这里的this指向出现了问题
            console.log(this) //this指向timeout
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
let obj = {
    name:"nodejs",
    age:"11",
    say:()=>{
        console.log('123')
        console.log(this)  //指向了一个空对象
        console.log(this.name);   //this不指向obj  undefined
    }
};
obj.say()  // undefined