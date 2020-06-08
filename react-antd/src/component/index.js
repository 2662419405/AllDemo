import React, { Component } from 'react'
import { Button } from 'antd'

export default class index extends Component {

    handlerReturnHome = ()=>{
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                我是一个子组件
                <Button
                    onClick={this.handlerReturnHome}
                >返回首页</Button>
            </div>
        )
    }
}
