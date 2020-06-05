const defaultState = {
  count: 0,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    default:
      return state
  }
}
