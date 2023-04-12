import React from 'react'
import './TNotifications.css'
import '../../../Components/MainStyling.css'
function TNotification(props) {
    const {title, description, author, timeline} = props.details 
  return (
    <div className='Card-Notification AddShadow'>
        <h2 className='Notification-title'>
            {title}
        </h2>
        <p className='Notification-desc'>
            {description}
        </p>
        <p className='Notification-author'>
            Created By: {author}
        </p>
        <p className='Notification-time'>
            Created on: {timeline}
        </p>
    </div>
  )
}

export default TNotification