import { combineReducers, legacy_createStore } from "redux"
import profileReducer from "./profile-reducer"
import messagesReducer from "./messages-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import musicReducer from "./music-reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer
})

const store = legacy_createStore(reducers)
window.store = store
export default store