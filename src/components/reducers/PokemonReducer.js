import uuid from 'uuidv4';


export const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [...state, {
        name: action.pokemon.name,
        id: uuid()}
      ]
    case 'REMOVE_POKEMON':
      return state.filter(pokemon => pokemon.id !== action.id);
    default:
      return state;
  }
} 