import React from "react";
import logo from "src/client/images/logo.webp";
import carouselOne from "src/client/images/carousel-one.webp";
import carouselTwo from "src/client/images/carousel-four.webp";
import carouselThree from "src/client/images/carousel-two.webp";
import carouselFour from "src/client/images/carousel-three.webp";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img src={logo} alt="eggsential logo" />
        <h1 className="margin">UNLOCK THE POWER OF NATURAL EGG WHITE PROTEIN</h1>
        <div className="banner-buttons">
          <a href="#problem" className="eggsential-button">Why Eggsential?</a>
          <button className="shop-button">Shop</button>
        </div>
      </div>
      <div className="slider-container">
        <div className="slide-holder">
          <img src={carouselOne} alt="Cyclist with eggential sip" />
          <img src={carouselTwo} alt="one kilogram eggsential white and it's qualities" />
          <img src={carouselThree} alt="Body Builder with eggsential sip" />
          <img src={carouselFour} alt="fighters with eggsential sip" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
