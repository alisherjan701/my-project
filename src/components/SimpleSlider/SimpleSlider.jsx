import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="4d0d253761106eae8952c2eb38ae179a.jpg" alt="" />
      </div>
      <div>
        <img src="52fd06a93bca22b11f7896e223107af8.jpg" alt="" />
      </div>
      <div>
        <img src="jizzax-1-680x361-680x361.jpg" alt="" />
      </div>
      <div>
        <img src="932b51ab3cabde19d3eb862a9b34799d.jpg" alt="" />
      </div>
      <div>
        <img src="O'zbek_milliy_kiyimlari_(ansambl)_40.jpg" alt="" />
      </div>
      <div>
        <img src="370.jpg" alt="" />
      </div>
    </Slider>
  );
}
