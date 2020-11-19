
import {v4 as uuid} from "uuid";

export const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [...state, {
        name: action.pokemon.name,
        id: uuid.v4}
      ]
    case 'REMOVE_POKEMON':
      return state.filter(pokemon => pokemon.id !== action.id);
    default:
      return state;
  }
} 