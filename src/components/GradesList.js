import React, { useState, useEffect } from "react";
import GradeItem from "./GradeItem";
import getResult from "../utilities/getResult";
function GradesList() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    console.log(grades);
    console.log("I just rerender");
  });

  const handleNewGrade = () => {
    const newState = [
      ...grades,
      {
        id: grades.length,
        name: "",
        grade: 0,
        percentage: 0,
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
    console.log(`The ${field} is changing... #ID: ${id}`);
    setGrades(newState);
  };

  const handleSumbit = () => {
    getResult(grades);
  };
  const handleDelete = (id) => {
    console.log("Id to deleted: ", id);
    const newState = [...grades];
    const filterState = newState.filter((grade) => {
      console.log("Current grade.id", grade.id);
      return grade.id !== id;
    });
    console.log(filterState);
    setGrades(filterState);
  };

  return grades.length ? (
    <div className="grade-list">
      <div className="grade-list__container">
        {grades.map((grade, idx) => {
          console.log("Mapping...");
          return (
            <GradeItem
              id={idx}
              key={idx}
              name={grade.name}
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
      <h2>Empiece agregando cortes...</h2>
      <button onClick={handleNewGrade} className="button" type="button">
        Agrega una Corte
      </button>
    </React.Fragment>
  );
}

export default GradesList;
