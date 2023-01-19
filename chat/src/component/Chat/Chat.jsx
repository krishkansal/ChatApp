import React from 'react'
import {user} from "../Join/Join";
import socketIo from "socket.io-client";
import { useEffect } from 'react';
import "./chat.css";
import sendLogo from"../../images/sendLogo.png";


const ENDPOINT = "http://localhost:4500/";

const Chat = () => {

  const socket = socketIo(ENDPOINT,{ transports: ['websocket']});

  useEffect(()=>{
    socket.on('connect',()=>{
      alert('connected');
    })
    return ()=>{

    }
  },[socket]);

  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <div className='chatBox'></div>
        <div className='inputBox'>
          <input type="text" id='chatInput' />
          <button className='sendBtn'><img src={sendLogo} alt="send" /></button>
        </div>
      </div>
    </div>
  )
}


export default Chat;

