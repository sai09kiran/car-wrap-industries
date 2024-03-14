import  "./Navbar.css"

import { Link } from "react-router-dom"

import { FaTimes,FaBars }from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {

const[click,setclick]=useState(false)

const handleclick=()=>{
   setclick(!click)
}
const [color ,setcolor]=useState(false)
const handlecolor=()=>{

   if(window.scrollY >=200){
      setcolor(true);
   }else{
      setcolor(false);
   }
}
window.addEventListener("scroll", handlecolor)
  return (
    <nav className={color ? "color" : ""}>
    <div className="logo">
    <h1>Sai Rapping</h1>
        </div>
    
    <div className={click? "menu active" : "menu"}>
       <Link to ="/">Home</Link>
       <Link to ="/Aboutpage">About</Link>
       <Link to ="/Service">Service</Link>
       <Link to ="/Contact">Contact</Link>
    </div>

 <div className="humburger" onClick={handleclick}>
   {click?(
       <FaTimes style={{color:"white"}} size={25}/>
   ):(
      <FaBars style={{color:"white"}} size={25}/>
   )
     
   }

 </div>


    </nav>
  )

};

export default Navbar