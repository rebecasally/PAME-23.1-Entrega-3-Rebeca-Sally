import React from "react";
import "./style.css";
import { useState } from "react";

const Collapsible = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="Categoria">
      <button onClick={toggle}>{props.label}</button>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
};

export default Collapsible;
