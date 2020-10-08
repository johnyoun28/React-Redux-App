import { FETCH_POKEMONS_START, FETCH_POKEMONS_SUCCESS } from '../actions';

const initialState = {
  pokemon: [],
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};
