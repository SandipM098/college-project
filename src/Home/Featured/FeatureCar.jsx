import React from 'react'

export default function FeatureCar({id, image, name, price}) {
  return (
    <div>
      <div>
        <img src={image} alt=''/>
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
