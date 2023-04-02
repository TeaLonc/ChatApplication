import './App.css';
import Messages from './Components/Messages';
import React, { useState, useEffect } from "react";
import Input from './Components/Input';
import Header from './Components/Header';
import Landing from './Components/Landing';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatRoom from './Components/ChatRoom';



function App() {


  const [member, setMember] = useState('');
  const inputName = (e) => {
    const inpuValue = e.target.value;
    setMember(inpuValue);
  }

  const [avatarImg, setAvatarImg] = useState({});
  const chooseAvatar = (e) => {   
     setAvatarImg(e.target.id);
  }
  
  

  return (
    <Router>
        <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landing member={inputName} avatar={chooseAvatar} currentAvatar={avatarImg}/>}></Route>
          <Route path="/ChatRoom" element={<ChatRoom /*messages={messages} currentMember={member} onSendMessage={onSendMessage}*/currentMember={member} currentAvatar={avatarImg}/>}></Route>          
        </Routes>        
      </div>
    </Router>
    
  );
};


export default App;