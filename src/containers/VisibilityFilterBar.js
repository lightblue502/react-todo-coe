import React from "react";
import { connect } from 'react-redux'
import { VisibilityFilters, setVisibilityFilter } from "../actions/todo";

const VisibilityFilterBar = ({ setFilter }) => (
  <div>
    <button onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}>
      Show All
    </button>
    <button onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}>
      Show Active
    </button>
    <button onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}>
      Show Completed
    </button>
  </div>
);

export default connect(null, { setFilter: setVisibilityFilter })(
  VisibilityFilterBar
);
