// index.js为react项目的入口文件

// 引入核心模块
import React from 'react'
import ReactDOM from 'react-dom'
import App from './child'

// 通过jsx语法将组件、标签渲染到标签上
ReactDOM.render(
    //渲染上去的内容（参数1）
    <App/>,
    //渲染的标签（参数2）
    document.getElementById('root')
)