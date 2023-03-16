import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import oon from '../assets/3.jpg';
import ooi from '../assets/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='Services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>

        <div>
          <img src={oon} alt="Item1" />
          <p className='legend'>Full stack</p>
        </div>

        <div>
          <img src={ooi} alt="Item2" />
          <p className='legend'>Peer to Peer support</p>
        </div>

      </Carousel>
    </div>
  )
}

export default Services