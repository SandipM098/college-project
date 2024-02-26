import React from 'react'

const FeatureCar = ( {id, img, name, price } ) => { 
  return (
    <div className='border-2 border-zinc-900 bg-slate-100 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear'>
      <div >
        <img key={id} src={img} alt="img" className='rounded-t-xl w-full'/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-xl text-blue-900 pt-2'>{name}</h1>
        <div className='flex fap-10 pt-2'>
            <h2 className='font-medium text-lg'>Starting at ${price}</h2>
        </div>
      </div>
    </div>
  )
}

export default FeatureCar;
