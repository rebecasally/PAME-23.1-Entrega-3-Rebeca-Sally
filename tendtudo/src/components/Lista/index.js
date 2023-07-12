import React from "react";
import "./style.css";
import Categoria from "../Categoria";
import Produto from "../Produto";

function index() {
  return (
    <div className="Lista">
      <Categoria label="Categoria 1">
        <Produto
          imagem1={"/public/img/1.avif"}
          imagem2={"/public/img/1.avif"}
          imagem3={"/public/img/1.avif"}
          nome1={"Produto 1"}
          nome2={"Produto 2"}
          nome3={"Produto 3"}
          tamanho1={"Tamanho 1"}
          tamanho2={"Tamanho 2"}
          tamanho3={"Tamanho 3"}
          material1={"Material 1"}
          material2={"Material 2"}
          material3={"Material 3"}
          preco1={"10,00"}
          preco2={"20,00"}
          preco3={"30,00"}
        ></Produto>
      </Categoria>
      <Categoria label="Categoria 2">
        <Produto
          imagem1={"../Lista/img/1.avif"}
          imagem2={"../Lista/img/1.avif"}
          imagem3={"../Lista/img/1.avif"}
          nome1={"Produto 4"}
          nome2={"Produto 5"}
          nome3={"Produto 6"}
          tamanho1={"Tamanho 4"}
          tamanho2={"Tamanho 5"}
          tamanho3={"Tamanho 6"}
          material1={"Material 4"}
          material2={"Material 5"}
          material3={"Material 6"}
          preco1={"40,00"}
          preco2={"50,00"}
          preco3={"60,00"}
        ></Produto>
      </Categoria>
      <Categoria label="Categoria 3">
        <Produto
          imagem1={"../Lista/img/1.avif"}
          imagem2={"../Lista/img/1.avif"}
          imagem3={"../Lista/img/1.avif"}
          nome1={"Produto 7"}
          nome2={"Produto 8"}
          nome3={"Produto 9"}
          tamanho1={"Tamanho 7"}
          tamanho2={"Tamanho 8"}
          tamanho3={"Tamanho 9"}
          material1={"Material 7"}
          material2={"Material 8"}
          material3={"Material 9"}
          preco1={"70,00"}
          preco2={"80,00"}
          preco3={"90,00"}
        ></Produto>
      </Categoria>
    </div>
  );
}

export default index;
