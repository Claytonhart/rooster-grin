import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        <div className="hero__item hero__item--1">
          <div className="hero__content">
            <h1 className="hero__title">Lorem ipsum lorem ipsum</h1>
            <button className="hero__button">Button</button>
          </div>
        </div>
        <div className="hero__item hero__item--2">
          <div className="hero__content">
            <h1 className="hero__title">Lorem ipsum lorem ipsum</h1>
            <button className="hero__button">Button</button>
          </div>
        </div>
        <div className="hero__item hero__item--3">
          <div className="hero__content">
            <h1 className="hero__title">Lorem ipsum lorem ipsum</h1>
            <button className="hero__button">Button</button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
