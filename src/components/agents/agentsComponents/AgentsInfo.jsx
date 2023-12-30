import React from 'react';

const AgentsInfo = ({ agents, selectedAgent }) => {
  const selectAgent = agents.find((agent) => agent.uuid === selectedAgent); 

  return (
    <div className='agents-sc-info'>
    {selectAgent && (
        <div key={selectAgent.uuid} className='agentinfo-content'>
          <h1>{selectAgent.displayName}</h1>
          <div className='agentinfo-role'>
            <strong>role:</strong>
            <div className='role-content'>
              <h2>{selectAgent.role.displayName}</h2>
              <img src={selectAgent.role.displayIcon} alt={selectAgent.displayName} />
            </div>
          </div>
          <div className='agentinfo-descripcion'>
            <strong>description:</strong>
            <p>{selectAgent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgentsInfo;