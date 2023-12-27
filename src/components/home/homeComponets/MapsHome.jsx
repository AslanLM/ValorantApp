import React, { useRef } from 'react'

const MapsHome = ({maps}) => {

    const mapRef = useRef(null)

      return (
        <div className='maps' ref={mapRef}> 
              
          {maps.length > 0 && (
              <div className='map-img' key={maps[0].uuid}>
              <img src={maps[0].splash} alt={maps[0].displayName} />
              </div>
          )}

        <div className='home-cont-title'>
          <h1>All Maps</h1>
        </div>
        
        </div>
      )
}

export default MapsHome