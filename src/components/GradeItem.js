import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
function GradesItem({ onClick, onChange, id }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value, id);
  };

  return (
    <div id={id} onChange={handleChange} className="grade-item level-1">
      <FontAwesomeIcon
        className="clickable"
        onClick={onClick}
        icon={faPlusCircle}
      ></FontAwesomeIcon>
      <input
        name="name"
        placeholder="Asignatura..."
        className="input--section input--grade"
        type="text"
      />
      <input name="grade" className="input--value input--grade" type="text" />
      <input
        name="percentage"
        className="input--percentage input--grade"
        type="text"
      />
    </div>
  );
}

export default GradesItem;
