import React from "react";
import "./style.css";
import Categoria from "../Categoria";
import Produto from "../Produto";

function index() {
  return (
    <div className="Lista">
      <Categoria label="Categoria 1">
        <Produto></Produto>
      </Categoria>
      <Categoria label="Categoria 2">
        <Produto></Produto>
      </Categoria>
      <Categoria label="Categoria 3">
        <Produto></Produto>
      </Categoria>
      <Categoria label="Categoria 4">
        <Produto></Produto>
      </Categoria>
      <Categoria label="Categoria 5">
        <Produto></Produto>
      </Categoria>
    </div>
  );
}

export default index;
