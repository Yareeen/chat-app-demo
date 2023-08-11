import { useEffect, useState ,useRef} from "react";
import Message from "./Message";
import { collection, query,orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase-config";


const ChatBox = () => {

  const [messages, setMessages] = useState([""]);
  const messagesEndRef = useRef();


  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth"})
  };

  useEffect(scrollToBottom, [messages])
 
//Database connect

  useEffect(() => {
    const q = query(
      collection(firestore, "messages"),
      orderBy("timestamp"),
      );
    

    //onSnapShot anlık güncellemeleri dinler.
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newMessages = [];
      querySnapshot.forEach((doc) => {
        newMessages.push({ ...doc.data(), id: doc.id});
  
      });
      setMessages(newMessages);
    });
    return () => unsubscribe();
  }, []);


  return (
    <div >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
         <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
