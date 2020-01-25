import React, { Component } from "react";
import Box from "./Box";
import "./ColorBox.css";
import { random } from "./helper";
import uuid from "uuid/v4";

export default class ColorBox extends Component {
  // static defaultProps = {
  //   colors: Array.from({length: 18}).map(() => [random(), random(), random()])
  // }
  constructor(props) {
    super(props);

    this.state = {
      colors: Array.from({ length: 18 }).map(cl => {
        return { id: uuid(), color: [random(), random(), random()] };
      })
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(id) {
    console.log(id);
    this.setState(st => ({
      colors: [...st.colors].map(color => {
        return color.id === id
          ? { color: [random(), random(), random()] }
          : color;
      })
    }));
  }
  render() {
    // console.log(this.state.boxes);
    return (
      <div className="ColorBox">
        {this.state.colors.map(({ id, color }) => {
          return (
            <Box
              key={id}
              color={color}
              id={id}
              onClick={id => this.changeColor(id)}
              changeColor={this.changeColor}
            />
          );
        })}
      </div>
    );
  }
}
