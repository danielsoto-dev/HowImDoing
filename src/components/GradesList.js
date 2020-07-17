import React, { useState } from "react";
import GradeItem from "./GradeItem";
import getResult from "../utilities/getResult";
import { ResultsContext } from "../contexts/ResultsContext";
import { ReactComponent as ReactImage } from "../images/empty-list-image.svg";
import { useContext } from "react";

function GradesList() {
  const [gradesList, setGradesList] = useState([]);
  const { setResults } = useContext(ResultsContext);
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
    const [remaining, remainingPercentage] = getResult(gradesList);
    setResults({ remaining, remainingPercentage });
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
          className="button main-button"
          type="button"
        >
          Calcular Nota
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
