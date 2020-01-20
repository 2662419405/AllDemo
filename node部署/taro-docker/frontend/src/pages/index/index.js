import Taro, { Component } from '@tarojs/taro'
import { View, Text,Input } from '@tarojs/components'

import { AtButton,AtInput,AtList, AtListItem } from 'taro-ui'
import './index.scss'

import { observer, inject } from '@tarojs/mobx'


@inject('todoStore')
@observer
export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Todolist'
  }
  constructor(props){
    super(props)
    this.state={
      val:''
    }
  }
  handleInput = (val)=>{
    this.setState({val})
  }
  handleClick = ()=>{
    this.props.todoStore.addTodo(this.state.val)
    this.setState({
      val:''
    })
  }
  handleChange=(i)=>{
    this.props.todoStore.removeTodo(i)
  }
  render () {
    const {todoStore} = this.props
    return (
      <View className='index'>
        <Text>开课吧Todo List</Text>
        <View className='at-icon at-icon-bullet-list'></View>

        <AtInput value={this.state.val} onChange={this.handleInput}></AtInput>
        <AtButton type='primary' onClick={this.handleClick}>添加</AtButton>
        <AtList>
        {todoStore.todos.map((item,i)=>{
          return <AtListItem 
                    title={i+':'+item}
                    isSwitch
                    onSwitchChange={()=>this.handleChange(i)}
                    
                    >
          </AtListItem>
   
        })}

        </AtList>
        

      </View>
    )
  }
}

