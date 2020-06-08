export default ({ dispatch, getState }) => {
  return dispatch => action => {
    console.log('执行了' + action.type)
    return dispatch(action)
  }
}
