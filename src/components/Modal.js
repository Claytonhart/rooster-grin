import React, { Component } from "react";

class Modal extends Component {
  onSubmit = e => {
    e.preventDefault();
    console.log("No errors here!");
  };

  render() {
    const modalClass = this.props.show
      ? "modal-show modal"
      : "modal-hide modal";

    return (
      <div className={modalClass}>
        <div className="modal-body">
          <h2 className="modal__header">Lorem Ipsum</h2>
          <form onSubmit={this.onSubmit} className="modal-form">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" />
            <div>
              <div className="modal-form__half-width">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" />
              </div>
              <div className="modal-form__half-width">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="tel" />
              </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" />
            <div className="modal-form__button-container">
              <button className="btn">Button</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
