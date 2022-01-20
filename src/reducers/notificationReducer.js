const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.message
  case 'REMOVE_NOTIFICATION':
    return initialState
  default:
    return state
  }
}

export const setNotification = message => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
  }
}

export default notificationReducer