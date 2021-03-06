import React from 'react'
import styles from './message-card.module.css'

function Message({
  seen = '2 DAYS',
  message = "What's up?",
  name = 'Mertcan'
}) {
  return (
    <div className={styles.messageBox}>
      <a href="http://">
        <img src="https://picsum.photos/45/45" alt="profile-photo" />
      </a>

      <div className={styles.content}>
        <h3>{name}</h3>
        <span>{message}</span>
      </div>
      <span className={styles.lastSeen}>{seen}</span>
    </div>
  )
}

export default Message
