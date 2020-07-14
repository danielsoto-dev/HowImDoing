import React, { useState } from "react";
import GradeItem from "./GradeItem";
import getResult from "../utilities/getResult";
import { ReactComponent as ReactImage } from "../images/empty-list-image.svg";
function GradesList() {
  const [grades, setGrades] = useState([]);
  const handleNewGrade = () => {
    const newState = [
      ...grades,
      {
        id: grades.length,
        name: "",
        grade: "",
        percentage: "",
      },
    ];
    setGrades(newState);
  };

  const handleGradeChange = (field, value, id) => {
    const newState = [...grades];
    let targetNode = newState[id];
    newState[id] = {
      ...targetNode,
      [field]: value,
    };
    setGrades(newState);
  };

  const handleSumbit = () => {
    getResult(grades);
  };
  const handleDelete = (id) => {
    const newState = [...grades];
    newState.splice(id, 1);
    for (let index = id; index < newState.length; index++) {
      newState[index].id = index - 1;
    }
    console.log("newState", newState);
    setGrades(newState);
  };

  return grades.length ? (
    <div className="grade-list">
      <div className="grade-list__container">
        {grades.map((grade, idx) => {
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
          Agrega una Corte
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
      <h2 className="main-container__subtitle ">Empiece agregando cortes...</h2>
      <button onClick={handleNewGrade} className="button" type="button">
        Agrega una Corte
      </button>
      <ReactImage className="main-image"></ReactImage>
    </React.Fragment>
  );
}

export default GradesList;
