import React from "react";
import Slider from "react-slick";
import tributeImg1 from "../assets/user-1.jpg";
import tributeImg2 from "../assets/user-2.jpg";
import tributeImg3 from "../assets/user-3.jpg";

const Tribute = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="tribute">
      <h2 className="tribute__header cutting-edge__header">
        <span>Lorem</span> ipsum
      </h2>
      <Slider {...settings}>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg1}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg2}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg3}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg2}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg1}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg3}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg3}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg1}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
        <div className="tribute-item">
          <img
            className="tribute-item__image"
            src={tributeImg2}
            alt="tribute"
          />
          <p className="tribute-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati est, ullam earum dolorum vitae
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default Tribute;
