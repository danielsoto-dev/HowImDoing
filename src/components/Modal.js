import React, { useRef } from "react";
import useOutsideObserver from "../hooks/useOutsideObserver";
function Modal({ children, isOpen, onHide }) {
  const modalRef = useRef(null);
  useOutsideObserver(modalRef, onHide);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="wrapper">
      <div ref={modalRef} className="modal">
        {children}
      </div>
    </div>
  );
}
export default Modal;
