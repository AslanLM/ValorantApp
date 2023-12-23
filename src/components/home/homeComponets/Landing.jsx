import React, { useEffect, useState } from 'react'


const Landing = () => {

  const [characters, setCharacters] = useState([])


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch('https://valorant-api.com/v1/agents');
          const data = await response.json();
          setCharacters(data.data.slice(0,1))
      }catch(error){
        console.log('diay papi no puedo?', error)
      } 
    }
    fetchData();
  }, [])



  return (
    <div className='landing-page'>
      <div className='banner'></div>
      <div className='border'></div>
      <div className='border2'></div>
      <div className='last-detail'></div>
      <div className='title'>
        <h1>vAlorant</h1>
      </div>
  
        {characters.map((character) =>(
            <div className='img-banner' key={character.uuid}>
              <img src={character.fullPortrait} alt={character.displayName} />
            </div>
          ))}

        {characters.map((character) =>(
            <div className='img-banner2' key={character.uuid}>
              <img src={character.background} alt={character.displayName} />
            </div>
          ))} 
          

    </div>
  )
}

export default Landing