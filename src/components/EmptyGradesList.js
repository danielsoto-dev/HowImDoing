import React from "react";
import { ReactComponent as ReactImage } from "../images/empty-list-image.svg";

export default function EmptyGradesList({ onClick }) {
  return (
    <React.Fragment>
      <h2 className="main-container__subtitle ">¡Comencemos!</h2>
      <button onClick={onClick} className="button" type="button">
        Agrega una Corte
      </button>
      <ReactImage className="main-image"></ReactImage>
    </React.Fragment>
  );
}
