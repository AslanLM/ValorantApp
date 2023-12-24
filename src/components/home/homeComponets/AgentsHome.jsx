import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const AgentsHome = () => {

    const [character, setCharacter] = useState([])


    useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch('https://valorant-api.com/v1/agents');
          const data = await response.json();
          setCharacter(data.data.slice(3, 5))
      }catch(error){
        console.log('diay papi no puedo?', error)
      } 
    }
    fetchData();
  }, [])

  return (
    <section className='agents'>
       <div className='agt-content'>
        <div className='agt-images'>

        {character.length > 1 && (
            <div className='agt-img1' key={character[1].uuid}>
            <img src={character[1].fullPortrait} alt={character.displayName} />
            </div>
        )}

        {character.length > 0 && (
            <div className='agt-img2' key={character[0].uuid}>
            <img src={character[0].fullPortrait} alt={character.displayName} />
            </div>
         )}

        </div>
        <div className='content-description'>
            <h1>your <br/> agents</h1>
            <h2>creativity is your best weapon.</h2>
            <p>
            Beyond weapons and bullets, you'll be able to choose an agent endowed with versatile, 
            swift, and lethal skills with which you'll create opportunities to excel. No agent will play the same, 
            and no memorable moment will look the same.
            </p>
            <div className='agt-button'>
                <span>
                    <NavLink to='/agents'>All Agents</NavLink>
                </span>
            </div>
        </div>
       </div>
       <div className='border2'></div>
    </section>
  )
}

export default AgentsHome