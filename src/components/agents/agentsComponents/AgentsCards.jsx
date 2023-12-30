import React, { useRef } from 'react'

const AgentsCards = ({ agents, selectedAgent }) => {

    const agtRef = useRef(null)
    const selectAgent = agents.find((agent) => agent.uuid === selectedAgent); 

  return (
    <div className='agents-sc-cards' ref={agtRef}>
    {selectAgent && (
        <div  key={selectAgent.uuid} className='agentcards-banner'>
            <img src={selectAgent.fullPortrait} alt={selectAgent.displayName}/>
        </div>
    )}
    </div>
  )
}

export default AgentsCards