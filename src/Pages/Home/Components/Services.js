import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../Asets/BMW.png"
import img2 from "../../../Asets/defender.png"
import img3 from "../../../Asets/lambo.png"
import img4 from "../../../Asets/posh.png"
import img5 from "../../../Asets/thar.png"

const Services = () => {
  const images=[img1,img2,img3,img4,img5]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
<h1 className='heading'>Service</h1>
<div className="service">
  
        
        <Slider {...settings}>
          {
            images.map((image)=>{
              return(
                <div key={image}>
                <img src={image} alt="" />
               </div>
              )
            })
          }
          {/*
          <div>
          <img src={img2} alt="" />
          </div>
          <div>
          <img src={img3} alt="" />
          </div>
          <div>
          <img src={img4} alt="" />
          </div>
          <div>
          <img src={img5} alt="" />
          </div> */}
         
        </Slider>
      </div>
</div>
   
  )

}

export default Services