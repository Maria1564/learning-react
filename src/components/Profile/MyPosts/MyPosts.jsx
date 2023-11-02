import React, { useEffect } from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useRef} from "react";



const MyPosts = ({posts, newPostText, addPost, updateNewPost}) => {
  const inpRef = useRef();
  const onAddPost = () => {
    addPost()
  }

  const onUpdateText = () => {
    const text = inpRef.current.value
    updateNewPost(text)
  }
  
  return (
    <div>
      <h2>My posts</h2>

      <div className={style.post_add}>
        <textarea 
        ref={inpRef}
          name=""
          id=""
          cols="40"
          rows="4"
          placeholder="new post..."
          onChange={onUpdateText}
          value={newPostText}
        />
        <button className="primary_btn" onClick={onAddPost}>add post</button>
      </div>

      <div className={style.posts}>
        {posts.length ? posts.map(({ id, text, likesCount }) => <Post message={text} likesCount={likesCount} key={id} />) : <h3>Not posts</h3>}
      </div>
    </div>
  );
};

export default MyPosts;
