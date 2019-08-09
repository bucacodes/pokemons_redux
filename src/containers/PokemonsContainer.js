import PokemonsComponent from "../components/Pokemons.jsx";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    pokemons: state.setPokemonsReducer.pokemons
  };
};

const PokemonsContainer = connect(mapStateToProps)(PokemonsComponent);

export default PokemonsContainer;
