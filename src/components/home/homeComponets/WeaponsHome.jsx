import React, { useRef } from 'react'

const WeaponsHome = ({weapons}) => {

    const weaponRef = useRef(null)

  return (

    <div className='weapons' ref={weaponRef}>

  
        {weapons.length > 0 && (
            <div className='wp-img' key={weapons[0].uuid}>
              <img src={weapons[8].skins[0].displayIcon} alt={weapons[0].displayName} />
            </div>
        )}
         <div className='home-cont-title'>
            <h1>All Weapons</h1>
          </div>

    </div>
  )
}

export default WeaponsHome