import './App.css';
import Messages from './Components/Messages';
import React, { useState, useEffect } from "react";
import Input from './Components/Input';
import Header from './Components/Header';
import Landing from './Components/Landing';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatRoom from './Components/ChatRoom';



function App() {

  const onSendMessage = (message) => {    
    drone.publish({
      room: "observable-room",
      message
    })    
  }
  const randomName = () => {
    const adjectives = [
      "autumn",
      "hidden",
      "bitter",
      "misty",
      "silent",
      "empty",
      "dry",
      "dark",
      "summer",
      "icy",
      "delicate",
      "quiet",
      "white",
      "cool",
      "spring",
      "winter",
      "patient",
      "twilight",
      "dawn",
      "crimson",
      "wispy",
      "weathered",
      "blue",
      "billowing",
      "broken",
      "cold",
      "damp",
      "falling",
      "frosty",
      "green",
      "long",
      "late",
      "lingering",
      "bold",
      "little",
      "morning",
      "muddy",
      "old",
      "red",
      "rough",
      "still",
      "small",
      "sparkling",
      "throbbing",
      "shy",
      "wandering",
      "withered",
      "wild",
      "black",
      "young",
      "holy",
      "solitary",
      "fragrant",
      "aged",
      "snowy",
      "proud",
      "floral",
      "restless",
      "divine",
      "polished",
      "ancient",
      "purple",
      "lively",
      "nameless"
    ];
    const nouns = [
      "waterfall",
      "river",
      "breeze",
      "moon",
      "rain",
      "wind",
      "sea",
      "morning",
      "snow",
      "lake",
      "sunset",
      "pine",
      "shadow",
      "leaf",
      "dawn",
      "glitter",
      "forest",
      "hill",
      "cloud",
      "meadow",
      "sun",
      "glade",
      "bird",
      "brook",
      "butterfly",
      "bush",
      "dew",
      "dust",
      "field",
      "fire",
      "flower",
      "firefly",
      "feather",
      "grass",
      "haze",
      "mountain",
      "night",
      "pond",
      "darkness",
      "snowflake",
      "silence",
      "sound",
      "sky",
      "shape",
      "surf",
      "thunder",
      "violet",
      "water",
      "wildflower",
      "wave",
      "water",
      "resonance",
      "sun",
      "wood",
      "dream",
      "cherry",
      "tree",
      "fog",
      "frost",
      "voice",
      "paper",
      "frog",
      "smoke",
      "star"
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  };
  
  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  };

  const [messages, setMessages] = useState([]);

  const [drone, setDrone] = useState(null);

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  useEffect(() => {
    console.log(messages)
  }, [messages])
    
  useEffect(() => {        
    const newDrone = new window.Scaledrone("sCQTtqgc9lORXtLw", {
      data: member,
    });    
    
    setDrone(newDrone);         
    
    return () => {
      
    };
  }, []);

  useEffect(() => {    
    if(drone) {
      const room = drone.subscribe("observable-room");
      
      drone.on("open", (error) => {
        if (error) {
          console.error(error);
        } else {        
          const updatedMember = {...member, id: drone.clientId };          
          setMember(updatedMember);          
        }
      });
      
      /*room.on("data", (message, member) => { 
                                          
        setMessages(oldArray => [ ...oldArray, {text: message, member: member}])
      
    });*/
    room.on("data", (message, member) => { 
                                          
      setMessages(oldArray => [ ...oldArray, {text: message, member: member}])
    
  });
    return () => {
      drone.close();
    };

    }        
  }, [drone]);

  return (
    <Router>
        <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/ChatRoom" element={<ChatRoom messages={messages} currentMember={member} onSendMessage={onSendMessage}/>}></Route>          
        </Routes>        
      </div>
    </Router>
    
  );
};


export default App;