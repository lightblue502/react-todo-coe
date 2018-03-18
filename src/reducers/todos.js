import { handleActions, combineActions } from "redux-actions";
import { addTodo, toggleTodo, removeTodo } from "../actions/todo";
const initialState = [{ id: 1, text: "foo" }, { id: 2, text: "bar" }];
let currentId = 2;

// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       // จัดการกับ state ไม่ควรจะมา gen id
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text
//         }
//       ];
//     case "TOGGLE_TODO":
//       return state.map(
//         t => (t.id === action.id ? { ...t, completed: !t.completed } : t)
//       );
//     default:
//       break;
//   }
//   return state;
// };

const todos = handleActions(
  {
    [addTodo](state, { payload: action }) {
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    },
    [toggleTodo](state, { payload: action }) {
      return state.map(
        t => (t.id === action.id ? { ...t, completed: !t.completed } : t)
      );
    },
    [removeTodo](state, { payload: action }) {
      return state.filter(t => t.id !== action.id);
    }
  },
  initialState
);

export default todos;
