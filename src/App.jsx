import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Chat from './components/Chat';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>

      <Routes path="/">
        <Route index element={<Login/>} />
        <Route path="chatapp" element={<Chat  />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
