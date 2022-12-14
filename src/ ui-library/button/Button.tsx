import React, { ReactNode } from "react";
import "./button.css";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className="myBtn">
      {children}
    </button>
  );
};

export default Button;
