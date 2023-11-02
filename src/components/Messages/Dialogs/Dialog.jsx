import React, { useEffect } from "react";
import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? style.active : "");

const Dialog = ({ id, name }) => {
  
  let path = `/messages/${id}`;

  return (
    <div className={style.dialogs__item}>
      <NavLink to={path} className={setActive}>
        {name}
      </NavLink>
    </div>
  );
};

export default Dialog;
