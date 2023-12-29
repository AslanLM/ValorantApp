import React from 'react'
import Slider from 'react-slick';

const AgentsNav = ({agents}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,  
        slidesToScroll: 1
      };

  return (
    <>
      
      <Slider {...settings}>
      {agents.map((agent) => (
        <div key={agent.uuid} className="slider-agents">
          <img src={agent.displayIcon} alt={agent.displayName} />
          
        </div>
      ))}
    </Slider>
      
    </>
  )
}

export default AgentsNav