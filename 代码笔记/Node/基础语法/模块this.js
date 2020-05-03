console.log(exports);   //{}
console.log(module.exports);  //{}
console.log(exports === module.exports);  //true  exports实际上是module.exports的引用

console.log('this', this); // this {}

console.log(this === exports);// true   // 在 nodejs 里面的 this 代表当前的这个模块，也就是 exports 对象  并且，交互模式下，没有exports这个对象
console.log(global === this );   //false    this不指向全局对象

/*

this == exports 指向{} 或者导出的对象内容

交互模式下 this == global

*/