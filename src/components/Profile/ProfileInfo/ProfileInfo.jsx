import React from "react";
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <>
      <img
        src="https://storage.nic.ru/ru/images/png/1.blog-site-testing-950.png"
        alt=""
        className={style.bg}
      />
      <div>
        about user <b>(ava + description)</b>
      </div>
    </>
  );
};

export default ProfileInfo;
