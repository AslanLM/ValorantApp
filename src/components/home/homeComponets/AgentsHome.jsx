import React, { useRef } from 'react'

const AgentsHome = ({characters}) => {

    const agtRef = useRef(null)

      return (
        <div className='agents' ref={agtRef}>
      
          {characters.length > 0 && (
            <div className='agt-img1' key={characters[0].uuid}>
              <img src={characters[0].fullPortrait} alt={characters[0].displayName}/>
            </div>
          )}
  
          {characters.length > 0 && (
            <div className='agt-img2' key={characters[1].uuid}>
              <img src={characters[1].fullPortrait} alt={characters[1].displayName} />
            </div>
          )}
          <div className='home-cont-title'>
            <h1>All Agents</h1>
          </div>
      </div>
    );
  };
  
  export default AgentsHome;