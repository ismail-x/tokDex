import React, { useContext } from 'react';
import { PokemonContexts } from '../contexts/PokemonContexts';

const TotalPokemon = () => {
  const { pokemons } = useContext(PokemonContexts);
  return (
    <div>
      <h6 className="mx-auto"> Currently you have {pokemons.length} Pokemons </h6>
    </div>
  );
}
 
export default TotalPokemon;