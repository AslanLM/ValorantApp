import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = ({characterId}) => {

  const [character, setCharacter] = useState([])
  const landingRef = useRef(null)


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


 
    const handleImgLoad=()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.landing-page',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.utils.toArray('#layer').forEach(layer =>{
      const speed = layer.dataset.speed;
      const movement = (layer.offsetHeight * speed)
      tl.to(layer, {
        y: movement,
        ease: 'ease-in',
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
    <div className='landing-page' ref={landingRef}>
      <div className='banner'></div>
      <div className='border'></div>
      <div className='border-detail'></div>
      <div id='layer' className='title' data-speed='0.5'>
        <h1>vAlorant</h1>
      </div>
  
      {character && (
        <div id='layer' className='img-banner' data-speed='-0.18' key={`${character.uuid}-fullPortrait`}>
          <img src={character.fullPortrait} alt={character.displayName}  onLoad={handleImgLoad}/>
        </div>
      )}

      {character && (
        <div id='layer' className='img-banner2' data-speed='0.3' key={`${character.uuid}-background`}>
          <img src={character.background} alt={character.displayName}  onLoad={handleImgLoad}/>
        </div>
      )}
          

    </div>
  )
}

export default Landing