import React from "react";
import "./style.css";

function index({ texto }) {
  return (
    <div className="Input">
      <input className="input" type="text" placeholder={texto}></input>
    </div>
  );
}

export default index;
