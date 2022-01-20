const notificationReducer = (state = 'My Notification', action) => {
  switch (action.type) {
  case 'NOTIFICATION':
    return
  default:
    return state
  }
}

export const setNotification = message => {
  return {
    type: 'NOTIFICATION',
    message,
  }
}

export default notificationReducer