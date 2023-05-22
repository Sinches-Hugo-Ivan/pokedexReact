import React from "react";
import pokedex from "../assets/img/pokedex.png";
import gif from "../assets/img/pikachu.gif";

export const Header = () => {
  return (
    <header>
      <img className="title" src={pokedex} alt="pokedex" />
      <div className="red_stripe"></div>
      <div className="white_circle">
        <div className="gray_circle">
          <img src={gif} alt="" />
        </div>
      </div>
      <div className="black_stripe"></div>
      <div class="wrapper">
        <div class="fraseHeader"> ¡ATRÁPALOS YA! </div>
        <nav>
          <a href="/">Salir</a>
        </nav>
      </div>
    </header>
  );
};
