import React, { Component } from "react";
import "./CoinFlipper.css";
import Coin from "./Coin";

export default class CoinFlipper extends Component {
  static defaultProps = {
    sides: ["heads", "tails"]
  };
  constructor(props) {
    super(props);

    this.state = {
      face: "",
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };

    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const coin = this.props.sides[Math.floor(Math.random() * 2)];

    this.setState(st => ({
      face: coin,
      nFlips: st.nFlips + 1,
      nHeads: st.nHeads + (coin === "heads" ? 1 : 0),
      nTails: st.nTails + (coin === "tails" ? 1 : 0)
    }));
  }

  render() {
    const { nFlips, nTails, nHeads } = this.state;
    return (
      <div className="CoinFlipper">
        <h1>Lets Flip a Coin!</h1>
        <Coin face={this.state.face} />
        {this.state.nFlips > 0 && (
          <h3>{`Out of ${nFlips}, there have been ${nHeads} Heads and ${nTails} Tails`}</h3>
        )}
        <button onClick={this.flipCoin}>Flip Coin</button>
      </div>
    );
  }
}
