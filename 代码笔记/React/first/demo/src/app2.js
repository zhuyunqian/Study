import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import "./assets/index.css"

// 定义组件
class Header extends Component {
    // 定义默认未父子传参属性
    static defaultProps = {
        title: PropsTypes.string
    }
    render(){
        return (
            <div>
                <header style={{'background':'pink'}}>{this.props.title}</header>
            </div>
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
