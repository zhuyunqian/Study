// ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法
function func(x){
    x = x || 1;      // 有为1 无为undefined
    console.log(x);
}
func();
 
// ES6  -- 可直接赋值默认值
function func(x = 1){ // 注意当 x 为 undefined 时 x 赋值为 1
    console.log(x);
}
func();  // 传参为传输参数  不传为默认参数1

function fun(name = 'nodejs', age = 12){
    console.log(name, age);
}
fun();   // 'nodejs', 12
fun("xiaoming", 15);    //"xiaoming", 15
fun('123',10)