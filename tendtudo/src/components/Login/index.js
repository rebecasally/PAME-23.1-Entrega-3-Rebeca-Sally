import React from "react";
import "./style.css";

function index() {
  return (
    <div>
      <div className="Login">
        <input type="text" placeholder="Nome de usuário"></input>
        <input type="text" placeholder="Senha"></input>
        <button className="login-button">Pesquisar</button>
      </div>
    </div>
  );
}

export default index;
