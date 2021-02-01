// function func (a,b){
//     return a +b
// }
// let s1 = func(10,20);
// let s2 = func(10,20);
// let s3 = func(10,20);
// let s4 = func(10,20)
// console.log(s1+s2+s3+s4)

async function func(a,b){
    let s = await a+b;
    console.log(s)
    return s
}
func(10,20)
