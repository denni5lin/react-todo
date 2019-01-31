import React from "react";

import "./App.css";

function TodoItem(props) {
  const completedDisplay = props.item.completed ? "completed-item" : null;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={event => props.handleChange(props.item.id)}
      />
      <p className={completedDisplay}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
