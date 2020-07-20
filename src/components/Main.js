import React, { useRef, useState, useEffect } from "react";
import Modal from "./Modal";
import ConfigMenu from "./ConfigMenu";
import GradesList from "./GradesList";
import useOutsideObserver from "../hooks/useOutsideObserver";
import { ResultsContext } from "../contexts/ResultsContext";
import { useContext } from "react";
function Main() {
  //Creamos una referencia para saber si se dio click fuera del modal para cerrarlo
  const ResultModalref = useRef(null);
  const ConfigModalref = useRef(null);

  //Creamos un estado para almacenar esa informacion y poder pasar el setState a el custom Hook
  const [isModalOpen, setModalState] = useState(false);
  const [isConfigOpen, setConfigState] = useState(true);
  //Traemos los estados del Context
  const { results } = useContext(ResultsContext);
  const { remaining, remainingPercentage } = results;
  //Modal open/close logic
  const toggleConfigModal = () => {
    setConfigState((state) => !state);
  };
  const toggleResultModal = () => {
    setModalState((state) => !state);
  };
  useEffect(() => {
    if (Object.keys(results).length !== 0) {
      toggleResultModal();
    }
  }, [results]);

  useOutsideObserver(ResultModalref, toggleResultModal);
  useOutsideObserver(ConfigModalref, toggleConfigModal);

  return (
    <div className="main-container">
      <h2 className="main-container__title">Ingresa tus notas</h2>
      <GradesList></GradesList>
      <Modal isOpen={isModalOpen} ref={ResultModalref}>
        <h1 className="modal__title">Este es tu resultado</h1>
        <div className="modal__content">
          <p>
            Necesitas un {remaining} en el {remainingPercentage}%.
          </p>
        </div>
      </Modal>
      <Modal isOpen={isConfigOpen} ref={ConfigModalref}>
        <ConfigMenu></ConfigMenu>
      </Modal>
    </div>
  );
}

export default Main;
