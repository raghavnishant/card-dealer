import React, { Component } from "react";
import pokemons from "./data";
import Pokedex from "./Pokedex";
// import pokemon from './data'

export default class PokeGame extends Component {
  render() {
    let handOne = pokemons;
    let handTwo = [];
    for (let i = 0; i < 4; i++) {
      handTwo.push(
        handOne.splice(Math.floor(Math.random() * handOne.length), 1)[0]
      );
    }

    console.log(handTwo);

    let handOneTot = handOne.reduce((tot, ele) => tot + ele.ex, 0);
    let handTwoTot = handTwo.reduce((tot, ele) => tot + ele.ex, 0);

    let Wincheck = handOneTot > handTwoTot;
    return (
      <div>
        <Pokedex pokemons={handOne} Wincheck={Wincheck} tot={handOneTot} />
        <Pokedex pokemons={handTwo} Wincheck={!Wincheck} tot={handTwoTot} />
      </div>
    );
  }
}
