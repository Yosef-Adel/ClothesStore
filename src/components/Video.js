import React from 'react'
import classes from './style/video.module.css'
import img from '../img/videobg.png'
const Video = () => {
  return (
    <div className={classes.vContainer}>
        <h1 >
        Montu®
        </h1>

        <div className={classes.videoContainer}>
            <img src={img} alt='video'/>
        </div>
    </div>
  )
}

export default Video