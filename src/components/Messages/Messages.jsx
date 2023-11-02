import React from "react";
import style from "./Messages.module.css";
import { Outlet } from "react-router-dom";
import Dialog from "./Dialogs/Dialog";

const Messages = ({dialogs}) => {
  // const dialogs = useContext(StoreContext).getState().messagesPage.dialogs
  
  return (
    <div className={style.messages}>
      <div className={style.dialogs}>
        {dialogs.map(({ id, name }) => (
          <Dialog id={id} name={name} key={id} />
        ))}
      </div>
      <div className={style.chats}>
        <Outlet />
      </div>
    </div>
  );
};

export default Messages;
