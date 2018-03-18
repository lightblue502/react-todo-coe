import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        removeTodo={() => removeTodo(todo.id)}
        toggleTodo={() => toggleTodo(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
