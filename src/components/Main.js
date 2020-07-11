import React from "react";
import GradesList from "./GradesList";
function Main() {
  return (
    <div className="main-container">
      <h2 className="main-container__title">Ingresa tus notas</h2>

      <GradesList></GradesList>
    </div>
  );
}

export default Main;
