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
    handclk(){
        this.props.fatherclk(20)
    }
    render(){
        return(
            <div>
                <ChildChild></ChildChild>
                <div onClick={this.handclk.bind(this)}>{this.props.con}</div>
            </div>
        )
    }
}

export default class app2 extends Component {
    constructor(props){
        super(props)
        this.state={
            con : 10
        }
    }
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
    fatherclk(e){
        this.setState({
            con : e
        })
    }

    render() {
        return(
            <div>
                <Child fatherclk={this.fatherclk.bind(this)} con={this.state.con}></Child>
            </div> 
        )
    }
}
