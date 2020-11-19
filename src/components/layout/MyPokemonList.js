import React, { Component } from 'react';

import PokemonOwned from '../pokemon/PokemonOwned'
import PokemonContextsProvider from '../contexts/PokemonContexts';

export default class MyPokemonList extends Component {
    render() {
        return (
            <div className="App">
                <PokemonContextsProvider>
            <PokemonOwned/>
            </PokemonContextsProvider>
          </div>
        )
        
    }
}
