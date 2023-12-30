import React, { useRef } from 'react'

const AgentsAbilities = ({ agents, selectedAgent }) => {

    const agtRef = useRef(null)
    const selectAgent = agents.find((agent) => agent.uuid === selectedAgent); 

  return (

    <div className='agents-sc-abilities' ref={agtRef}>
      <div className='agentsabilities-wrap'>
      <h1>Abilities</h1>

    {selectAgent && selectAgent.abilities && (
      <div key={selectAgent.uuid} className='agentabilities-content'>
        {selectAgent.abilities.map((ability, index) => (
          <div key={index} className='abilities-info'>
            <h2>{ability.displayName}</h2>
            <img src={ability.displayIcon} alt={ability.displayName} />
          </div>
        ))}
      </div>
    )}
      </div>
    </div>
  )
}

export default AgentsAbilities


