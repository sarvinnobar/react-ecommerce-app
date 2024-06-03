import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/images/banner-3.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-1.jpg";
import "./SliderIndex.scss";

export default function SliderIndex() {
  var settings = {
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider__div">
          <img src={banner1} />
        </div>

        <div className="slider__div">
          <img src={banner2} />
        </div>

        <div className="slider__div">
          <img src={banner3} />
        </div>
      </Slider>
    </div>
  );
}
