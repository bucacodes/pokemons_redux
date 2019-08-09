/* eslint react/prop-types: 0 */
import React, { Component } from "react";
import PokemonsContainer from "../containers/PokemonsContainer.js";
import RandomPokemonsContainer from "../containers/Random_PokemonContainer.js";
import store from "../store/Store.js";
import getPokemons from "../actions/GetPokemons.js";
import getRandomPokemon from "../actions/Randomize.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(getPokemons());
    store.dispatch(getRandomPokemon());
  }

  render() {
    return (
      <div id="main">
        <h3 className="header">POKEMONS</h3>
        <PokemonsContainer />
        <RandomPokemonsContainer />
      </div>
    );
  }
}

export default App;
