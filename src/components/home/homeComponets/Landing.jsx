import React, { useEffect, useState } from 'react'


const Landing = ({characterId}) => {

  const [character, setCharacter] = useState([])


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch(`https://valorant-api.com/v1/agents/${characterId}`);
          const data = await response.json();
          setCharacter(data.data)
      }catch(error){
        console.log('diay papi no puedo?', error)
      } 
    }
    fetchData();
  }, [characterId])



  return (
    <div className='landing-page'>
      <div className='banner'></div>
      <div className='border'></div>
      <div className='border2'></div>
      <div className='border-detail'></div>
      <div className='title'>
        <h1>vAlorant</h1>
      </div>
  
      {character && (
        <div className='img-banner' key={`${character.uuid}-fullPortrait`}>
          <img src={character.fullPortrait} alt={character.displayName} />
        </div>
      )}

      {character && (
        <div className='img-banner2' key={`${character.uuid}-background`}>
          <img src={character.background} alt={character.displayName} />
        </div>
      )}
          

    </div>
  )
}

export default Landing