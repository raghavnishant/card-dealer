import React, { Component } from "react";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
  // static defaultProps = {
  //   isEditing: false
  // };
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    this.props.formSubmit(this.state);
  }
  render() {
    return (
      <div className="TodoForm">
        <h3 className="TodoForm-tittle">{this.props.title}</h3>
        <form className="TodoForm-form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="New Todo"
            value={this.task}
            onChange={this.handleChange}
          />

          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
