import React, { useState } from "react";
import GradeItem from "./GradeItem";
import getResult from "../utilities/getResult";
import { ReactComponent as ReactImage } from "../images/empty-list-image.svg";
import { useResults, useConfig } from "../contexts/GradesContext";
import { useResultsModal } from "../contexts/ModalsContext";

function GradesList() {
  const [gradesList, setGradesList] = useState([]);
  const [error, setError] = useState(false);
  const { setResultModal } = useResultsModal();
  const { config } = useConfig();
  const { setResults } = useResults();
  // debugger;
  const handleNewGrade = () => {
    const newState = [
      ...gradesList,
      {
        name: "",
        grade: "",
        percentage: "",
      },
    ];
    setGradesList(newState);
  };
  const handleGradeChange = (field, value, id) => {
    const newState = [...gradesList];
    let targetNode = newState[id];
    newState[id] = {
      ...targetNode,
      [field]: value,
    };
    setGradesList(newState);
  };
  const handleSumbit = () => {
    const { desiredGrade } = config;
    const [remaining, remainingPercentage] = getResult(
      gradesList,
      desiredGrade
    );
    if (remainingPercentage < 0) {
      setError(true);
      return null;
    }
    setResults({ remaining, remainingPercentage });
    setResultModal(true);
  };
  const handleDelete = (id) => {
    const newState = [...gradesList];
    newState.splice(id, 1);
    setGradesList(newState);
  };

  return gradesList.length ? (
    <div className="grade-list">
      <div className="grade-list__container">
        {gradesList.map((grade, idx) => {
          const values = {
            name: grade.name,
            grade: grade.grade,
            percentage: grade.percentage,
          };
          // let result = values.grade > 5 ? true : false;

          return (
            <GradeItem
              id={idx}
              key={idx}
              values={values}
              onChange={handleGradeChange}
              onAdd={handleNewGrade}
              onDelete={handleDelete}
            ></GradeItem>
          );
        })}
        <button onClick={handleNewGrade} className="button" type="button">
          Agrega un Corte
        </button>
        <button
          onClick={handleSumbit}
          className={`button ${!error ? "main-button" : "button--error"}`}
          disabled={error}
          type="button"
        >
          {!error ? "Calcular Nota" : "Datos Invalidos"}
        </button>
      </div>
    </div>
  ) : (
    <React.Fragment>
      <h2 className="main-container__subtitle ">¡Comencemos!</h2>
      <button onClick={handleNewGrade} className="button" type="button">
        Agrega una Corte
      </button>
      <ReactImage className="main-image"></ReactImage>
    </React.Fragment>
  );
}

export default GradesList;
