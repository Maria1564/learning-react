const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


const initialState = {
  posts: [
    { id: 1, text: "Hi. This my first post", likesCount: 20 },
    { id: 2, text: "Hz dogcat flflflf", likesCount: 1 },
    { id: 3, text: "Randon text", likesCount: 40 },
    { id: 4, text: "Blablabla", likesCount: 0 },
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    //Добавление нового поста
    case ADD_POST:{
      const lastItem = state.posts.length - 1;
      const id = state.posts[lastItem].id + 1;

      const newPost = {
        id,
        text: state.newPostText,
        likesCount: 0,
      };
      
      const copyState = {...state}
      copyState.posts= [...state.posts]

      copyState.posts.push(newPost);
      copyState.newPostText = "";

      return copyState;

    }

    //Обновления текста во время ввода нового поста
    case UPDATE_NEW_POST_TEXT:{

      const copyState = {...state}
      copyState.newPostText = action.newText; 
      
      return copyState;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
