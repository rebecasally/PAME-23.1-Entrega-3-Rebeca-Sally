import React from "react";
import "./style.css";

function index() {
  return (
    <div className="Busca">
      <input type="text" placeholder="Procure um produto"></input>
      <button className="search-button">Pesquisar</button>
    </div>
  );
}

export default index;
