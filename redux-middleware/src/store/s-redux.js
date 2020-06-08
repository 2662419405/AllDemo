export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState = undefined
  let currentListener = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListener.map(v => v())
  }
  function subscribe(listener) {
    currentListener.push(listener)
  }
  dispatch({ type: '@init' })
  return {
    getState,
    dispatch,
    subscribe,
  }
}

export function applyMiddleware(...middleware) {
  return createStore => (...arg) => {
    const store = createStore(...arg)
    const midApi = {
      getState: store.getState,
      dispatch: store.dispatch,
    }
    const chain = middleware.map(v => v(midApi))
    const dispatch = compose(...chain)(store.dispatch)
    return {
      ...store,
      dispatch,
    }
  }
}

function compose(...funcs) {
  const len = funcs.length
  if (len === 0) {
    return arg => arg
  }
  if (len === 1) {
    return funcs[0]
  }
  return funcs.reduce((left, right) => (...args) => right(left(...args)))
}
