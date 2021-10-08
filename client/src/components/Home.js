import React from 'react'
import VideoCard from "./VideoCard";
import '../style/Home.css'

export default function Home() {
    return (
        <div className='home'>  
            {
                Array.from({length: 5*Math.floor((Math.random() * 6) + 3)}, (x, i) => <VideoCard number={i}/>)
            }  
        </div>
    )
}
