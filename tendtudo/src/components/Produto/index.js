import React from "react";
import "./style.css";

function index({
  imagem1,
  imagem2,
  imagem3,
  nome1,
  nome2,
  nome3,
  preco1,
  preco2,
  preco3,
  tamanho1,
  tamanho2,
  tamanho3,
  material1,
  material2,
  material3,
}) {
  return (
    <div className="Produto">
      <div className="container">
        <img src={imagem1} alt="" />
        <h1 className="nome-produto">{nome1}</h1>
        <h1 className="descricao">
          {material1}, {tamanho1}
        </h1>
        <h1 className="preco"> R${preco1}</h1>
      </div>
      <div className="container">
        <img src={imagem2} alt="" />
        <h1 className="nome-produto">{nome2}</h1>
        <h1 className="descricao">
          {material2}, {tamanho2}
        </h1>
        <h1 className="preco"> R${preco2}</h1>
      </div>
      <div className="container">
        <img src={imagem3} alt="" />
        <h1 className="nome-produto">{nome3}</h1>
        <h1 className="descricao">
          {material3}, {tamanho3}
        </h1>
        <h1 className="preco"> R${preco3}</h1>
      </div>
    </div>
  );
}

export default index;
