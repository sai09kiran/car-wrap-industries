import React, { useState } from 'react'

import Modal from './Modal'

const CallToAction = () => {

    const[modal,setmodal]=useState(false)

    const handleClick=()=>{
setmodal(!modal)
    }
  return (
    <div>
        <section className="call-to-action">
         
         <h2>Hurry Up Book Your Solt!</h2>

         <button onClick={handleClick}>Konw More</button>

        {
            modal && <Modal  handleClick={handleClick}/>
        }
        </section>
    </div>
  )
}

export default CallToAction