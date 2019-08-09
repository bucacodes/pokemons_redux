import Redux from "redux";

let defaultState = {
  pokemons: []
};

const setPokemonsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return { ...state, pokemons: action.pokemons };
    default:
      return state;
  }
};

export default setPokemonsReducer;
