import React, { useContext } from 'react';
import { PokemonContexts } from './contexts/PokemonContexts';

const PokemonDe = ({ pokemon }) => {
  const { dispatch } = useContext(PokemonContexts);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_POKEMON', id: pokemon.id })}>
      <div className="title">{pokemon.name}</div>
    </li>
  );
}

export default PokemonDe;