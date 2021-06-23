import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input onChange={props.func} value={props.value} type="number" />
    </div>
  );
};
export default Input;
