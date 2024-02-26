import React from 'react'
import CarsCard from './CarsCard';

const OurCars = () => {
    const carsData = [
        {
          id: 0,
          img: "/src/assets/image/carOne.jpg",
          name: "Toyota Car",
          price: "30,000",
        },
        {
          id: 1,
          img: "/src/assets/image/carOne.jpg",
          name: "Toyota Car",
          price: "30,000",
        },
        {
          id: 2,
          img: "/src/assets/image/carOne.jpg",
          name: "Toyota Car",
          price: "30,000",
        },
        {
          id: 3,
          img: "/src/assets/image/carOne.jpg",
          name: "Toyota Car",
          price: "30,000",
        },
        {
          id: 4,
          img: "/src/assets/image/carOne.jpg", 
          name: "Toyota Car",
          price: "30,000",
        },
        {
          id: 5,
          img: "/src/assets/image/carOne.jpg",
          name: "Toyota Car",
          price: "30,000",
        }
      ]
    ;
  return (
    <div className='pt-24'>
      <div>
        <h1 className='font-bold text-4xl text-center'>Our <span className='text-blue-900'>Cars</span></h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        {carsData.map((item) =>
        (
            <div>
                <CarsCard 
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                />
            </div>
        )
        )}
      </div>
    </div>
  )
}

export default OurCars
