import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeatureCar from "./FeatureCar.jsx";
import img1 from "../../assets/image/car1.jpg";
import img2 from "../../assets/image/car2.jpg";
import img3 from "../../assets/image/car3.jpg";
import img4 from "../../assets/image/car4.jpg";
import img5 from "../../assets/image/car5.jpg";
import img6 from "../../assets/image/car6.jpg";

export default function Featured() {
  const carsData = [
    { id: 0, img: img1, name: "Toyota Agya", price: "25,000" },
    { id: 1, img: img2, name: "Suzuki Swift ZXI", price: "30,000" },
    { id: 2, img: img3, name: "BMW X5", price: "33,000" },
    { id: 3, img: img4, name: "Mercedes CLS", price: "35,000" },
    { id: 4, img: img5, name: "Ford Mustang Shelby GT 500", price: "38,000" },
    { id: 5, img: img6, name: "Audi R8", price: "40,000" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-16 px-6">
      <h1 className="font-bold text-4xl md:text-5xl text-center mb-6">
        Featured <span className="text-blue-600">Cars</span>
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Discover our premium selection of vehicles, crafted for performance and
        style.
      </p>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCar
              key={item.id}
              id={item.id}
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
