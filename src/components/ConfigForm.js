import React, { useState } from "react";
import isAValidNumber from "../utilities/isAValidNumber";
import { useConfig } from "../contexts/GradesContext";
import { useConfigModal } from "../contexts/ModalsContext";

import { Fragment } from "react";

function ConfigForm() {
  const { setConfigModal } = useConfigModal();
  const { config, setConfig } = useConfig();
  const { desiredGrade, maxGrade } = config;
  const [formData, setFormData] = useState({
    desiredGrade,
    maxGrade,
  });

  const handleSubmit = () => {
    setConfig(formData);
    setConfigModal(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isAValidNumber(value)) {
      return "";
    }
    const newState = { ...formData };
    newState[name] = value;
    setFormData(newState);
  };
  return (
    <Fragment>
      <div className="form">
        <label htmlFor="desiredGrade">Nota deseada:</label>
        <input
          type="text"
          id="desiredGrade"
          name="desiredGrade"
          className="input--config"
          onChange={handleChange}
          value={formData.desiredGrade}
        />
        <label htmlFor="maxGrade">Nota máxima:</label>
        <input
          type="text"
          id="maxGrade"
          name="maxGrade"
          className="input--config"
          onChange={handleChange}
          value={formData.maxGrade}
        />
      </div>
      <button onClick={handleSubmit} className="button main-button">
        Guardar Cambios
      </button>
    </Fragment>
  );
}

export default ConfigForm;
