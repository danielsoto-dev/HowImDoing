import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
function GradesItem({ onAdd, onDelete, onChange, id }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value, id);
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div id={id} onChange={handleChange} className="grade-item level-1">
      <FontAwesomeIcon
        className="clickable"
        onClick={onAdd}
        icon={faPlusCircle}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="clickable"
        onClick={handleDelete}
        icon={faMinusCircle}
      ></FontAwesomeIcon>
      <input
        className="input--section input--grade"
        name="name"
        placeholder="Asignatura..."
        type="text"
      />
      <input
        className="input--value input--grade"
        name="grade"
        placeholder="Nota"
        type="text"
      />
      <input
        className="input--percentage input--grade"
        name="percentage"
        placeholder="%"
        type="text"
      />
    </div>
  );
}

export default GradesItem;
