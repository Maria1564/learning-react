import React from 'react'
import style from "./Message.module.css"

const Message = ({message}) => {
  return (
    <div className={style.chats__message}>{message}</div>
  )
}

export default Message