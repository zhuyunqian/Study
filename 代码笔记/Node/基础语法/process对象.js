/*
process 对象
终端交互工具

把你输入的命令，作为数组，体现

如果有类似node 以及路径 等命令，会直接体现出具体路径

*/

console.log(process.argv)


// 命令行使用 -- 拼接

console.log(process.argv[2]+process.argv[3])

// 获取环境的系统位数 -- x64
console.log(process.arch)