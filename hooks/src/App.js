import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Next from './components/next'
import Yuan from './components/yuan'
import Home from './home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home/>
        <Route path="/next" component={Next}></Route>
        <Route path="/yuan" component={Yuan}></Route>
      </BrowserRouter>
    )
  }
}
