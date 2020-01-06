import React, { Component } from 'react'

export default class clock extends Component {

    state = {
        date: new Date()
    }

    componentDidMount(){
        this.timer = setInterval( ()=>{
            this.setState({
                date: new Date()
            })
        },1000 )
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                我是一个钟表
                {
                    this.state.date.toLocaleTimeString()
                }
            </div>
        )
    }
}
