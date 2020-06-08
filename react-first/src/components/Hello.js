import React, { Component } from 'react'

// 函数类型的组件
export function Welcome1(props){
return <div>我是一个函数{props.name}</div>
}

// class类的形式创建组件
export class Welcome extends Component {
    render() {
        return (
            <div onClick={()=>this.changeParentData(2)}>
                class类创建组件
                {
                    this.props.name
                }
            </div>
        )
    }
    changeParentData = (data)=>{
        this.props.changeData(data)
    }
}
