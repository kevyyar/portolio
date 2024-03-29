import React from "react";
import "./button.css";
interface Props {
  children: React.ReactNode;
}
export const Button = ({ children }: Props) => {
  return (
    <div className="button-container">
      <div className="button-border">
        <button className="btn">{children}</button>
      </div>
    </div>
  );
};
