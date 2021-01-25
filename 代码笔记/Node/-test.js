console.log('hello 你好')


// 对象简化写法
let id =3;
let email = '@';
let username = '帅帅'

let userInfor = {
    id,
    email,
    age:20,
    username,
}
//模版字符串
console.log(`this boys name is ${userInfor.username}`)
// console.log(${userInfor.username})

//函数形参赋值 == x || x=1
function func(x=1){
    console.log(x)
}

func();
func('xm',12)

// 函数参数的解构赋值
function jg({id=1,username='lan'} = {}) {
    console.log(id)
    console.log(username)
}
jg(userInfor);
jg();


// rest == arguments == 数组
function argu(a,b, ...resets) {
    console.log(resets)
}
argu(10,20,30,40,60,80);
function argum(...resets) {
    console.log(resets)
}
argum(10,20,30,40)