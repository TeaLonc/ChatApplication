import './App.css';
import React, { useState} from "react";
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
            <Route path="/ChatRoom" element={<ChatRoom currentMember={member} currentAvatar={avatarImg}/>}></Route>          
          </Routes>        
        </div>
    </Router>    
  );
};

export default App;