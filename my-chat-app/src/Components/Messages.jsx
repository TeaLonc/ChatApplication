import React from "react";
import avatarImg from "../img/avatar.png";
import hacker from "../img/hacker.png";
import ninja from "../img/ninja.png";


function Messages({ messages, currentMember }) {      

  const renderMessage = (message, currentMember) => {
     const { member, text } = message;
     const messageFromMe = member.id === currentMember.id;
     const className = messageFromMe
        ? "Messages-message currentMember"
        : "Messages-message";
     const avatarSource = member.clientData.avatarSource;
          return (
            <li className={className}>
              <span className="avatar" >               
                 <img src={avatarSource==="avatarImg" ? avatarImg : (avatarSource==="ninja"? ninja : hacker)} alt="icon avatar"></img>                                      
              </span>
              <div className="Message-content">
                <div className="username">{member.clientData.username}</div>
                <div className="text">{text}</div>
              </div>
            </li>
          );
        }
      
        return (
          <ul className="Messages-list">
            {messages.map((m) => renderMessage(m, currentMember))}
          </ul>
        );
      }
    
 export default Messages;
