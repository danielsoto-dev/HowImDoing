import React, { useState } from "react";
import GradeItem from "./GradeItem";
import getResult from "../utilities/getResult";
import { useResults, useConfig } from "../contexts/GradesContext";
import { useResultsModal } from "../contexts/ModalsContext";
import EmptyGradesList from "./EmptyGradesList";

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
    //! Ineficiente.
    setError(false);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
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
      <form className="grade-list__form" onSubmit={handleSumbit}>
        {gradesList.map((grade, idx) => {
          const values = {
            name: grade.name,
            grade: grade.grade,
            percentage: grade.percentage,
          };

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
          className={`button ${!error ? "main-button" : "button--error"}`}
          disabled={error}
          type="submit"
        >
          {!error ? "Calcular Nota" : "Porcentages Invalidos"}
        </button>
      </form>
    </div>
  ) : (
    <EmptyGradesList onClick={handleNewGrade}></EmptyGradesList>
  );
}

export default GradesList;
