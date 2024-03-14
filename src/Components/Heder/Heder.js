import "./Heder.css"

import Hederimg from "../../Asets/lambo.png"

const Heder = ({hed}) => {
  return (
   <div className="heder" style={{backgroundImage:`url(${Hederimg})` , backgroundSize :"cover" , backgroundPosition : "fixed"}}>
    <h1>{hed}</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, natus!</p>
   </div>
  )
}

export default Heder