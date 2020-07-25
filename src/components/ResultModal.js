import React, { Fragment } from "react";
import { useResults } from "../contexts/GradesContext";

function Results() {
  const { results } = useResults();
  const { remaining, remainingPercentage } = results;
  if (remainingPercentage <= 0) {
    return (
      <Fragment>
        <h1 className="modal__title">Este es tu resultado</h1>
        <div className="modal__content">
          <p>Tu nota final es igual a: {remaining}.</p>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h1 className="modal__title">Este es tu resultado</h1>
      <div className="modal__content">
        <p>
          Necesitas un {remaining} en el {remainingPercentage}%.
        </p>
      </div>
    </Fragment>
  );
}

export default Results;
