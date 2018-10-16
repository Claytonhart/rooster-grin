import React from "react";
import mail from "../assets/envelope-icon.svg";

const ModalButton = props => {
  return (
    <button className="modal-show-button" onClick={props.toggleModal}>
      <img src={mail} alt="mail" />
    </button>
  );
};

export default ModalButton;
