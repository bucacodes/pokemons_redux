import React, { Component } from "react";
import ReactDOM from "react-dom";
import getRandomPokemon from "../actions/Randomize.js";
import store from "../store/Store.js";

const RandomPokemonComponent = props => {
  let { name, height, weight, base_experience, images } = props.pokemon;
  console.log(props);
  return (
    <div id="main">
      <div className="pokemon">
        <p className="pName">{`Name: ${name}`}</p>
        <p className="pHeight">{`Height: ${height}`}</p>
        <p className="pWeight">{`Weight: ${weight}`}</p>
        <p className="pExp">{`Experience: ${base_experience}`}</p>
        <img src={images ? images.front_default : ""} />
      </div>
      <button className="randomize_btn" onClick={props.handleClick}>
        Get Random Pokemon!
      </button>
    </div>
  );
};

export default RandomPokemonComponent;
