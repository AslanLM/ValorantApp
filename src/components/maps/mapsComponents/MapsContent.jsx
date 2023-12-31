import React from 'react'
import Slider from 'react-slick';

const MapsContent = ({maps, onSelectMap}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,  
        slidesToScroll: 1
      };

    

  return (
    <>
        <Slider {...settings}>     
        {maps.map((map) => (
            <div key={map.uuid} className="slider-map" onMouseOver={() => onSelectMap(map.uuid)}>         
                    <img src={map.splash} alt={map.displayName} />
                    <span>Double click on the <br/>image to see the info</span>
                    <div className='icon-map'>
                    {map.displayIcon && <img src={map.displayIcon} alt={map.displayName} />}
                    </div>
            </div>
            ))}
        </Slider>
    </>
  )
}

export default MapsContent