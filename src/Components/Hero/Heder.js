import "./Hero.css"

import Heroimg from "../../Asets/rap.png"

const Hero = () => {
  return (
   <div className="hero" style={{backgroundImage:`url(${Heroimg})` , backgroundSize :"cover" , backgroundPosition : "fixed"}}>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, natus!</p>
   </div>
  )
}

export default Hero