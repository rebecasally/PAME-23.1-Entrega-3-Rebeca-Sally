import React from "react";
import "./style.css";
import Busca from "../Busca";
import Login from "../Login";
import Menu from "../Menu";

function index() {
  return (
    <div className="Header">
      <div className="titulo">TendTudo</div>
      <div>
        <Menu />
      </div>
      <Busca></Busca>
      <Login></Login>
    </div>
  );
}

export default index;
