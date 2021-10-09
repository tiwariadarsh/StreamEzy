import React from 'react'
import '../style/VideoCard.css'
import HoverVideoPlayer from 'react-hover-video-player';
import video from '../assets/sample.mp4'

export default function VideoCard(prop) {
    return (
        <div className='videocard'>
            <HoverVideoPlayer
                style={{
                    width:"100%",
                    height:"70%"
                }}
                videoSrc={video}
                sizingMode='container'
                playbackRangeStart={5}
                unloadVideoOnPaused
                restartOnPaused 
                pausedOverlay={
                    <img
                    src={`https://randomfox.ca/images/${prop.number*2+Math.floor((Math.random() * 16) + 1)}.jpg`}
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
                    <div className="loading-spinner" />
                    </div>
                }
            />
            <div style={{height:"10%",backgroundColor:"red"}}>Hello1</div>
            <div style={{height:"10%",backgroundColor:"blue"}}>Hello2</div>
        </div>
    )
}
