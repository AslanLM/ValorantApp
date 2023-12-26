import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AgentsHome = () => {

    const [character, setCharacter] = useState([])
    const agtRef = useRef(null)


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

  const handleImgLoad=()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.agents',
        start: 'top center',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.utils.toArray('.agt').forEach(agt =>{
      const speed = agt.dataset.speed;
      const movement = (agt.offsetHeight * speed)
      tl.to(agt, {
        y: movement,
        ease: 'none',
      }, 0)
    })
  }
 
  useEffect(() => {
    if (character.length > 0) {
      // Configuración de animación
      handleImgLoad();
    }
  }, [character]);

  return (
    <section className='agents' ref={agtRef}>
       <div className='agt-content'>

      
        {character.length > 0 && (
            <div className='agt agt-img1' data-speed='-0.1' key={character[0].uuid}>
            <img src={character[0].fullPortrait} alt={character.displayName} onLoad={handleImgLoad}/>
            </div>
         )}

        {character.length > 0 && (
            <div className='agt agt-img2' data-speed='-0.1' key={character[1].uuid}>
            <img src={character[1].fullPortrait} alt={character.displayName} onLoad={handleImgLoad}/>
            </div>
         )}

       
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