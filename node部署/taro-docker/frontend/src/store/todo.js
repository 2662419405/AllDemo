// src/store/todo.js
import Taro from '@tarojs/taro'
import { observable } from 'mobx'

const todoStore = observable({
  todos: ['吃饭','睡觉','开课吧学习'],

  addTodo(item) {
    this.todos.push(item)
  },
  removeTodo(i){
    Taro.showLoading({
      title: 'loading'
    })
    setTimeout(()=>{
      this.todos.splice(i,1)
      Taro.hideLoading()
    },1000)
  }
  
})

export default todoStore