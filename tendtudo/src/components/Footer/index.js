import React from "react";
import "./style.css";

function index() {
  return (
    <div className="Footer">
      <div className="info">
        <li>
          <ul className="nome-info">Endereço</ul>
          <ul>Rua Central, Rio de Janeiro - RJ N° 2</ul>
          <ul className="nome-info">Email</ul>
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
