import React from 'react';
 
import ReactPlayer from 'react-player';
const streamurl="https://cdn.livepeer.com/hls/f2c08zvz4pkh3xa0/index.m3u8"

export default function Viewpage() {
    return (
      
      <div className="App">
        
      <header className="App-header">
        <ReactPlayer
        url={streamurl}
        width="100%"
        heigh="100%"
        />
     </header>

   </div>
    );
}


