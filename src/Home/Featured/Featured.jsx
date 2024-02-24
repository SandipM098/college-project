import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import FeatureCar from "./FeatureCar.jsx";

export default function Featured(){
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
    <div>
      <h1 className="font-bold text-4xl text-center">
        Feature <span className="text-blue-600">Cars</span>
      </h1>

      <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>

      <div>
        <Slider {...settings} >
          {carsData.map((item) =>(
            <FeatureCar
            key={item.id}
            name={item.name}
            url={item.img}
            price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}



