import axios from "axios";

const addRandomPokemon = pokemon => ({
  type: "ADD_RANDOM_POKEMON",
  pokemon: pokemon
});

const randomNum = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
const getRandomPokemon = () => {
  return dispatch => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum(964)}`)
      .then(res => {
        let { name, height, weight, base_experience, sprites } = res.data;
        let pokemon = {
          name: name,
          height: height,
          weight: weight,
          base_experience: base_experience,
          images: sprites
        };
        dispatch(addRandomPokemon(pokemon));
      })
      .catch(error => console.log(error));
  };
};

export default getRandomPokemon;
