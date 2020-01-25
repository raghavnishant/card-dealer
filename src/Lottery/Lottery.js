import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

export default class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBall: 6,
    maxNum: 10
  };

  constructor(props) {
    super(props);

    this.state = {
      balls: Array.from({ length: this.props.maxBall })
    };

    this.generateNums = this.generateNums.bind(this);
  }

  generateNums() {
    this.setState({
      balls: [...this.state.balls].map(ball => {
        return Math.floor(Math.random() * this.props.maxNum) + 1;
      })
    });
  }
  render() {
    return (
      <div className="Lottery">
        <h2>{this.props.title}</h2>
        {this.state.balls.map(num => {
          return <Ball num={num} />;
        })}
        <br />
        <button onClick={this.generateNums}>Geneate</button>
      </div>
    );
  }
}
