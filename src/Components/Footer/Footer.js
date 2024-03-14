import React from 'react'
import { Link } from 'react-router-dom'

import "../Footer/Footer.css"

import insta from "../../Asets/instalogo.png";
import face from "../../Asets/face.png";
import twt from "../../Asets/twiet.png"

const Footer = () => {
    const  social=[insta,face,twt]
  return (
    <footer>
        <h1>Sai Rapping</h1>
        <div className="links">
            <h3>Usefull Links</h3>
          <div className="link">
          <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Service">Service</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="social">
     {
        social.map((item)=>{
            return(
              <img src={item} alt="" />
                )
        })
        
     }
        </div>
    </footer>
  )
}

export default Footer