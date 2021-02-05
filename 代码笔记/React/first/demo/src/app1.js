import React, { Component } from 'react'
import "./assets/index.css"

export default class app1 extends Component {
    constructor(props){
        super(props);

        this.state={
            num:1
        }
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
                    <div className={ this.state.num === 1 ? 'active' : ''} onClick={this.clickNum.bind(this,1)}>1</div>
                    <div className={ this.state.num === 2 ? 'active' : ''} onClick={this.clickNum.bind(this,2)}>2</div>
                    <div className={ this.state.num === 3 ? 'active' : ''} onClick={this.clickNum.bind(this,3)}>3</div>
                </div>
                <div className="content">

                </div>
            </div>
        )
    }
}
