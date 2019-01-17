import React, { Component } from "react";

import "./App.css";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(preData => {
      const newTodoData = preData.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: newTodoData
      };
    });
  }

  render() {
    const todoList = this.state.todos.map(item => (
      <TodoItem key={item.key} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoList}</div>;
  }
}

export default App;
