// import { createStore } from 'redux'
import createStore from './s-redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
