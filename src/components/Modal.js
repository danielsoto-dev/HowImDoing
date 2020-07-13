import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Modal({ remGrade, remPercentage }) {
  if (!(remGrade && remPercentage)) {
    return null;
  }
  return (
    <div className="modal">
      <h1 className="modal__title">Este es tu resultado</h1>
      <div className="modal__content">
        Necesitas un {remGrade} en el {remPercentage}%.
      </div>
    </div>
  );
}
export default Modal;
