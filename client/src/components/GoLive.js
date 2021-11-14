import React, { useEffect, useState } from 'react';
import "../style/GoLive.css";
import { Link } from "react-router-dom";
import axios from 'axios';
 
import ReactPlayer from 'react-player';

// import { createStream } from '../apis/createStream';
const streamurl="https://cdn.livepeer.com/hls/b2f8ti3jxfg27vjf/index.m3u8"

//https://cdn.livepeer.com/hls/{playBackStream}/index.m3u8

export default function Viewpage() {

  const [apiKey, setapiKey] = useState('ced26452-f2bd-4173-a0bc-93b4c19628c0')
  const [streamName, setStreamName] = useState('')
  const [streamCategory, setStreamCategory] = useState('')
  const [streamTags, setStreamTags] = useState('')
  const [streamDescription, setStreamDescription] = useState('')
  const [streamData, setStreamData] = useState({})
  const [streamCreated, setstreamCreated] = useState(false)

  const createStream = (apiKey,stream_name) => {
    // POST request using axios with set headers
    const params = JSON.stringify({
        "name": stream_name,
        "profiles": [
          {
            "name": "720p",
            "bitrate": 2000000,
            "fps": 30,
            "width": 1280,
            "height": 720
          },
          {
            "name": "480p",
            "bitrate": 1000000,
            "fps": 30,
            "width": 854,
            "height": 480
          },
          {
            "name": "360p",
            "bitrate": 500000,
            "fps": 30,
            "width": 640,
            "height": 360
          }
        ]
    })
    const headers = { 
        'content-type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    axios.post('https://livepeer.com/api/stream', params, { headers })
        .then(response => {
          console.log(response.data)
          setStreamData(response.data)
          setstreamCreated(true)
        })
        .catch(error=>console.log(error.message))
    }

    const clickToCopy = (e) => {
      var r = document.createRange();
      r.selectNode(e.target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
  }
    console.log(streamCreated);
  return (  
    <div className="GoLive">
        {/* <ReactPlayer
          url={streamurl}
          controls
        /> */}
              {/* <ReactPlayer
          url={`https://cdn.livepeer.com/hls/${streamData.playbackId}/index.m3u8`}
          controls
        /> */}
      {streamCreated===false
        ?(
          <div className='streamCreateForm'>
            <input type='text' name='streamName' onInput={e=>setStreamName(e.target.value)} placeholder='Enter Stream Title'/>
            <input type='text' name='tags' onInput={e=>setStreamTags(e.target.value)} placeholder='Enter Stream Tags'/>
            <input type='text' name='categories' onInput={e=>setStreamCategory(e.target.value)} placeholder='Enter Stream Category'/>
            <input type='text' name='description' onInput={e=>setStreamDescription(e.target.value)} placeholder='Enter Stream Description'/>
            <button onClick={()=>{createStream(apiKey,streamName);console.log('click')}}>Create Stream</button>
          </div>
        )
        :(
          <div className='streamDetailsDisplay'>
            <div>Stream name - {streamData.name}</div>
            <div>Stream streamkey - <span title='click to copy' onClick={e=>clickToCopy(e)}>{streamData.streamKey}</span></div>
            <div>Stream playback url - <span title='click to copy' onClick={e=>clickToCopy(e)}>{`https://cdn.livepeer.com/hls/${streamData.playbackId}/index.m3u8`}</span></div>
            <div>RTMP Ingest URL / Server - <span title='click to copy' onClick={e=>clickToCopy(e)}>{`rtmp://rtmp.livepeer.com/live`}</span></div>
            <div>Stream tags - {streamTags}</div>
            <div>Stream categories - {streamCategory}</div>
            <div>Stream description - {streamDescription}</div>
            <Link style={{textDecoration:"none",textAlign: "center"}} to={'/login'} >
              <div>
                <button>Go to Live Stream !</button>
              </div>
            </Link>
          </div>
        )
      }

  </div>
  );
}
