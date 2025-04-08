import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarNewsCard from "./CarNewsCard";
import pic1 from "../../assets/image/img1.jpg";
import pic2 from "../../assets/image/img2.webp";
import pic3 from "../../assets/image/img3.avif";
import pic4 from "../../assets/image/img4.jpg";
import pic5 from "../../assets/image/img5.png";
import pic6 from "../../assets/image/img6.avif";

const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: pic1,
      desc: "Toyota touts internal combustion engine potential, even in EV age",
    },
    {
      id: 1,
      img: pic2,
      desc: "BMW Group India clocks best-ever annual sales in 2023, leads luxury electric car segment",
    },
    {
      id: 2,
      img: pic3,
      desc: "MG Astor 2024 launched in India, price starts at Rs 9.98 lakh",
    },
    {
      id: 3,
      img: pic4,
      desc: "Kia Sonet facelift launched in India at Rs 7.99 lakh, Tata Nexon & Maruti Suzuki Brezza rival",
    },
    {
      id: 4,
      img: pic5,
      desc: "First Shift: New-vehicle inventory reaches 3-year high",
    },
    {
      id: 5,
      img: pic6,
      desc: "JLR India sales rise 74% in Q3 on robust demand for Range Rover, Range Rover Velar, Defender",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    pauseOnHover: true,
    arrows: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024, // Corrected from 1023 for standard breakpoint
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
    <div className="mt-20 px-6 bg-gradient-to-b from-gray-50 to-white py-12">
      <h1 className="font-extrabold text-4xl md:text-5xl text-center mb-6">
        Car <span className="text-blue-900">News & Advice</span>
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
        Stay updated with the latest automotive trends and expert insights.
      </p>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {newsData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;
