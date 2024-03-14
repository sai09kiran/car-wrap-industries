import React from 'react'

const About = () => {
  return (

    <>

<h1 className='heading'>About us</h1>

<div className="about">
  
    <img src={require("../../../Asets/ben.png")} alt="" />
    <div className="content">
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum assumenda atque in reprehenderit eaque iure, sit iusto ratione magnam placeat!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum assumenda atque in reprehenderit eaque iure, sit iusto ratione magnam placeat!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt illum quos animi!</p>
    </div>
</div>

    </>
  )
}

export default About