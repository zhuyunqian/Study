import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        console.log(this.props.routeParams.newId)
    }
    
    render() {
        return (
            <div>
                列表页
            </div>
        )
    }
}
