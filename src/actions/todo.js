import { createActions } from "redux-actions";

let currentId = 2;
// export const addTodo = text => ({ type: "ADD_TODO", id: ++currentId, text });
// export const toggleTodo = id => ({ type: "TOGGLE_TODO", id });

export const { addTodo, toggleTodo, removeTodo } = createActions({
  ADD_TODO: text => ({ id: ++currentId, text }),
  REMOVE_TODO: id => ({ id }),
  TOGGLE_TODO: id => ({ id })
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// export const setVisibilityFilter = filter => ({
//   type: "SET_VISIBILITY_FILTER",
//   filter: filter || VisibilityFilters.SHOW_ALL
// });

export const { setVisibilityFilter } = createActions({
  SET_VISIBILITY_FILTER: (filter = VisibilityFilters.SHOW_ALL) => ({
    filter
  })
});
