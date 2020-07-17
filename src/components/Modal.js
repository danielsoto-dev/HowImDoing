import React from "react";
import { ResultsContext } from "../contexts/ResultsContext";
import { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = React.forwardRef((props, ref) => {
  const { results } = useContext(ResultsContext);
  const { remaining, remainingPercentage } = results;
  return (
    <div ref={ref} className="modal">
      <h1 className="modal__title">Este es tu resultado</h1>
      <div className="modal__content">
        Necesitas un {remaining} en el {remainingPercentage}%.
      </div>
    </div>
  );
});
export default Modal;
