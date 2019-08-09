import RandomPokemonComponent from "../components/Random_pokemon.jsx";
import getRandomPokemon from "../actions/Randomize.js";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    pokemon: state.addPokemonReducer.pokemon,
    error: state.addPokemonReducer.error
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
