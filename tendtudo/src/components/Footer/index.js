import React from "react";
import "./style.css";

function index() {
  return (
    <div className="Footer">
      <div className="info">
        <li>
          <ul className="nome-info">Caxias</ul>
          <ul>Rua Central n° 0 , CEP: 12345-67</ul>
          <ul className="nome-info">
            <br></br>Belford Roxo
          </ul>
          <ul>Rua Central n° 0 , CEP: 12345-67</ul>
          <ul className="nome-info">
            <br></br>Nova Iguaçu
          </ul>
          <ul>Rua Central n° 0 , CEP: 12345-67</ul>
        </li>
      </div>
      <div className="contato">
        <li>
          <ul className="nome-info">Contato</ul>
          <ul>+55 21 99000-0000</ul>
          <ul>email@gmail.com</ul>
        </li>
      </div>
      <div className="socials">
        <li>
          <ul>
            <a
              href="http://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./img/instagram.png")} alt="Instagram" />
              Instagram
            </a>
          </ul>
          <ul>
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./img/facebook.png")} alt="Facebook" />
              Facebook
            </a>
          </ul>
          <ul>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./img/whatsapp.png")} alt="Whatsapp" />
              Whatsapp
            </a>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default index;
