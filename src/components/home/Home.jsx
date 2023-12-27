import React, { useEffect, useState } from 'react'
import Landing from '../home/homeComponets/Landing'
import './Home.css'
import AgentsHome from './homeComponets/AgentsHome'
import MapsHome from './homeComponets/MapsHome'
import WeaponsHome from './homeComponets/WeaponsHome'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [characters, setCharacters] = useState([]);
  const [maps, setMaps] = useState([]);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charactersResponse, mapsResponse, weaponsResponse] = await Promise.all([
          fetch('https://valorant-api.com/v1/agents'),
          fetch('https://valorant-api.com/v1/maps'),
          fetch('https://valorant-api.com/v1/weapons')
        ]);

        const charactersData = await charactersResponse.json();
        const mapsData = await mapsResponse.json();
        const weaponsData = await weaponsResponse.json();

        setCharacters(charactersData.data.slice(3, 5));
        setMaps(mapsData.data.slice(0, 1));
        setWeapons(weaponsData.data.slice(7, 18));
      } catch (error) {
        console.log('Algo salió mal:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <main className='home'>    
        <Landing characterId='e370fa57-4757-3604-3648-499e1f642d3f'/>

        <section className='home-content'>
          <NavLink to='/agents'>
            <div className='img-content'>
              <div className='img-border'></div>
              <div className='bg-logo'></div>
              <div className='agent-content'>          
                <AgentsHome characters={characters} />
              </div>
              <div className='img-detail-cir'></div>
            </div>
          </NavLink>

          <NavLink to='/maps'>
            <div className='img-content'>
              <div className='img-border'></div>
              <div className='bg-logo'></div>
              <div className='map-content'>
                <MapsHome maps={maps} />
              </div>
              <div className='img-detail-cir'></div>
            </div>
          </NavLink>

          <NavLink to='/weapons'>
            <div className='img-content'>
              <div className='img-border'></div>
              <div className='bg-logo'></div>
              <div className='weapon-content'>
                <WeaponsHome weapons={weapons} />
              </div>
              <div className='img-detail-cir'></div>
            </div>
          </NavLink>
        </section>       

       
    </main>
  )
}

export default Home