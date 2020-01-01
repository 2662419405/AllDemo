import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonText: '点击我'
    }
    this.onClickChangeValue = this.onClickChangeValue.bind(this)
  }
  render() {
    return (
      <div>
        <button
          onClick={this.onClickChangeValue}
        >
          {this.state.buttonText}
        </button>
      </div>
    )
  }
  onClickChangeValue(){
    this.setState(()=>{
      return { buttonText: '修改了' }
    })
  }
}
