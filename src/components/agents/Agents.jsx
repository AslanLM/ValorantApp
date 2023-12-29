import React, { useEffect, useState } from 'react'
import './Agents.css'
import AgentsNav from './agentsComponents/AgentsNav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Agents = () => {

  const [ agents, setAgents] = useState([]);


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
        const data = await response.json();
        setAgents(data.data)
      }catch(error){
        console.log("no tan facilito:(", error)
      }
    };
    fetchData();
  }, [])

  console.log(agents)

  return (
    <section className='agents-sc'>
      <div className='agents-sc-content'>
        <div className='agents-sc-info'></div>
        <div className='agents-sc-cards'></div>
        <div className='agents-sc-habilities'></div>
      </div>
      <div className='agents-nav'>
          
              <AgentsNav  agents={agents}/>
         
      </div>
    </section>
  )
}

export default Agents