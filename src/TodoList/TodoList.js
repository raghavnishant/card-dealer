import React, { Component } from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/v4";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          task: "Buy milk",
          id: "1d5b16f4-8130-47e4-b715-629e9e375842",
          isEditing: false
        },
        {
          task: "Call thor",
          id: "1d5b16f4-8130-47e4-b715s-629e9e375842",
          isEditing: false
        },
        {
          task: "Date, Emma stone",
          id: "1d5b16f4-8130-e4-b715-629e9e375842",
          isEditing: false
        }
      ]
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.editting = this.editting.bind(this);
    this.save = this.save.bind(this);
  }

  add(item) {
    // console.log(item);
    let newItem = { ...item, id: uuid() };
    console.log(newItem);
    this.setState(st => ({
      todos: [...st.todos, newItem]
    }));
  }

  editting(id) {
    this.setState(st => ({
      todos: [...st.todos].map(todo => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    }));
  }

  save(id, editedTask) {
    this.setState(st => ({
      todos: [...st.todos].map(todo => {
        return todo.id === id ? { ...todo, task: editedTask } : todo;
      })
    }));
  }

  remove(id) {
    this.setState(st => ({
      todos: [...st.todos].filter(task => task.id !== id)
    }));
  }
  render() {
    return (
      <div className="TodoList">
        <h2>Todo List!</h2>
        <p>A simple React Todo List App</p>

        {this.state.todos.map(({ id, ...todo }) => {
          return (
            <Todo
              key={id}
              todo={todo}
              id={id}
              handleRemove={() => this.remove(id)}
              // edit={() => this.editting(id)}
              save={this.save}
            />
          );
        })}

        <NewTodoForm formSubmit={this.add} />
      </div>
    );
  }
}
