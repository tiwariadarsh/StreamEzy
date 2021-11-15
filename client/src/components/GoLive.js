import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { createStream } from '../apis/createStream';
import "../style/GoLive.css";
const streamurl="https://cdn.livepeer.com/hls/3e9clqo7i819cl9x/index.m3u8"

//https://cdn.livepeer.com/hls/{playBackStream}/index.m3u8

export default function Viewpage() {

  const [apiKey, setapiKey] = useState('ced26452-f2bd-4173-a0bc-93b4c19628c0')
  const [streamName, setStreamName] = useState('ankit1')
  const [streamData, setStreamData] = useState({})

  return (  
    <div className="App">
      <header className="App-header">
        <ReactPlayer
        url={streamurl}
        width="50%"
        heigh="100%"
        />
      </header>
     
      <button className="cool" onClick={()=>createStream(apiKey,streamName)}>Create Stream</button>
      
  </div>
  );
}
