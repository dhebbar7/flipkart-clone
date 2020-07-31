import React from "react";
import banner from "../../assets/images/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img className="banner__img" src={banner} alt="" />
    </div>
  );
}

export default Banner;
