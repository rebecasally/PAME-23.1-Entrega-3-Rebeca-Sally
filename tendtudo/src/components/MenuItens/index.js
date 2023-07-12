import React from "react";
import "./style.css";
import Dropdown from "../Dropdown";
import { useState } from "react";

export const menuItens = [
  // ...
  {
    title: "CATEGORIAS",
    url: "/categorias",
    submenu: [
      {
        title: "Categoria 1",
        url: "/",
      },
      {
        title: "Categoria 2",
        url: "/",
      },
      {
        title: "Categoria 3",
        url: "/",
      },
      {
        title: "Categoria 4",
        url: "/",
      },
      {
        title: "Categoria 5",
        url: "/",
      },
    ],
  },
  // ...
];

const MenuItens = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItens;
