import React, { useRef, useState, useEffect } from "react";
import Modal from "./Modal";
import GradesList from "./GradesList";
import useOutsideObserver from "../hooks/useOutsideObserver";
import { ResultsContext } from "../contexts/ResultsContext";
import { useContext } from "react";
function Main() {
  //Creamos una referencia para saber si se dio click fuera del modal para cerrarlo
  const ref = useRef(null);
  //Creamos un estado para almacenar esa informacion y poder pasar el setState a el custom Hook
  const [isModalOpen, setModalState] = useState(false);
  const { results } = useContext(ResultsContext);
  const toggleModalState = () => {
    setModalState((state) => !state);
  };
  useEffect(() => {
    if (Object.keys(results).length !== 0) {
      toggleModalState();
    }
  }, [results]);

  useOutsideObserver(ref, toggleModalState);
  return (
    <div className="main-container">
      <h2 className="main-container__title">Ingresa tus notas</h2>
      <GradesList></GradesList>
      {isModalOpen && <Modal ref={ref}></Modal>}
    </div>
  );
}

export default Main;
