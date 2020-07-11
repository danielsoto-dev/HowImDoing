import React, { useState } from "react";
import GradeItem from "./GradeItem";

function GradesList() {
  const [grades, setGrades] = useState([
    {
      id: 1,
      name: "",
      grade: 0,
      percentage: 0,
      childs: [],
    },
  ]);

  const handleNewGrade = () => {
    const newState = [
      ...grades,
      {
        id: grades.length + 1,
        name: "",
        grade: 0,
        percentage: 0,
        childs: [],
      },
    ];
    setGrades(newState);
  };

  const handleGradeChange = (field, value, id) => {
    const newState = grades;
    let targetNode = newState[id - 1];
    newState[id - 1] = {
      ...targetNode,
      [field]: value,
    };
    setGrades(newState);
  };

  const handleSumbit = () => {
    const finalGrade = grades.reduce((acc, el) => {
      return acc + el.grade * (el.percentage / 100);
    }, 0);
    console.log(finalGrade);
  };

  return (
    <div className="grade-list">
      <div className="grade-list__container">
        {grades.map((grade) => {
          return (
            <GradeItem
              childs={grade.childs}
              id={grade.id}
              key={grade.id}
              onChange={handleGradeChange}
              onClick={handleNewGrade}
            ></GradeItem>
          );
        })}
        <button onClick={handleNewGrade} className="button" type="button">
          Agrega una Materia
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
  );
}

export default GradesList;
