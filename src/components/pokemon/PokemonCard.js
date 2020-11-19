import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import spinner  from '../images/spinner.gif';


const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezeir(0.25, 0.8, 0.25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus;
    &:hover;
    &:visited;
    &:link;
    &:active {
        text-decoration: none;
    }

`

export default class PokemonCard extends Component {

    state = {
        name: '',
        imageURL: '',
        pokemonIndex: '',
        imageLoading: true,
        tooManyRequests: false
    };

    componentDidMount () {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name: name, imageUrl: imageUrl, pokemonIndex: pokemonIndex 
        })

    }
    render() {

        return (
            <div className= "col-md-3 col-sm-6 mb-2 mt-5">
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                    <Card className= "card">
                            <h5 className= "card-header">
                                {this.state.pokemonIndex}
                            </h5>
                            {this.state.imageLoading ? (
                                <img 
                                src={spinner} style = {{width: '3em', height: '3em'}} className="card-img-top rounded mx-auto d-block mt-2"
                                />
                            ) : null  }
                            <Sprite 
                            className= "card-image-top rounded mx-auto mt-2"
                            onLoad= {() => this.setState({ imageLoading: false })}
                            onError= {() => this.setState({ tooManyRequests: true })}
                            src= {this.state.imageUrl}
                            style = {
                                this.state.tooManyRequests ? { display: "none" } :
                                this.state.imageLoading ? null : { display: "block"}
                            }
                            />
                            {this.state.tooManyRequests ? (<h6 className="mx-auto">
                                <span className= "badge badge-danger mt-2"> Too Many Request</span>
                            </h6>) : null}
                            
                        <div className= "card-body mx-auto"> 
                            <h6 className="card-title"> 
                                {this.state.name
                                .toLowerCase()
                                .split(' ')
                                .map(
                                    letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                )
                                .join(' ')}
                            </h6>
                        </div>
                    </Card>
                </StyledLink>
            </div>
        );
    };
}
