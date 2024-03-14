

import React, {useState} from 'react'
import "../Components/Home.css"
const data=[
    {
        Question:"Question1",
        Anwser:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptates"
    },
    {
        Question:"Question2",
        Anwser:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptates"
    },
    {
        Question:"Question3",
        Anwser:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptates"
    },
    {
        Question:"Question4",
        Anwser:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptates"
    },
    {
        Question:"Question5",
        Anwser:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptates"
    },
    
]

const Faq = () => {

   

const[selected,setselected]= useState(null)

const handleselect=(i)=>{
setselected(i);
console.log(i)
}
  return (
    <div>
         <h1 className="heading"> FAQS  </h1>
        <section className="faq">
        <div className="item">
            {
                data.map((item, i)=>{
                    return(
                        <div div className='wrapper'key={i}>
                        <div className="Question" onClick={()=>handleselect(i)}>
                            <h3>{item.Question}</h3>
                            <img src={require("../../../Asets/up2arrow.png")} alt="" />
                        </div>
                        <div className={selected ? "Anwser show" : "Anwser"}>
                            <p>{item.Anwser}</p>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </section>
    </div>
  )
}

export default Faq