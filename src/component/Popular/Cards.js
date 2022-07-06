import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopData from "./PopData";

const Cards = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      
      
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {PopData.map((value) => {
          return (
            <div className="cards">
              <div className="item">
                <div className="image">
                  <img src={value.image} alt="" />
                  <labe></labe>
                </div>
                <div className="rate py-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>

                <div className="details">
                  <h2>{value.title}</h2>
                  <div className="boarder"></div>
                  <h3>
                    {value.rp}/<span>Per bungkus</span>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Cards;
