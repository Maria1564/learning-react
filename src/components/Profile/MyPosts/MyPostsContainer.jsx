import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  console.log(state)
  //возвращает обёкт в виде props  => props:{posts: [...], newPostText: ""}
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch)=> {
  //возвразает в виде props коллбэк-функции => props{addPost: ()=>{...}, updateNewPost(text)=>{...}}
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPost: (text) => dispatch(updateNewPostTextActionCreator(text))
  }
}

/*
    Два props(из первой и второй ф-ций) объеденятся в один props
    В итоге =>  props:{
      posts: [...], 
      newPostText: "", 
      addPost: ()=>{...}, 
      updateNewPost(text)=>{...}
    }
*/

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
//во вторые круглые скобки передаётся компонент который будет завёрнут в MyPostsContainer

export default MyPostsContainer;
