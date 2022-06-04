import React from 'react'
import "../styles/VideoCard.css"

const PlayButtom = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M18.3 36.4Q17.55 36.9 16.775 36.45Q16 36 16 35.1V12.6Q16 11.7 16.775 11.25Q17.55 10.8 18.3 11.3L36 22.6Q36.7 23.05 36.7 23.85Q36.7 24.65 36 25.1Z"/></svg>
const VideoCard = ({ src, index, name }) => {
  return (
    <div className="VideoCard" style={{ backgroundImage: `url(${src})` }}>
      <a href="#/">{PlayButtom}</a>
      <p>{name}</p>

    </div>
  )
}

export default VideoCard