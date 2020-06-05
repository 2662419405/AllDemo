import React from 'react'
import store from './store'
import { connect } from './store/s-react-redux'

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => store.dispatch({ type: 'add' })}>+1</button>
      </div>
    )
  }
}

export default connect(state => ({
  state: state.count,
}))(App)
