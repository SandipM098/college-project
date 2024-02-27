import React from 'react'
import Slider from 'react-slick';
import CarNewsCard from './CarNewsCard';
import pic1 from '../../assets/image/img1.jpg'
import pic2 from '../../assets/image/img2.webp'
import pic3 from '../../assets/image/img3.avif'
import pic4 from '../../assets/image/img4.jpg'
import pic5 from '../../assets/image/img5.png'
import pic6 from '../../assets/image/img6.avif'

const CarNews = () => {

  const newsData = [
    {
      id : 0 , 
      img : pic1,
      desc : "Toyota touts internal combustion engine potential, even in Ev age"
    } , 
    {
      id : 1, 
      img : pic2,
      desc : "BMW Group India clocks best-ever annual sales in 2023, leads luxury electric car segment",
    }, 
    {
      id : 2, 
      img : pic3,
      desc : "MG Astor 2024 launched in India, price starts at Rs 9.98 lakh"
    }, 
    {
      id : 3 , 
      img : pic4,
      desc : "Kia Sonet facelift launched in India at Rs 7.99 lakh, Tate Nexon & Maruti Suzuki Brezza rival"
    },
    {
      id : 4 , 
      img : pic5,
      desc : "First Shift: New-vehicle inventory reaches 3-year high"
    }, 
    {
      id : 5 , 
      img : pic6,
      desc : "JLR India sales rise 74% in Q3 on robust demand for Range Rover, Range Rover Velar, Defender"
    }
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidestoscroll: 1,
    autoplay: true,
    autoplaySpeed : 2000,
    pauseOnHover: true, 
    arrows : false,
    responsive : [
      {
        breakpoint : 1023,
        settings:{
          slidesToShow : 3,
          slidestoscroll : 3,
          infinite : true, 
          dots: true,
        }
      },
      {
        breakpoint : 768,
        settings:{
          slidesToShow : 2,
          slidestoscroll : 2,
          initialSlide : 2,
        }
      },
      {
        breakpoint : 480,
        settings:{
          slidesToShow : 1,
          slidestoscroll : 1,
          initialSlide : 2,
        }
      },
      
    ]
  };
  return (
    <div className=' mt-14'>
      <h1 className='font-bold text-4xl text-center'>Car <span className='text-blue-900 '>News & Advices</span></h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, est.</p>

      <div className='mt-8 gap-5'>
        <Slider {...settings}>
            {newsData.map((item) => (
              <CarNewsCard key={item.id} img={item.img} desc={item.desc}/>
            )
            )}
        </Slider>
      </div>
    </div>
  )
}

export default CarNews
