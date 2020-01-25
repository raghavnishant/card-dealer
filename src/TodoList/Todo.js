import React from "react";
import "./Todo.css";
import NewTodoForm from "./NewTodoForm";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: this.props.todo.task,
      isEditing: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.save(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter here"
            value={this.state.task}
            onChange={evt => this.setState({ task: evt.target.value })}
          />
          <button>Save</button>
        </form>
      );
    }

    //calllin it in now

    return (
      <div className="Todo">
        <h2 className="Todo-title">{this.props.todo.task}</h2>
        <i
          className="fas fa-edit"
          onClick={() => this.setState({ isEditing: true })}
        ></i>
        <i className="fas fa-trash" onClick={this.props.handleRemove}></i>
      </div>
    );
  }
}
