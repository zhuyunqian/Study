import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import "./assets/index.css"

class ChildChild extends Component{
    //声明上下文数据，自动注入子组件context属性内
    static contextTypes = {
        title : PropsTypes.string
    }
    render(){
        return(
            <div>
                {/* 拿到context属性内的存储数值 */}
                最低子级组件 -- {this.context.title}
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
                <ChildChild></ChildChild>
                <div>{this.props.con}</div>
            </div>
        )
    }
}

export default class app2 extends Component {
    // 父组件 -- 声明上下文数据类型
    static childContextTypes = {
        title:PropsTypes.string
    }
    // 声明传值 -- 上下文储存数值
    getChildContext(){
        return{
            title:'55555'
        }
    }

    render() {
        return(
            <div>
                <Child con="1111"></Child>
            </div> 
        )
    }
}
