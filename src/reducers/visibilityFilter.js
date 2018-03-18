import { handleActions, combineActions } from "redux-actions";
import { VisibilityFilters, setVisibilityFilter } from "../actions/todo";

// const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
//     switch (action.type) {
//         case 'SET_VISIBILITY_FILTER':
//             return action.filter
//         default:
//             return state;
//     }
// }
const visibilityFilter = handleActions(
  {
    [setVisibilityFilter](state, { payload }) {
      return payload.filter;
    }
  },
  VisibilityFilters.SHOW_ALL
);

export default visibilityFilter;
