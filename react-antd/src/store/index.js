import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import thunk from 'redux-thunk'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const sagaMiddleware = createSagaMiddleware();

const nextMiddleware = composeEnhancers(
    applyMiddleware(thunk,sagaMiddleware)
)

const store = createStore(reducer,nextMiddleware)

sagaMiddleware.run(saga)
export default store;
