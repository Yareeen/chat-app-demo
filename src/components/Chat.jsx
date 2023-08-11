import Container from "react-bootstrap/Container";
import SendMessage from "./SendMessage";
import ChatBox from "./ChatBox";
import { useEffect, useState } from "react";
import { useStore } from "./Zustand";  

function Chat() {
  const username = useStore((state) => state.username);
  return (
    <>
  
        <div className="p-3 text-center font bg-cyan-500">
          <div className="flex justify-between items-center ">
          <div></div>
          <div className="font-bold text-3xl">
          QuickChat
            </div>
            <div className="text sm me-4 font-weight-normal text-2xl"> Hoşgeldin {username}  </div>
         
        </div>
             </div>
  
        <div className="flex flex-grow">
          <div className="w-1/4 p-4 h-full">
            {" "}
            {/* Sol taraftaki kutu */}
            {/* Sol taraftaki kutu içeriği buraya gelebilir */}
          </div>
          <div className="w-3/4  h-[86rem]">
            <div className="overflow-y-auto h-3/4 ">
              {" "}
              {/* Sağ taraftaki kutu */}
              <ChatBox className="flex-grow" />
            </div>
            <div className="mt-auto p-2 rounded-3xl  bg-slate-300">
              {" "}
              {/* SendMessage kutusu */}
              <SendMessage />
            </div>
          </div>
        </div>
     
      
    </>
  );
}

export default Chat;
