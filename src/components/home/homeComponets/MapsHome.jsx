import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MapsHome = ({mapId}) => {

    const [ map, setMap] = useState([])

    
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch(`https://valorant-api.com/v1/maps/${mapId}`);
          const data = await response.json();
          setMap(data.data)
      }catch(error){
        console.log('diay papi no puedo?', error)
      } 
    }
    fetchData();
  }, [mapId])


  return (
    <section className='maps'> 
    <div className='maps-content'>
        <div className='content-description'>
            <h1>your <br/>maps</h1>
            <h2>Fight around the world</h2>
            <p>
            Each map is a battlefield to showcase your creative thinking. They are specially designed for team strategies, spectacular plays, and moments to come back. Make the move that others will imitate in the future.
            </p>
            <div className='maps-button'>
                <span>
                    <NavLink to='/maps'>All Maps</NavLink>
                </span>
            </div>
        </div>
        <div className='map-img-container'>
            
            {map && (
                <div className='map-img-banner' key={map.uuid}>
                <img src={map.splash} alt={map.displayName} />
                </div>
            )}
        </div>
    </div>
    </section>
  )
}

export default MapsHome