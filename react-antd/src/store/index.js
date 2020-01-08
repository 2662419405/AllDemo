import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const nextMiddleware = composeEnhancers(
    applyMiddleware(thunk)
)

const store = createStore(reducer,nextMiddleware)

export default store;
