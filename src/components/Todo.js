import React from "react";

const Todo = ({ id, text, toggleTodo, removeTodo, completed }) => (
  <li
    onClick={toggleTodo}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
    <button onClick={removeTodo}> x </button>
  </li>
);
export default Todo;
