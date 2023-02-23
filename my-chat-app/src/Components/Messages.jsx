import React from "react";


function Messages({ messages, currentMember }) {

        const renderMessage = (message, currentMember) => {
          const { member, text } = message;
          const messageFromMe = member.id === currentMember.id;
          const className = messageFromMe
            ? "Messages-message currentMember"
            : "Messages-message";
          return (
            <li className={className}>
              <span
                className="avatar"
                style={{ backgroundColor: member.color }}
              />
              <div className="Message-content">
                <div className="username">{member.username}</div>
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
