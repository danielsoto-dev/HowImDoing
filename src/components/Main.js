import React from "react";
import Modal from "./Modal";
import GradesList from "./GradesList";
function Main() {
  return (
    <div className="main-container">
      <h2 className="main-container__title">Ingresa tus notas</h2>
      <GradesList></GradesList>
      <Modal></Modal>
    </div>
  );
}

export default Main;
