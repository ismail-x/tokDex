import React, { Component, component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import MyPokemonList from './components/layout/MyPokemonList';
import Pokemon from './components/pokemon/Pokemon';
import PokemonContextProvider from './components/contexts/PokemonContexts';


class App extends Component {
  render() {
    return ( 
    <Router>
      <div className="App">
        <NavBar/>
          <div className="container"> 
            <Switch>
              <PokemonContextProvider>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Route exact path="/MyPokemonList" component={MyPokemonList} />
              </PokemonContextProvider>
            </Switch>
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
