import React from "react";
import "./input.css";

const Input = (props: any) => {
  return (
    <input
      onChange={(event) => props.setValue(event.target.value)}
      value={props.value}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
