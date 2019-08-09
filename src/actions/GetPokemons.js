import axios from "axios";

const setPokemons = pokemonsList => ({
  type: "SET_POKEMONS",
  pokemons: pokemonsList
});

const getPokemons = () => {
  return dispatch => {
    return axios
      .all([
        axios.get("https://pokeapi.co/api/v2/pokemon/7"),
        axios.get("https://pokeapi.co/api/v2/pokemon/4"),
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
      ])
      .then(
        axios.spread((res7, res4, res1) => {
          let results = [res7.data, res4.data, res1.data];

          let pokemons = results.map(el => {
            let { name, height, weight, base_experience, sprites } = el;
            let pokemon = {
              name: name,
              height: height,
              weight: weight,
              base_experience: base_experience,
              images: sprites
            };
            return pokemon;
          });
          dispatch(setPokemons(pokemons));
        })
      );
  };
};

export default getPokemons;
