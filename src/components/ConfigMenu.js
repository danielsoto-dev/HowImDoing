import React, { Fragment } from "react";

function ConfigMenu() {
  return (
    <Fragment>
      <h1 className="modal__title">Configuración</h1>
      <div className="modal__content">Hola desde Config.</div>
      <button className="button main-button">Guardar Cambios</button>
    </Fragment>
  );
}

export default ConfigMenu;
