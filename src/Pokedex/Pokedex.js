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
          <h2 className="Pokdex-win">Winning Hand</h2>
        ) : (
          <h2 className="Pokdex-lose">Lossing Hand</h2>
        )}

        <h4>Total Experince: {this.props.tot}</h4>
        <div className="Pokedex-container">
          {this.props.pokemons.map(pokemon => {
            return <PokeCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </div>
    );
  }
}
