const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    //Добавление нового сообщения
    case SEND_MESSAGE:
      const lastItemMessages = state.messages.length - 1;
      const id = state.messages[lastItemMessages].id + 1;

      const newMessage = {
        id,
        mess: state.newMessageBody,
      };

      state.messages.push(newMessage);
      state.newMessageBody = "";
      return state;
    //Обновление текста при вводе новоого сообщения в чате
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
