import { useStore } from "./Zustand"; 
import moment from "moment";

const Message = ({ message }) => {
  const username = useStore((state) => state.username);
 const isUsername = message.name === username;

console.log(message.timestamp?.toDate());
  return (
    <>
<div className={`chat ${message.name === username ? "chat-end" : "chat-start"}` }>


  <div className="chat-footer opacity-80">
    {message.name + " "}
 
   
    {moment(message.timestamp?.toDate()).format('MMMM Do YYYY, h:mm:ss a')}
  </div>

  <div className={`chat-bubble ${isUsername && 'chat-bubble-info'  } `} >
    
    {message.text}</div>
  
  <div className="chat-footer opacity-50">
    
  </div>
</div>




    </>
  );
};

export default Message;
