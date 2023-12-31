import React, { useEffect, useState } from 'react'
import './Maps.css'
import MapsContent from './mapsComponents/MapsContent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MapsInfo from './mapsComponents/MapsInfo';

const Maps = () => {

  const [maps, setMaps] = useState([])
  const [selectedMap, setSelectedMap] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/maps');
        const data = await response.json();
        setMaps(data.data)
      }catch(error){
        console.log("soy el mapa, soy el mapa!", error)
      }
    };
    fetchData();
  }, [])

  console.log(maps)


  return (
    <section className='maps-sc'>
      <div className='maps-info'>
        <MapsInfo maps={maps} selectedMap={selectedMap}/>
      </div>
      
      <div className='maps-sc-content'>
        <MapsContent maps={maps} onSelectMap={(uuid) => setSelectedMap(uuid)}/>
      </div>
  </section>
  )
}

export default Maps