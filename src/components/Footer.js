import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-input-container">
          <input
            className="footer-input-container__input"
            type="email"
            placeholder="Your Email"
          />
          <button className="footer-input-container__button btn">Button</button>
        </div>
        <div className="footer-about">
          <div className="footer-about-links">
            <h6 className="footer-about-links__header">Lorem</h6>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="footer-about-links">
            <h6 className="footer-about-links__header">Lorem</h6>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="footer-about-links">
            <h6 className="footer-about-links__header">Lorem</h6>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
