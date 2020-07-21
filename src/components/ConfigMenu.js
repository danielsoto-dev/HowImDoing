import React, { Fragment } from "react";
import ConfigForm from "./ConfigForm";
function ConfigMenu() {
  return (
    <Fragment>
      <h1 className="modal__title">Configuración</h1>
      <div className="modal__content"></div>
      <ConfigForm></ConfigForm>
    </Fragment>
  );
}

export default ConfigMenu;
