import React from 'react'

import Cad2 from "./Cad2"
const Card1 = () => {

const data=[
    {
        id:1,
        headings:"basic",
        line1:"5 Lakhs",
        line2: "Unlimited for cars",
        line3:"Every Car Have Up To 20% Off",
    },
    {
        id:2,
        headings:"medium",
        line1:"10 Lakhs",
        line2: "Limited for cars",
        line3:"Every Car Have Up To 30% Off",
    },
    {
        id:3,
        headings:"preium",
        line1:"15 Lakhs",
        line2: "Limited for cars",
        line3:"Every Car Have Up To 50% Off",
    },
]

  return (
    <div>
        <h1 className='heading'> Service</h1>
       <div className="cards">
       {
        data.map((item)=>{
       const{id,headings,line1,line2,line3}=item
       return(
        <Cad2 headings={headings}line1={line1}line2={line2}line3={line3}/>

       )
        })
       } 
       </div>
        
    </div>
   
  )
}

export default Card1