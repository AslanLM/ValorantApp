import React from 'react'

const MapsInfo = ({maps, selectedMap}) => {

  const selectMap = maps.find((map) => map.uuid === selectedMap);


  return (
    <>
     {selectMap && (
            <div className='maps-info-content'>
             <h1>{selectMap.displayName}</h1>
             <p>{selectMap.narrativeDescription}</p>

            </div>
     )}
    </>
  )
}

export default MapsInfo