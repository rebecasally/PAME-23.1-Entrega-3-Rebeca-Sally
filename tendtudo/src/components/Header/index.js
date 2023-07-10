import React from "react";
import "./style.css";
import Busca from "../Busca";
import Login from "../Login";

function index() {
  return (
    <div className="Header">
      <div className="titulo">TendTudo</div>
      <a className="categoria" href="#">
        Categoria 1
      </a>
      <a className="categoria" href="#">
        Categoria 2
      </a>
      <a className="categoria" href="#">
        Categoria 3
      </a>
      <a className="categoria" href="#">
        Categoria 4
      </a>
      <Busca></Busca>
      <Login></Login>
    </div>
  );
}

export default index;
