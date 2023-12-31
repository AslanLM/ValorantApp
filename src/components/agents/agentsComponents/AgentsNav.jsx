import React from 'react'
import Slider from 'react-slick';

const AgentsNav = ({agents, onSelect }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
        },
      },
    ]
  };

  return (
    <>
      
      <Slider {...settings}>
      {agents.map((agent) => (
        <button key={agent.uuid} onClick={() => onSelect(agent.uuid)}> 
          <div className="slider-agents">
            <img src={agent.displayIcon} alt={agent.displayName} />
            
          </div>
        </button>
      ))}
    </Slider>
      
    </>
  )
}

export default AgentsNav