import axios from 'axios';

export const FETCH_POKEMONS_START = 'FETCH_POKEMONS_START';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';

export const fetchPokemon = (url) => (dispatch) => {
  dispatch({ type: FETCH_POKEMONS_START });
  axios
    .get(url)
    .then((res) => {
      console.log(res.data.results);
      dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err);
    });
};
