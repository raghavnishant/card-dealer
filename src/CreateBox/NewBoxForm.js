import React, { Component } from "react";

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      width: "",
      color: ""
    };

    this.onchange = this.onchange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onchange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    this.props.formSubmit(this.state);

    this.setState({
      height: "",
      width: "",
      color: ""
    });
  }

  render() {
    const { height, width, color } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          name="height"
          id="height"
          value={height}
          onChange={this.onchange}
        />
        <br />
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          name="width"
          id="width"
          value={width}
          onChange={this.onchange}
        />
        <br />
        <label htmlFor="color">Color: </label>
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={this.onchange}
        />
        <br />
        <button>Add item</button>
      </form>
    );
  }
}
