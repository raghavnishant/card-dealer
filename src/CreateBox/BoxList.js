import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";
import Box from "./Box";

export default class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: []
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  formSubmit(item) {
    let newItem = { ...item, id: uuid() };
    this.setState(st => ({
      boxes: [...st.boxes, newItem]
    }));
  }

  handleRemove(id) {
    this.setState(st => ({
      boxes: [...st.boxes].filter(colr => colr.id !== id)
    }));
  }
  render() {
    return (
      <div>
        <h1> Box Maker</h1>
        <NewBoxForm formSubmit={this.formSubmit} />
        {this.state.boxes.map(({ id, ...box }) => {
          return (
            <Box
              key={id}
              // id={id}
              box={box}
              handleRemove={() => this.handleRemove(id)}
            />
          );
        })}
      </div>
    );
  }
}
