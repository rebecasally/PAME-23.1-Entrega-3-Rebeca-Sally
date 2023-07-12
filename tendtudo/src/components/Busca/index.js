import React from "react";
import "./style.css";
import Botao from "../Botao";
import Input from "../Input";

function index() {
  return (
    <div className="Busca">
      <Input texto={"Busque por um produto"}></Input>
      <Botao titulo="PESQUISAR"></Botao>
    </div>
  );
}

export default index;
