import React, { useEffect, useState } from 'react'
import Landing from '../home/homeComponets/Landing'
import './Home.css'
import About from './homeComponets/About'
import AgentsHome from './homeComponets/AgentsHome'
import MapsHome from './homeComponets/MapsHome'

const Home = () => {

  return (
    <main className='home'>    
        <Landing characterId='e370fa57-4757-3604-3648-499e1f642d3f'/>

        <About/>

        <AgentsHome/>

        <MapsHome mapId='7eaecc1b-4337-bbf6-6ab9-04b8f06b3319'/>
    </main>
  )
}

export default Home