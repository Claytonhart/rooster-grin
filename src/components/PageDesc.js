import React from "react";
import pageImg from "../assets/page-icon.svg";

const PageDesc = () => {
  return (
    <section className="page-desc">
      <div className="page-item">
        <img className="page-item__icon" src={pageImg} alt="page-icon" />
        <p className="page-item__desc">
          Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus
          cursus.
        </p>
      </div>
      <div className="page-item">
        <img className="page-item__icon" src={pageImg} alt="page-icon" />
        <p className="page-item__desc">
          Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus
          cursus.
        </p>
      </div>
      <div className="page-item">
        <img className="page-item__icon" src={pageImg} alt="page-icon" />
        <p className="page-item__desc">
          Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus
          cursus.
        </p>
      </div>
      <div className="page-item">
        <img className="page-item__icon" src={pageImg} alt="page-icon" />
        <p className="page-item__desc">
          Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus
          cursus.
        </p>
      </div>
    </section>
  );
};

export default PageDesc;
