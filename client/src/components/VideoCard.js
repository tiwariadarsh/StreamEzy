import React from 'react'
import '../style/VideoCard.css'

export default function VideoCard(prop) {
    return (
        <div className='videocard'>
            <img width='100%' height='100%'  src={`https://picsum.photos/id/${prop.number*13}/200/200`} alt='Image not found'/>
        </div>
    )
}
