import React, { Component } from "react";

import "./App.css";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends Component {
  render() {
    const todoList = todosData.map(item => (
      <TodoItem key={item.key} item={item} />
    ));
    return <div className="todo-list">{todoList}</div>;
  }
}

export default App;
