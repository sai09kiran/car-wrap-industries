import React from 'react'

const Form = () => {
  return (
    <> 
    <h1 className='heading'> Contact Us</h1>
   
   <section>
   <form>
      <div className="field">
        <p>Name</p>
     <input type="text" name="text" id="" />
      </div>
      <div className="field">
        <p>Email</p>
     <input type="email" name="email" id="" />
      </div>
      <div className="field">
        <p>Phone Number</p>
    <input type="number" name="number" id="" />
      </div>
      <div className="button">
        <input type="button" value="Submit" />
      </div>
    </form>

    
   </section>
    </>
  )

};

export default Form