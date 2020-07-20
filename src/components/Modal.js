import React from "react";
const Modal = React.forwardRef(({ isOpen, children }, ref) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="wrapper">
      <div ref={ref} className="modal">
        {children}
      </div>
    </div>
  );
});
export default Modal;
