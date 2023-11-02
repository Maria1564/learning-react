import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "Hi. This my first post", likesCount: 20 },
        { id: 2, text: "Hz dogcat flflflf", likesCount: 1 },
        { id: 3, text: "Randon text", likesCount: 40 },
        { id: 4, text: "Blablabla", likesCount: 0 },
      ],
      newPostText: "",
    },

    messagesPage: {
      dialogs: [
        { id: 1, name: "Vary" },
        { id: 2, name: "Dany" },
        { id: 3, name: "Katy" },
        { id: 4, name: "Sony" },
        { id: 5, name: "Vlad" },
      ],
      messages: [
        { id: 1, mess: "Hi" },
        { id: 2, mess: "How are you?" },
        { id: 3, mess: "Yooooo" },
      ],
      newMessageBody: "",
    },

    sidebar: {
      friends: [
        {
          id: 1,
          name: "Vlad",
          avatar: "https://kurl.ru/NUSXi",
        },
        {
          id: 2,
          name: "Dany",
          avatar: "https://kurl.ru/dzdMC",
        },
        {
          id: 3,
          name: "Katy",
          avatar: "https://kurl.ru/VCtjI",
        },
      ],
    },
  },

  //подписчики
  _callSubscriber() {
    console.warn("not subscriber");
  },

  //Получение состояния
  getState() {
    return this._state;
  },

  //подписка
  subscribe(observe) {
    this._callSubscriber = observe; // observe - какая-либо функция
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber()
   
  },
};

window.store = store;
export default store;
