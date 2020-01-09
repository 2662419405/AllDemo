import React, { Component } from 'react'

export default class $id extends Component {
    render() {
        return (
            <div>
                我是一个food组件 { this.props.match.params.id }
                <button
                    onClick = { ()=>{
                        this.props.history.goBack()
                    } }
                >返回首頁</button>
            </div>
        )
    }
}
