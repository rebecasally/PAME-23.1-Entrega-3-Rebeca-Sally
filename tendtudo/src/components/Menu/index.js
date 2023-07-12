import React from "react";
import "./style.css";
import { menuItens } from "../MenuItens";
import MenuItens from "../MenuItens";

const Menu = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItens.map((menu, index) => {
          return <MenuItens items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
