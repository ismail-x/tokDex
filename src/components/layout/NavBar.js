import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import TotalPokemon from '../pokemon/TotalPokemon';

// const Branding = styled.a`
//   -moz-user-select: none;
//   -website-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   -o-user-select: none;
// `;

export default class NavBar extends Component {
    state = {
        hoverNavBar: true
      };
    
      hoverNavBar() {
        window.scrollY <= 0
          ? this.setState({ hoverNavBar: true })
          : this.setState({ hoverNavBar: false });
      }
    
      componentDidMount() {
        // Added True To End To Listen to All Events On Page
        window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
      }
    
      componentWillUnmount() {
        // Added True To End To LIsten to All Events On Page
        window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
      }
      
    render() {
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top"
          style={
                 this.state.hoverNavBar
                   ? {
                       boxShadow:
                         '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                       transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                       backgroundColor: '#ef5350 !important'
                     }
                   : { backgroundColor: 'transparent !important' }
               }
            >
              <Navbar.Brand href="/">TokDex</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#MyPokemonList">MyPokemonList</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        );
      
    }
}



