import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../redux/messages-reducer";
import MessagesChat from "./MessagesChat";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: ()  =>  dispatch(sendMessageCreator()),
        updateMessageText: (body) => dispatch(updateNewMessageBodyCreator(body))
    }
}

const MessagesChatContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesChat)

export default MessagesChatContainer;

