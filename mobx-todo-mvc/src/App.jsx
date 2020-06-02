import React, { Fragment } from 'react'
import TodoMvcList from './component/todoMvcList'
import Store from './store/store'

const store = new Store()

const App = () => {
  return (
    <Fragment>
      <TodoMvcList store={store} />
    </Fragment>
  )
}

export default App
