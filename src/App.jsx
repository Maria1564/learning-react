import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import News from "./components/News/News";
import Music from "./components/Music/Music";


import { Navigate } from "react-router-dom";
import MessagesChatContainer from "./components/Messages/MessagesChat/MessagesChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";

const App = () => {
  // const [local, setlocal] = useState("")
  // console.log("local >> ", local)

  return (
    <div className="app__wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper__content">
        <Routes>
          <Route path="/" element={<></>} />
          <Route
            path="/profile"
            element={<Profile/>}
          />
       
          <Route path="/messages" element={<Messages/>}>
            <Route
              path=":id"
              element={<MessagesChatContainer />}
            />
          </Route>
          {/* <Route path="/messages/:id" element={<Messages />} /> */}
          <Route path="/users" element={<UsersContainer/>} /> 
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<MusicContainer />} />
          <Route path="/music-us" element={<Navigate to="/music" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
