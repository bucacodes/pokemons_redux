import { combineReducers } from "redux";
import setPokemonsReducer from "./SetPokemonsReducer.js";
import addPokemonReducer from "./RandomizeReducer.js";

const mainReducer = combineReducers({
  setPokemonsReducer,
  addPokemonReducer
});

export default mainReducer;
