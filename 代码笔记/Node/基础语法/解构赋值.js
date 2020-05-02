// 函数参数的解构赋值

function func({name, age}){       //{name, age} = obj     解构
    console.log(name, age);
}

function arr([name, age]){       //{name, age} = obj     解构
    console.log(name, age);
}
let array = [1,2,3,4];
let obj = {
    name:"nodejs",
    age:"11",
    email:"nodejs@163.com",
};
func(obj);     // 输出结果： nodejs 11
arr(array);

// 注意：
//func(); //相当于传了一个null   {name, age}=null 就会报错
func({});  //不会报错，输出：undefined undefined


// 解构赋值制定参数的默认值

function func2({name, age} = {}){   //防止不传实参时候的报错  -- 不传参数的时候会报错没有={}
    console.log(name, age);
}
func2();   //undefined undefined  

// 指定默认参数
function func3({name="nodejs", age=11} = {}){    //指定默认值
    console.log(name, age);
}
func3();  //nodejs 11