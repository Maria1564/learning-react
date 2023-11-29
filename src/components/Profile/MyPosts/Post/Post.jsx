import React from "react";
import style from "./Post.module.css";
import { AiFillLike } from "react-icons/ai";
import avatar from "../../../../assets/avatarPost.png";

const Post = ({ message, likesCount }) => {
  console.log("Post");

  return (
    <div className={style.item}>
      <div className={style.item__content}>
        <img
          src={avatar}
          alt="avatar"
          width={50}
          height={50}
          className={style.avatar}
        />
        <p>{message}</p>
      </div>

      <div className={style.like}>
        <span>{likesCount}</span>
        <button>
          <AiFillLike />
        </button>
      </div>
    </div>
  );
};

export default Post;
