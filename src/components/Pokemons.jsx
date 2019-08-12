/* eslint react/prop-types: 0 */
import React from "react";

const PokemonsComponent = props => {
  return (
    <div id="boxes">
      <div className="pokemons">
        {props.pokemons.map(pokemon => (
          <div className="pokemon" key={pokemon.name}>
            <p className="pName">{`Name: ${pokemon.name}`}</p>
            <p className="pHeight">{`Height: ${pokemon.height}`}</p>
            <p className="pWeight">{`Weight: ${pokemon.weight}`}</p>
            <p className="pExp">{`Experience: ${pokemon.base_experience}`}</p>
            <img src={pokemon.images.front_default} className="pImage" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonsComponent;
