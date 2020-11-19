import React, { useContext, useState } from 'react';
import { PokemonContexts } from './contexts/PokemonContexts';

const NewPokemon = ( ) => {
  const { dispatch } = useContext(PokemonContexts);
  const [name, setName] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_POKEMON', pokemon: { name }});
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="pokemon name" value={name}
        onChange={(e) => setName(e.target.value)} required />
      <input type="submit" value="add pokemon" />
    </form>
  );
}
 
export default NewPokemon;