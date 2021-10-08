import React from 'react'
import '../style/VideoCard.css'

export default function VideoCard(prop) {
    return (
        <div className='videocard'>
            <img width='100%' height='100%'  src={`https://randomfox.ca/images/${prop.number*2+Math.floor((Math.random() * 16) + 1)}.jpg`} alt='Image not found'/>
        </div>
    )
}
