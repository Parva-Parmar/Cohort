import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket,setSocket] = useState();
  const inputRef = useRef();
  function sendMessage() {
    if(!socket){
      console.log("here");
      return;
    }
    //@ts-ignore
    socket.send("ping");
  }

  useEffect(() =>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws)

    ws.onmessage = (ev) =>{
      alert(ev.data);
    }
  },[]);

  return (
     <div>
      <input ref={inputRef} type='text' placeholder='Message....'></input>
      <button onClick={sendMessage}> Send</button>
     </div>
  )
}

export default App
