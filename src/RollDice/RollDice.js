import React, { Component } from "react";
import { random } from "./helper";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRolling: false,
      die1: random(),
      die2: random()
    };

    this.shaking = this.shaking.bind(this);
  }

  shaking() {
    this.setState({ die1: random(), die2: random(), isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <Die face={this.state.die1} isRolling={this.state.isRolling} />
        <Die face={this.state.die2} isRolling={this.state.isRolling} />
        <br />
        <button onClick={this.shaking} disabled={this.state.isRolling}>
          {!this.state.isRolling ? "Roll Dice" : "Rolling..."}
        </button>
      </div>
    );
  }
}
