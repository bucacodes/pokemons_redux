
let defaultState = {
  pokemon: []
};

const addPokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
  case "ADD_RANDOM_POKEMON":
    return { ...state, pokemon: action.pokemon, error: action.error };
  default:
    return state;
  }
};

export default addPokemonReducer;
