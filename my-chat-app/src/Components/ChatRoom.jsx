import Messages from "./Messages";
import Input from "./Input";
import React, { useState, useEffect } from "react";

function ChatRoom (props) {
    const onSendMessage = (message) => {    
        drone.publish({
          room: "observable-room",
          message
        })    
      }
      
    const randomColor = () => {
      return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    };

    const [messages, setMessages] = useState([]);
    const [drone, setDrone] = useState(null);

    const [member, setMember] = useState({
        username: props.currentMember,
        color: randomColor(),
        avatarSource: props.currentAvatar
      });

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
              const updatedMember = {...member, id: drone.clientId};          
              setMember(updatedMember);          
            }
          });
               
        room.on("data", (message, member) => {                                               
          setMessages(oldArray => [ ...oldArray, {text: message, member: member}])        
        });
        return () => {
          drone.close();
        };
    
      }        
    }, [drone]);      

    return (
        <>
          <Messages messages={messages} currentMember={member} />
          <Input onSendMessage={onSendMessage}/>
        </>        
    )
}

export default ChatRoom;