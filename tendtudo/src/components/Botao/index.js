import React from "react";
import "./style.css";

function index({ titulo }) {
  return (
    <div className="Botao">
      <div className="button">{titulo}</div>
    </div>
  );
}

export default index;
