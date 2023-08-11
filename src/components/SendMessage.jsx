import { Input } from "@mui/material";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { firestore } from "../firebase-config";
import { useStore } from "./Zustand"; 


const SendMessage = () => {

const [value, setValue] = useState ("");
const username = useStore((state) => state.username);

const handleSendMessage = async (e) => {
  
    e.preventDefault();
    if(value.trim() === "") {
 //boşsa bir şey yapma
     return;
    }
    
    try{
      await addDoc(collection(firestore, "messages"), {

        text: value,
        timestamp: serverTimestamp(),
        name: username
        
      });
      setValue("");
      console.log({username});
     
    }
    catch(error){
      console.log(error);
    }

    setValue("");
}
  return (

        <div className="">
         <Form onSubmit = {handleSendMessage}>
          
         <Input  className="w-100 p-2 bg-slate-100 rounded-2xl" value = {value}  onChange = {e => setValue(e.target.value)}> </Input>
          
         <Button type="submit">  Send </Button>
         </Form>
         
        </div>
  
  );
};

export default SendMessage;
