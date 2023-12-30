import React, { useEffect, useState } from 'react'
import './Weapons.css'
import WeaponsContent from './WeaponsContent'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Weapons = () => {

  const [weapons, setWeapons] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/weapons');
        const data = await response.json();
        setWeapons(data.data)
      }catch(error){
        console.log("no tan facilito:(", error)
      }
    };
    fetchData();
  }, [])

  console.log(weapons)

  
  return (
    <div className='weapons-sc'>
      <div className='weapons-info'>
        <h1>Choose your <span>weapon</span></h1>
        <p>Creativity is your greastest weapon</p>
      </div>

      <div className='weapons-sc-content'>
      <WeaponsContent weapons={weapons} />
      </div>
    </div>
  )
}

export default Weapons