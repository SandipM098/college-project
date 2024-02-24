import React from 'react'

const FeatureCar = ( {id, img, name, price } ) => { 
  return (
    <div>
      <div >
        <img key={id} src={img} alt="img"/>
      </div>
      <div>
        <h1>{name}</h1>
        <div>
            <h2>Starting at ${price}</h2>
        </div>
      </div>
    </div>
  )
}

export default FeatureCar;
