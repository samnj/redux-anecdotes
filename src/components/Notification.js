import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notifications = useSelector(state => state.notifications)

  const visible = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  const hidden = {
    display: 'none'
  }

  return (
    <div style={notifications.length === 0 ? hidden : visible}>
      {notifications.at(-1)}
    </div>
  )
}

export default Notification