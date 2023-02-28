import Messages from "./Messages";
import Input from "./Input";



function ChatRoom (props) {    

    return (
        <>
            <Messages messages={props.messages} currentMember={props.currentMember} />
            <Input onSendMessage={props.onSendMessage}/>
        </>
        
    )
}

export default ChatRoom;