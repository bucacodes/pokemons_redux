import RandomPokemonComponent from "../components/Random_pokemon.jsx";
import getRandomPokemon from "../actions/Randomize.js";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    pokemon: state.addPokemonReducer.pokemon
  };
};

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(getRandomPokemon());
  }
});

const RandomPokemonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPokemonComponent);

export default RandomPokemonsContainer;
