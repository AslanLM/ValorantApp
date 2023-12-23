import React, { useEffect, useState } from 'react'
import Landing from '../home/homeComponets/Landing'
import './Home.css'
import HomeNav from './homeComponets/HomeNav'

const Home = () => {

  const [characters, setCharacters] = useState([])


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch('https://valorant-api.com/v1/agents');
          const data = await response.json();
          setCharacters(data.data.slice(0,2))
      }catch(error){
        console.log('diay papi no puedo?', error)
      }
    }
    fetchData();
  }, [])


  return (
    <main className='home'>    
        <Landing />

        <HomeNav/>
    </main>
  )
}

export default Home