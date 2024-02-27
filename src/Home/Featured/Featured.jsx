import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import FeatureCar from "./FeatureCar.jsx";
import img1 from '../../assets/image/car1.jpg'
import img2 from '../../assets/image/car2.jpg'
import img3 from '../../assets/image/car3.jpg'
import img4 from '../../assets/image/car4.jpg'
import img5 from '../../assets/image/car5.jpg'
import img6 from '../../assets/image/car6.jpg'


export default function Featured(){
    const carsData = [
      {
        id: 0,
        img : img1,
        name: "Toyota Agya",
        price: "25,000",
      },
      {
        id: 1,
        img: img2,
        name: "Suzuki Swift ZXI",
        price: "30,000",
      },
      {
        id: 2,
        img: img3,
        name: "BMW X5",
        price: "33,000",
      },
      {
        id: 3,
        img: img4,
        name: "Mercedez CLS",
        price: "35,000",
      },
      {
        id: 4,
        img: img5, 
        name: "Ford Mustang Shelby GT 500",
        price: "38,000",
      },
      {
        id: 5,
        img: img6,
        name: "Audi R8",
        price: "40,000",
      }
    ]
  ;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidestoscroll: 1,
    autoplay: true,
    speed: 2000,
    autoplayspeed : 2000,
    cssEase : "linear",
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
    <div className="mt-14">
      <h1 className="font-bold text-4xl text-center">
        Feature <span className="text-blue-600">Cars</span>
      </h1>

      <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>

      <div className="mt-8">
        <Slider {...settings} >
          {carsData.map((item) =>(
            <FeatureCar
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}



