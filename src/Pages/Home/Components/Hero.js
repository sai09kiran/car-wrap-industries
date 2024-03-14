import React from 'react'

import video from "../../../Asets/video.mp4.mp4"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} autoPlay loop muted></video>

          <div className="content">
            <h1>Sai Rapping and Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, animi hic.</p>
           
           <div className="buttons">
            <Link to="/Service"> try now</Link>
            <Link to ="/Contact"> Ask me </Link>
           </div>
          </div>


    </div>
  )
}

export default Hero