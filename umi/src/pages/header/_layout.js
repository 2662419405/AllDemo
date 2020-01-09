import React, { Component } from 'react'

export default class _layout extends Component {
    render() {
        return (
            <div>
                我是头部组件
                { this.props.children }
            </div>
        )
    }
}



