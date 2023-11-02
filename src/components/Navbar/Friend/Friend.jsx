import React from "react";
import style from "./Friend.module.css"

const Friend = ({name, avatar}) => {
  return (
    <div className={style.friend}>
      <img className={style.friend_img} src={avatar} alt="avatarka" />
      <span>{name}</span>
    </div>
  );
};

export default Friend;
