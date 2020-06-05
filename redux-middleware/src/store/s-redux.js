export default reducer => {
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
