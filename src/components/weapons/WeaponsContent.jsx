import React from 'react'
import Slider from 'react-slick';

const WeaponsContent = ({weapons}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
            },
          },
        ]
      };

  return (
    <>

    <Slider {...settings}>
      {weapons.map((weapon) => (
        <div key={weapon.uuid} className="slider-weapons">
            <div className='weapon-img-content'>
                <img src={weapon.displayIcon} alt={weapon.displayName} />
            </div>
            <div className='weapon-info'>
                <div className='bg-weapons-sc'></div>
                <div className='weapon-info-content'>
                    <h1>{weapon.displayName}</h1>
                    <h2>{weapon.shopData?.category}</h2>
                </div>
            </div>
        </div>
      ))}
    </Slider>

    </>
  )
}

export default WeaponsContent