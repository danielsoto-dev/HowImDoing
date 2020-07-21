import React, { useRef } from "react";
import Modal from "./Modal";
import ConfigMenu from "./ConfigMenu";
import ResultModal from "./ResultModal";
import GradesList from "./GradesList";
import useOutsideObserver from "../hooks/useOutsideObserver";
import { useResultsModal, useConfigModal } from "../contexts/ModalsContext";
function Main() {
  //Creamos una referencia para saber si se dio click fuera del modal para cerrarlo
  const ResultModalref = useRef(null);
  const ConfigModalref = useRef(null);

  //Creamos un estado para almacenar esa informacion y poder pasar el setState a el custom Hook
  const { openConfigModal, setConfigModal } = useConfigModal();
  const { openResultModal, setResultModal } = useResultsModal();
  //Traemos los estados del Context

  //Modal open/close logic
  const hideConfigModal = () => {
    setConfigModal(false);
  };
  const hideResultModal = () => {
    setResultModal(false);
  };
  useOutsideObserver(ResultModalref, hideResultModal);
  useOutsideObserver(ConfigModalref, hideConfigModal);

  return (
    <div className="main-container">
      <h2 className="main-container__title">Ingresa tus notas</h2>
      <GradesList></GradesList>
      <Modal isOpen={openResultModal} ref={ResultModalref}>
        <ResultModal></ResultModal>
      </Modal>
      <Modal isOpen={openConfigModal} ref={ConfigModalref}>
        <ConfigMenu></ConfigMenu>
      </Modal>
    </div>
  );
}

export default Main;
