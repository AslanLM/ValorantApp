import React, { useEffect, useState } from 'react'
import './Agents.css'
import AgentsNav from './agentsComponents/AgentsNav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AgentsInfo from './agentsComponents/AgentsInfo';
import AgentsCards from './agentsComponents/AgentsCards';
import AgentsAbilities from './agentsComponents/AgentsAbilities';
import ClipPathVal from '../home/ClipPathVal'

const Agents = () => {

  const [ agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);


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

  const handleAgentSelect = (uuid) => {
    setSelectedAgent(uuid);
  };


  return (
    <section className='agents-sc'>
        {selectedAgent ? (
          <>
      <div className='agents-sc-content'>

        <AgentsInfo agents={agents} selectedAgent={selectedAgent}/>
       
       <AgentsCards agents={agents} selectedAgent={selectedAgent}/> 
       
       <AgentsAbilities agents={agents} selectedAgent={selectedAgent} />

      </div>
      </>
        ) : (
          <div className='empty-banner'>
          <ClipPathVal/>
        </div>
      )}
      <div className='agents-nav'>
          
        <AgentsNav  agents={agents} onSelect={handleAgentSelect}/>
         
      </div>
    </section>


    
  )
}

export default Agents