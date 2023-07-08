import React, { useContext } from 'react'
import NotificationContext from '../../context/NotificationContext'
import Modalbackground from '../reusable/Modalbackground'

const Notification = () => {
    const { message , status } = useContext(NotificationContext)

  return (
    <div className={`${status ? '' : 'hidden'}`} >
      <Modalbackground>
        <div className={`notification shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark flex ${status ? 'loading-notification' : ''}`}>{message}</div>
      </Modalbackground>
    </div>
  )
}

export default Notification