import React from "react";
import "./style.css";
import Botao from "../Botao";
import Input from "../Input";

function index() {
  return (
    <div>
      <div className="Login">
        <Input texto={"Login"}></Input>
        <Input texto={"Senha"}></Input>
        <Botao titulo={"ENTRAR"}></Botao>
      </div>
    </div>
  );
}

export default index;
