import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notifications }) => {
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

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification