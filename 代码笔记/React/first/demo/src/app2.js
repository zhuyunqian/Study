import React, { Component } from 'react'
import "./assets/index.css"

// 定义组件
class Header extends Component {
    // 定义默认未父子传参属性
    static defaultProps = {
        title: '默认标题'
    }
    render(){
        return (
            <header style={{'background':'pink'}}>{this.props.title}</header>
        )
    }
} 

export default class app2 extends Component {
    render() {
        return(
            <div>
                {/* 使用组件 */}
                <Header title="首页1"></Header>
                <Header title="首页2"></Header>
                {/* 默认标题 */}
                <Header></Header>
            </div> 
        )
    }
}
