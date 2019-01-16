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
  }
  render() {
    const todoList = this.state.todos.map(item => (
      <TodoItem key={item.key} item={item} />
    ));

    return <div className="todo-list">{todoList}</div>;
  }
}

export default App;
