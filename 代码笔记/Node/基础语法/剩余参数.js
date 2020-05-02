function func( a, b ,...rest){  // 把剩余的参数都交给rest
    console.log(rest);
}

func(10, 20, 30, 50, 60);



function func2(...rest){   //rest 接收所有参数作为一个数组
    console.log(rest);
}
func2(60, 70, 80, 90);


// ...  三点运算符  ， 在形参中叫做剩余参数
//注意：  ...符号在函数形参中使用时，则是剩余参数，其他地方不这么叫（后面说）