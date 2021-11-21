import React from 'react'
import '../style/VideoCard.css'
import HoverVideoPlayer from 'react-hover-video-player';
//import video from '../assets/sample.mp4'

export default function VideoCard(prop) {
    console.log(prop.videoObj);
    return (
        <div onClick={() => { prop.onRouteChange('view'); prop.onVideoView(prop.videoLink,prop.videoId,prop.videoObj)}}  className='videocard'>
            <HoverVideoPlayer
                style={{
                    width:"100%",
                    height:"80%"
                }}
                videoSrc={prop.videoLink}
                sizingMode='container'
                playbackRangeStart={Math.floor((Math.random() * 60) + 5)}
                unloadVideoOnPaused
                restartOnPaused 
                pausedOverlay={
                    <img
                    src={prop.imglink}
                    alt=""
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    />
                }
                loadingOverlay={
                    <div className="loading-overlay">
                        <div className="loading-spinner"/>
                    </div>
                }
            />
            <div style={{height:"20%",backgroundColor:"white"}}>{prop.title}</div>
        </div>
    )
}
