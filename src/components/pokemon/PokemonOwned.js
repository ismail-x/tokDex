import React, { useContext } from 'react';
import PokemonDe from '../PokemonDe';
import { PokemonContexts } from '../contexts/PokemonContexts';

const PokemonOwned = () => {
  const { pokemons } = useContext(PokemonContexts);
  return pokemons.length ? (
    <div className="book-list">
      <ul>
        {pokemons.map(pokemon => {
          return ( <PokemonDe pokemon={pokemon} key={pokemon.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Go Catch 'em All).</div>
  );
}

export default PokemonOwned;