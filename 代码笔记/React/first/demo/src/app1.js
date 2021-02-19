import React, { Component } from 'react'
import "./assets/index.css"

export default class app1 extends Component {
    constructor(props){
        super(props);

        this.state={
            num:1
        }
    }
    static defaultProps = {
        //属性名：默认值,
        bgc : "blue",
        title : "默认标题"
    }

    clickNum(number){
        console.log(number)
        this.setState({
            num : number
        })
    }
    render() {
        
        return (
            <div>
                <div className="title">
                    <div className={ this.state.num === 1 ? 'active' : ''} style={{'color': this.props.bgc}} onClick={this.clickNum.bind(this,1)}>1{this.props.title}</div>
                    <div className={ this.state.num === 2 ? 'active' : ''} onClick={this.clickNum.bind(this,2)}>2</div>
                    <div className={ this.state.num === 3 ? 'active' : ''} onClick={this.clickNum.bind(this,3)}>3</div>
                </div>
                <div className="content">
                    <div className={ this.state.num === 1 ? 'current' : ''}>111111</div>
                    <div className={ this.state.num === 2 ? 'current' : ''}>222222</div>
                    <div className={ this.state.num === 3 ? 'current' : ''}>333333</div>
                </div>
            </div>
        )
    }
}
