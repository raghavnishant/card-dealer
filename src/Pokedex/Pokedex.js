// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprities/pokemon/${id}.png

import React, { Component } from "react";
// import pokemons from "./data";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    return (
      <div className="Pokdex">
        {this.props.Wincheck ? (
          <div className="Pokdex-win">
            <h2>Winning Hand</h2>
            <p>Total {this.props.tot}</p>
          </div>
        ) : (
          <div className="Pokdex-lose">
            <h2>Lossing Hand</h2>
            <p>Total {this.props.tot}</p>
          </div>
        )}
        <div className="Pokedex-container">
          {this.props.pokemons.map(pokemon => {
            return <PokeCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </div>
    );
  }
}
