import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export const Profile = () => {
  
  
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
