import React, { useEffect } from "react";
import Message from "./Message/Message";
import style from "./MessagesChat.module.css"
import {useRef } from "react";


const MessagesChat = ({ messages, newMessageBody, addMessage, updateMessageText }) => {
  let inpRef = useRef()

  // useEffect(() => {console.log(`messages >> `, messages)}, [messages[messages.length-1]])

  const onAddMessage = () => {
    addMessage()
  }

  const onUpdateMessageText = () => { 
    const body = inpRef.current.value
    updateMessageText(body)
  }


  return (
    <>
      <div className={style.chat__messages}>
        {messages.map(({ id, mess }) => (
          <Message message={mess} key={id} />
        ))}
      </div>
      <div className={style.input}>
          <input placeholder="text" type="text" ref={inpRef} value={newMessageBody} onChange={onUpdateMessageText}/>
          <button className="primary_btn" onClick={onAddMessage}>Send</button>
      </div>
    </>
  );
};

export default MessagesChat;

// useEffect(()=>{
//   console.log("Компонент He.jsx созддан")
// }, [])

//   useEffect(() => {
//     console.log(`id = ${idPath}`);
//   }, [idPath]);

// useEffect(()=>{
//   console.log("useEffect")
//   setLocal((local)=>{
//       return local = window.location.href
//   })
// },[id])
