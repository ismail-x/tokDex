import React, { createContext, useReducer, useEffect } from 'react';
import { PokemonReducer } from '../reducers/PokemonReducer';

export const PokemonContexts = createContext();

const PokemonContextsProvider = (props) => {
  const [pokemons, dispatch] = useReducer(PokemonReducer, [], () => {
    const localData = localStorage.getItem('pokemons');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }, [pokemons]);
  return (
    <PokemonContexts.Provider value={{ pokemons, dispatch }}>
      {props.children}
    </PokemonContexts.Provider>
  );
}
 
export default PokemonContextsProvider;