import React from 'react'

const Card2 = ({headings,line1,line2,line3}) => {
  return (
    <div>
      <div className="card">
        <h2>{headings}</h2>

        <div className="content">
          <p>{line1}</p>
          <p>{line2}</p>
          <p> {line3}</p>
        </div>

      </div>

    </div>
  )
}

export default Card2