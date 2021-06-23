import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onCLick={props.btn}>{props.text}</button>
    </div>
  );
};
export default Button;
