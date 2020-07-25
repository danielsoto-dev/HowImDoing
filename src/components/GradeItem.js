import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import isAValidNumber from "../utilities/isAValidNumber";
import { useConfig } from "../contexts/GradesContext";

function GradesItem({ onAdd, onDelete, onChange, values, id }) {
  const { name, grade, percentage } = values;
  const { config } = useConfig();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name, value", name, value);
    if (name !== "name" && !isAValidNumber(value)) {
      return "";
    }
    onChange(name, value, id);
  };
  const handleDelete = () => {
    onDelete(id);
  };
  const foo = () => {};
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
        placeholder="Nombre del corte..."
        type="text"
        value={name}
        onChange={foo}
        autoFocus
      />
      <input
        className="input--value input--grade"
        name="grade"
        placeholder="Nota"
        type="number"
        value={grade}
        onChange={foo}
        min={0}
        max={config.maxGrade}
        step={0.01}
        required
      />
      <input
        className="input--percentage input--grade"
        name="percentage"
        placeholder="%"
        type="number"
        value={percentage}
        onChange={foo}
        min={0}
        max={100}
        step={0.01}
        required
      />
    </div>
  );
}

export default GradesItem;
