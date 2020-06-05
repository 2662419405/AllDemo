import React from 'react'
import store from './store'
// import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  render() {
    console.log(store.getState())
    return (
      <div>
        {store.getState().count}
        <button onClick={() => store.dispatch({ type: 'add' })}>+1</button>
      </div>
    )
  }
}

export default App
