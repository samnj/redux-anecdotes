const initialState = []

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return [...state, action.message]
  case 'REMOVE_NOTIFICATION':
    return state.filter(n => n !== action.message)
  default:
    return state
  }
}

export const setNotification = (message, delay) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message,
    })
    setTimeout(() => {
      dispatch(removeNotification(message))
    }, delay * 1000)
  }
}

export const removeNotification = message => {
  return {
    type: 'REMOVE_NOTIFICATION',
    message,
  }
}

export default notificationReducer