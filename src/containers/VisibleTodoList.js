import React from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "../components/TodoList";
import { toggleTodo, VisibilityFilters, removeTodo } from "../actions/todo";
import { createSelector } from "reselect";

const getVisibleTodo = (todos, filter) => {
  // จะโดนเรียกตลอดเวลา 
  // เราจะ cache selector เหล่านี้ได้เพื่อแก้ปัญหา
  console.log("filtering...")
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const tododsSelector = (state) => state.todos
const visibilityFilterSelector = (state) => state.visibilityFilter
const getVisibilityTodoSelector =  createSelector([tododsSelector, visibilityFilterSelector],
  (todos, visibilityFilter) => getVisibleTodo(todos, visibilityFilter)
)

export default connect(
  (state) => ({
    todos: getVisibilityTodoSelector(state) // <- selector
  }),
  { toggleTodo, removeTodo }
)(TodoList);
